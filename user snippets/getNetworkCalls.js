/**
 * Demonstrates how to access access all network calls on a via javascript.
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
 */

function mablJavaScriptStep(mablInputs, callback) {
  var networkCalls = window.performance.getEntries();

  // code for checking network calls here

  callback(1);
}
