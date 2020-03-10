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
    let list = mablInputs.variables.user.list;
    // Get the value of the mabl variable "index"
    let index = parseInt(mablInputs.variables.user.index) + 1;

    // Split the list it into multiple values
    list = list.split(",");

    // Return a string that says how many elements were found and informs that they are enabled.
    console.log("Returned value from index" +  + ": " + list[parseInt(index)]);
    callback(list[parseInt(index)]);
}