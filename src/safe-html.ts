const htmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value: string | number): string {
  return String(value).replace(/[&<>"']/g, (character) => htmlEntities[character]);
}

export function safeHref(value: string): string {
  const trimmed = value.trim();
  if (/^(https?:\/\/|mailto:|#)/i.test(trimmed)) return escapeHtml(trimmed);
  return "#";
}
