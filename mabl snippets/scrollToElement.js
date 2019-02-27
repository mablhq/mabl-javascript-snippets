/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

 
  // grab the element
  let element = document.querySelector('CSS selector of element');
  
  // True scrolls to the top of the element, false scrolls to the bottom
  element.scrollIntoView(false);

  callback('Done');
}
