/**
 * Asserting against an expected path in the URL in order to assure you ended up on the right URL.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  if (document.location.pathname === '/pricing') {
    callback('pricing path confirmed on page');
  } else {
    throw "incorrect path found on page: " + document.location.pathname;
  }
}