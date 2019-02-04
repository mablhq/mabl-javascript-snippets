/**
 * Using mablInputs to define the path of a URL.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  
  // pull a previously defined variable out of the built-in mablInputs
  // object to use in the javascript code
  let path = mablInputs.variables.user.myTestPath;
  
  // get the current URL of the document
  let currentURL = document.URL;
  
  // create a new URL combining both javascript variables
  let finalURL = `${currentURL}/${path}`;
  
  // perform the callback with the finalURL value to be saved as a variable
  callback(finalURL);
}

