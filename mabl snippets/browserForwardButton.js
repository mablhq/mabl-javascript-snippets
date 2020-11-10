/**
 * This snippet simulates pressing the browser forward button. 
 */
function mablJavaScriptStep(mablInputs, callback) {
    setTimeout(function(){ window.location.forward() }, 1000);
    callback(true);
}
