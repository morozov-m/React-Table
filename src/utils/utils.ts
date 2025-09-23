export function getUniqueValues<T>(
  array: T[],
  selector: (item: T) => string
): string[] {
  const set = new Set(array.map(selector));
  return Array.from(set);
}
