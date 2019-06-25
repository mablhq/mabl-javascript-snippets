/**
 * Run a small snippet of JavaScript during a mabl flow/journey
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
  // document.defaultView returns the window object in your browser. mabl gives you access to document, but not window
  var window = document.defaultView;
  // document.defaultView.performance.getEntries() returns a list of all network calls made (works in latest Chrome and Firefox)
  var networkCalls = window.performance.getEntries();

  // code for checking network calls here

  callback(1);
}
