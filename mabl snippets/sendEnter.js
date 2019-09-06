/**
 * Sends an enter key press to an element specified using a selector in
 * the 'enterTargetSelector' variable.
 * 
 * Required mabl variables:
 *   enterTargetSelector - an XPath or CSS selector to locate the target element
 * 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  // Creates an enter event.
  // For a full list of keyCode-s visit https://keycode.info/
  let enterEvent = new KeyboardEvent("keydown", {
    bubbles: true, cancelable: true, keyCode: 13
  });

  let targetElement = document.querySelector(mablInputs.variables.user.enterTargetSelector);

  targetElement.dispatchEvent(enterEvent);

  callback('pass');
}
