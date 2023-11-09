/**
* Succeeds if it is a number, will fail otherwise.
*/
function mablJavaScriptStep(mablInputs, callback, myNumber = '123') {
  // NaN stands for 'Not a Number'
  if (isNaN(myNumber) === false) {
    callback("Success: Output contains a number")
  } else {
    throw ("Failure: Output does not contain number")
  }
}