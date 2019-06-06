/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  // locate the checkbox element
  let checkBox = document.querySelector('REPLACE_WITH_CSS_SELECTOR');

  // check that the element is not null or undefined
  if (!checkBox) {
    throw Error('Element cannot be found');
  }

  // if the checkbox is not checked, throw the corresponding error
  if (!checkBox.checked) {
    throw Error('The checkbox is not checked');
  }

  callback(true);

}
