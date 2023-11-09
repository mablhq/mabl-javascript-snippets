/*
* mabl can record and replay a refresh key press
* You can also do this within a JS snippet
*/

function mablJavaScriptStep(mablInputs, callback) {
  window.location.reload();
  callback(true);
  }
