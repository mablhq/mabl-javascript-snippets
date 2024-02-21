/**
 * Return a date in mm/dd/yyyy format offset by a user specified number of business days (parameterized)
 */
function mablJavaScriptStep(mablInputs, callback, daysToAdd = undefined) {
    var today = new Date();


    if (daysToAdd > 0) {
        //Adds days for each business day
        for (var i = 1; i <= daysToAdd; i++) {
            today.setDate(today.getDate() + 1);
            if (today.getDay() === 6) {
                today.setDate(today.getDate() + 2);
            } else if (today.getDay() === 0) {
                today.setDate(today.getDate() + 1);
            }
        }
    }


    var finalDateTime = today.toLocaleString();
    //Substring to remove everything after comma
    finalDateTime = finalDateTime.substring(0, finalDateTime.indexOf(","));
    // perform the callback with the result
    callback(finalDateTime);
}