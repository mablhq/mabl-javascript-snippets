/**
 * Succeeds if it is a number, will fail otherwise.
 * https://www.w3schools.com/jsref/jsref_isnan_number.asp
 */
function mablJavaScriptStep(mablInputs, callback, myNumber = '123') {
    // NaN stands for 'Not a Number'
    // You could also use 'if (!isNaN(myNumber)) {'
    if (isNaN(myNumber) === false) {
        callback("Success: Output contains a number")
    } else {
        throw ("Failure: Output does not contain number")
    }
}