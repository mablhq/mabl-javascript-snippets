/**
 * Gets the specified CSS Property of a given element
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 *
 * Simplified Example: 
 *   function mablJavaScriptStep(mablInputs, callback) {
 *     let selector = document.querySelector('[class="button demo"] div:nth-of-type(2)');
 *     let element = getComputedStyle(selector);
 *     callback(element.getPropertyValue('background-color'));
 *   }
 */

function mablJavaScriptStep(mablInputs, callback) {
  // using an xpath
  //let selector = getElementByXpath(mablInputs.variables.user.selector_xpath);
  
  // using a css selector
  let selector = document.querySelector(mablInputs.variables.user.selector_css);
  
  let element = getComputedStyle(selector);
  callback(element.getPropertyValue(mablInputs.variables.user.css_property));
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
