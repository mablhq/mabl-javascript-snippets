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

    if (var1 === null || var2 === null) {
        throw new Error('One or both of these variables do not exist');
    }
    
    // resulting variable that will tell you if the two arguments are equal
    var result = 'not equal';

    // comparison
    if (var1 === var2) {
        result = 'equal';
    }
    else {
        throw new Error("These arguments are not equal")
    }
    
    // see the result through use of the callback function
    callback(result);
  }