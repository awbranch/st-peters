export function splitText(text: string) {
  return text
    .split(/\n+/)
    .filter((t) => t.length > 0)
    .map((t) => t.trim());
}

export function isFullyQualifiedURL(url?: string) {
  if (!url) return false;
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}
