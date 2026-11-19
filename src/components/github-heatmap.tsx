import { useEffect, useMemo, useState } from 'react';
import { ContributionHeatmap, createDateString, getLastYearPeriod, groupByWeeks, type ContributionData } from '@pearpages/heatmap';
import '@pearpages/heatmap/styles.css';

type ApiDay = { date: unknown; count: unknown; level: unknown };

export function GithubHeatmap() {
  const [days, setDays] = useState<ContributionData[] | null>(null);
  const [year, setYear] = useState('last');
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://github-contributions-api.jogruber.de/v4/kwAsant?y=all', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Contribution data unavailable');
        return response.json() as Promise<{ contributions?: ApiDay[] }>;
      })
      .then((data) => {
        if (!Array.isArray(data.contributions)) throw new Error('Invalid contribution data');
        const entries = data.contributions.filter((day): day is ContributionData =>
          typeof day.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day.date) &&
          typeof day.count === 'number' && Number.isInteger(day.count) && day.count >= 0 &&
          typeof day.level === 'number' && Number.isInteger(day.level) && day.level >= 0 && day.level <= 4,
        ).sort((a, b) => a.date.localeCompare(b.date));
        if (!entries.length) throw new Error('No contribution data');
        setDays(entries);
      })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, []);

  const years = useMemo(() => [...new Set((days ?? []).map((day) => day.date.slice(0, 4)))].sort().reverse(), [days]);
  const period = year === 'last' ? getLastYearPeriod() : { start: new Date(Number(year), 0, 1), end: new Date(Number(year), 11, 31) };
  const start = createDateString(period.start);
  const end = createDateString(period.end);
  const contribution = (days ?? []).filter((day) => day.date >= start && day.date <= end);
  const total = contribution.reduce((sum, day) => sum + day.count, 0);

  return <>
    <p className="cv-contributions-intro">A supporting view of GitHub activity.</p>
    <div className="cv-contributions-layout">
      <div className="cv-contributions-chart">
        {error ? <p className="cv-heatmap-status" role="status">GitHub activity is temporarily unavailable.</p> : !days ? <p className="cv-heatmap-status" role="status">Loading GitHub activity…</p> : <ContributionHeatmap className="contribution-heatmap--light cv-github-heatmap" locale="en-GB" data={{ contribution, period, weeks: groupByWeeks(contribution) }} />}
      </div>
      <div className="cv-contributions-summary">
        <p className="cv-contributions-label">GitHub activity</p>
        {days && !error && <>
          <p className="cv-contributions-count" aria-live="polite">{total.toLocaleString('en-GB')}</p>
          <p>contributions {year === 'last' ? 'in the last year' : `in ${year}`}. Activity counts are not a measure of impact.</p>
          <div className="cv-heatmap-toolbar"><label>Period <select value={year} onChange={(event) => setYear(event.target.value)} aria-label="Contribution period"><option value="last">Last year</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select></label></div>
        </>}
        <a className="cv-heatmap-link" href="https://github.com/kwAsant" target="_blank" rel="noopener noreferrer">View GitHub profile</a>
      </div>
    </div>
  </>;
}
