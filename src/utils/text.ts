export function truncateText(value: string, length = 155) {
  if (value.length <= length) {
    return value;
  }

  return `${value.slice(0, length - 1).trimEnd()}...`;
}
