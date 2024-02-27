/**
 * This snippet simulates pressing the browser back button.
 * We use the setTimeout to make sure the snippet does not fail if it takes too long to load the previous page.
 */
function mablJavaScriptStep(mablInputs, callback) {
    setTimeout(function () { window.history.back() }, 1000);
    callback(true);
}
