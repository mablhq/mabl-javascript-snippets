/**
 * Using mablInputs to define the path of a URL.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  
    // grab any variable here that you would like to compare against a value or another variable
    let var1 = mablInputs.variables.user.var1;

    // variable 2 to use in comparison
    let var2 = mablInputs.variables.user.var2; 

    // double Equal sign will check to see if these variables are null or undefined
    if (var1 == null || var2 == null) {
        throw new Error('One or both of these variables do not exist');
    }
  
    // comparison taking place, if not equal, throw an error
    if (var1 === var2) {
        callback('Equal');
    }
    else {
        throw new Error("These arguments are not equal")
    }
  }
