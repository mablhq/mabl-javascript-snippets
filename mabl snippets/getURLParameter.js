/**
 * Parses current URL and grabs the value of a certain parameter
 * For example in https://sandbox.mabl.com/?name=Example&number=20
 * There is a param named name and number with the values of Example and 20 respectively
 *
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback, param = 'name') {

  let url_string = document.URL; // gets the current URL
  let url = new URL(url_string);
  let value = url.searchParams.get(param);
  callback(value);

}