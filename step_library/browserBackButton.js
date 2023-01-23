/**
 * This snippet simulates pressing the browser back button.
 * NOTE: The action is called in a setTimeout because it must run in the page after the snippet is done running.
 */
function mablJavaScriptStep(mablInputs, callback) {
  setTimeout(function () {
    window.history.back();
  }, 1000);
  callback(true);
}
