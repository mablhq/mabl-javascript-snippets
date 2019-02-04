/**
 * Checking for a valid 2xx response on the target URL (https://uinames.com/api/?ext) 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  // set the URL you want to test as the variable
  let url = 'https://uinames.com/api/?ext';
  // check for the status code while passing credentials to the target website
  fetch(url, {
   method: 'GET',
   credentials: 'include'
 }).then(apiResponse => {
    console.log(apiResponse);
    if (apiResponse.ok) {
      return callback(apiResponse.status);
    } else {
      throw new Error(`Unexpected response code of ${apiResponse.status} when retrieving ${url}`);
    }
  });
}