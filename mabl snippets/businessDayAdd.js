/**
 * Return a date in mm/dd/yyyy format offset by a user specified number of business days (parameterized)
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
 function mablJavaScriptStep(mablInputs, callback, daysToAdd = undefined) {
    var today = new Date();

   if(daysToAdd > 0){
        //Adds days for each business day
        for (var i = 1; i <= daysToAdd; i++) {
            today.setDate(today.getDate() +1);
            if (today.getDay() === 6) {
                today.setDate(today.getDate() +2);
            }
            else if (today.getDay() === 0) {
                today.setDate(today.getDate() +1);
            }
        }
    }
    else{
        for (var i = daysToAdd; i <= 0; i++) {
            today.setDate(today.getDate()-1);
            if (today.getDay() === 6) {
                today.setDate(today.getDate()-2);
            }
            else if (today.getDay() === 0) {
                today.setDate(today.getDate()-1);
            }
        }
    }
   

   var finalDateTime = today.toLocaleString();
   finalDateTime = finalDateTime.substring(0,finalDateTime.indexOf(",")); //Substring to remove everything after comma
   
   // perform the callback with the result
   callback(finalDateTime);
}