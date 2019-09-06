/**
 * Sends an enter key press to an element specified using a selector in
 * the enterTargetSelector variable.
 * 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  let enterEvent = new KeyboardEvent("keydown", {
    bubbles: true, cancelable: true, keyCode: 13
  });

  let targetElement = document.querySelector(mablInputs.variables.user.enterTargetSelector);

  targetElement.dispatchEvent(enterEvent);

  callback('pass');
}
