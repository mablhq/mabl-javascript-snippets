/**
 * Parse text and extract integer values from that text. 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  // grab the element
  let element = document.querySelector('REPLACE_WITH_CSS_SELECTOR');

  // check to see if the element exists
  if (!element) {
    throw Error('Element cannot be found');
  }

  // grab the inner text and parse that text for integers
  let elementText = element.innerText;
  let parsed = parseInt(elementText, 10);

  // check to see if the inner text contains integers, by checking the return value of the parsed text
  if (isNaN(parsed)) {
    throw Error('Inner text does not contain an integer');
  } 

  // return the integer value 
  callback(parsed); 
}
