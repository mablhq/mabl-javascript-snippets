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

  // Please set this value as for prefix of exract url 
  const urlPrefix = "https://daipresents.com";

  // to \n
  // const urlRegExp = "(" + urlPrefix + ".*)";

  // to a space. The param use only +, &, =, ? so if you need add new charactor here
  const urlRegExp = "(" + urlPrefix + "([+&=\?\/]|[a-z]|[A-Z]|[0-9])*)";

  let regexp = new RegExp(urlRegExp);
  
  let emailContents = document.getElementsByClassName('mabl-text-body')[0].value;
  let url = emailContents.match(regexp)[1];

  callback(url);
}
