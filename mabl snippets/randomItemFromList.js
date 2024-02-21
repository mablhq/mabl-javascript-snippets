/**
 * Parse a list and then use it as an array
 */
function mablJavaScriptStep(mablInputs, callback, itemList = '["12345", "54321", "pizza", "pie"]') {

// Convert input into a JSON array
    let parsedList = JSON.parse(itemList);

// Randomly pick one of the items in the array
    const result = parsedList[Math.floor(Math.random() * parsedList.length)];
    callback(result);
}
