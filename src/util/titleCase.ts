/**
 *
 * @param {string} input The string to convert to title case
 * @returns {string} The inputted string converted to title case
 */
export default function titleCase(input: string): string {
  return input
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
