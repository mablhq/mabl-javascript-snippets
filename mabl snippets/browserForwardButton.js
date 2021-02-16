/**
 * This snippet simulates pressing the browser forward button. 
 */
function mablJavaScriptStep(mablInputs, callback) {
    setTimeout(function(){ window.history.forward() }, 1000);
    callback(true);
}
