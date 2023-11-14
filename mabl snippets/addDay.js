/**
 * Return a date in mm/dd/yyyy format offset by a user specified number of days (parameterized)
 */
function mablJavaScriptStep(mablInputs, callback, daysToAdd = '1') {
    var today = new Date();
    if (daysToAdd > 0) {
        today.setDate(today.getDate() + parseInt(daysToAdd));
    } else {
        today.setDate(today.getDate() - parseInt(daysToAdd));
    }


    var finalDateTime = today.toLocaleString();
    finalDateTime = finalDateTime.substring(0, finalDateTime.indexOf(",")); //Substring to remove everything after comma

    // perform the callback with the result
    callback(finalDateTime);
}