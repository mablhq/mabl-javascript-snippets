/**
 * Checks value to see if it is a number
 * If not it will attempt to extract and return any numbers found.
 * https://www.w3schools.com/jsref/jsref_isnan_number.asp
 */
function mablJavaScriptStep(mablInputs, callback, value = '123') {

    // NaN stands for 'Not a Number'
    if (!isNaN(value)) {
        callback("Success: Value is a number: " + value);
    } else {
            // From mabl function extractNumbersFrom
            // Extracts all numbers found in the provided value
        let matches = value.match(/\d+\.*\d*/g);
            // For example if you plug in value = "No21Way78"
            // It will return ["21","78"]
        if (matches) {
            // Mapping it converts it to a more easily managed [21, 78]
            callback(matches.map(Number));
        } else {
            throw ("Failure: Value does not contain number");
        }
    }
}