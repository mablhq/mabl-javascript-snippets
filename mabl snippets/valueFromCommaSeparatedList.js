/**
 * TITLE: Value from comma separated list
 * NOTE: This is a 1-indexed list. If you want the first value from the list, set "index" to "1"
 *
 * @mablParam: list - A comma separated list of values that will work like an array
 *
 * @mablParam: index - The index of the item you would like to get from the list
 *
 * @mablReturn: The value from the index in the list
 *
 */
function mablJavaScriptStep(mablInputs, callback, index = '1', listString = '1,2,3,4') {

    // Split the list into multiple values
    let listArray = listString.split(",");
    // Get the correct value from the list at the desired index
    let returnValue = listArray[index];

    // Log the index and the value returned
    console.log("Returned value from index " + index + ": " + returnValue);
    // Return the desired value
    // For the default values, list = 1,2,3,4 and index = 1, it will return 2
    callback(returnValue);
}
