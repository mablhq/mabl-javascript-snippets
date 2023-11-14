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
function mablJavaScriptStep(mablInputs, callback) {
    // Get the value of the mabl variable "list"
    let listString = mablInputs.variables.user.list;
    // throw an error if no list was provided
    if (!listString) {
        throw ("variable 'list' was not created before this Snippet was run.");
    }
    // Get the value of the mabl variable "index"
    let recievedIndex = mablInputs.variables.user.index;
    // Default the "index" to 0 if no index was provided
    let index = recievedIndex ? parseInt(recievedIndex) - 1 : 0;
    // throw an error if the index provided was less then 1
    if (index < 0) {
        throw ("The index provided needs to be 1 or more.");
    }

    // Split the list it into multiple values
    let listArray = listString.split(",");
    // Get the correct value from the list at the desired index
    let returnValue = listArray[index];

    // Log the index and the value returned
    console.log(
        "Returned value from index " + recievedIndex + ": " + returnValue
    );
    // Return the desired value
    callback(returnValue);
}
