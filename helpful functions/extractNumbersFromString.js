/**
 * Extracts all numbers found in the provided value
 * @param {String} value - The string you want to extract numbers from
 * @returns {Array<Number>} - Returns an array of all numbers found in "value"
 */
function extractNumbersFromString(value) {
  let matches = value.match(/\d+\.*\d*/g);
  return matches.map(Number);
}
