export function isUrl(url: string): boolean {
  return URL.parse(url) !== null;
}
