/**
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
    // save the found elements to a variable
    let elements = document.querySelectorAll('REPLACE_WITH_CSS_SELECTOR');
    // determine the number of elements found
    let elementCount = elements.length;
    // perform the callback with the elementCount
    callback(elementCount);
  }
  
  
  