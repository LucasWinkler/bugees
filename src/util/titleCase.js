/**
 *
 * @param {string} str The string to convert to title case
 * @returns {string} The string converted to title case
 */
export default function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
