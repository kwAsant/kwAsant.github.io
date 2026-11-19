import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { LiquidGlass } from '../components/liquid-glass';

let dispose: (() => void) | undefined;

export function initSportGlass(): void {
  dispose?.();
  dispose = undefined;
  const page = document.querySelector<HTMLElement>('.practice-coming--field');
  const lens = page?.querySelector<HTMLElement>('[data-sport-glass]');
  if (!page || !lens) return;

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!finePointer.matches || reducedMotion.matches) return;
  const root = createRoot(lens);
  root.render(createElement(LiquidGlass, { radius: 100, scale: 48, aberration: 14, bevelDepth: 37, frost: 0.4, tint: 0.12, className: 'sport-glass-surface' }));
  let frame = 0;
  let x = 0;
  let y = 0;
  const hide = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    lens.classList.remove('is-visible');
  };
  const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) return;
    x = event.clientX;
    y = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      lens.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      lens.classList.add('is-visible');
      frame = 0;
    });
  };
  page.addEventListener('pointermove', move);
  page.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  reducedMotion.addEventListener('change', hide);
  finePointer.addEventListener('change', hide);
  dispose = () => {
    cancelAnimationFrame(frame);
    page.removeEventListener('pointermove', move);
    page.removeEventListener('pointerleave', hide);
    window.removeEventListener('blur', hide);
    reducedMotion.removeEventListener('change', hide);
    finePointer.removeEventListener('change', hide);
    root.unmount();
  };
}
