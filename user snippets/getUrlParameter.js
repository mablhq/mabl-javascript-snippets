/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

  let url_string = document.URL; // gets the current URL
  let url = new URL(url_string);
  let Id = url.searchParams.get("Id");// give the paramter to retrieve
  callback(Id);
  
}
