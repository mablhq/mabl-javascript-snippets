/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
function mablJavaScriptStep(mablInputs, callback) {

  // Gets the page element by ID
  let textbox = document.querySelector('#REPLACE_WITH_CSS_SELECTOR');

  // check that the element is not null or undefined
  if (!textbox) {
    throw Error('Element cannot be found');
  }

  // click on textbox and insert text
  textbox.value = "REPLACE_WITH_TEXT_TO_BE_INSERTED";

  // fire a change event
  // some forms require specific change events so that the validation can work correctly.
  // Consider using any of these events as well:
  // ['focus', 'keydown', 'keypress', 'textInput', 'input', 'keyup', 'change', 'blur']
  let event = new Event('input');
  textbox.dispatchEvent(event);

  // text has been entered into textbox
  callback('Value has been inserted into textbox')
}
