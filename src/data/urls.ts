/** Prefix local paths with the configured deployment base. */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
