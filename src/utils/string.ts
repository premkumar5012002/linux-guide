export function firstLetterToUpperCase(string: string) {
  return string
    .split("-")
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join(" ");
}
