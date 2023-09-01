export default function createTitle(title?: string) {
  if (!title) return "Runningwater";
  return `${title} | Runningwater`;
}
