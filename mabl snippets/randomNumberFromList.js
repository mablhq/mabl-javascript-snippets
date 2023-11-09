/**
* Run a snippet of JavaScript during a mabl test or flow
*/
function mablJavaScriptStep(mablInputs, callback, numberList = '["12345", "54321", "56789", "98765"]') {

// Convert input into a JSON array
let numList = JSON.parse(numberList);

// Randomly pick one of the numbers in the array
const result = () => {
    return numList[Math.floor(Math.random() * numList.length)];
  }
  callback(result());
}
