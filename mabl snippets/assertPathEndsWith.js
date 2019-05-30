/**
 * Verifies that the current page URL ends with the value stored
 * in the variable 'endsWithString'.
 * 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  let endsWithString = mablInputs.variables.user.endsWithString;
  if (!endsWithString) {
    throw 'endsWithString variable must be defined';
  }
  
  if (document.location.pathname.endsWith(endsWithString)) {
    callback('Page URL ends with expected string');
  } else {
    throw 'Page URL ' + document.location.pathname + ' does not end with \'' + endsWithString + '\'';
  }
}
