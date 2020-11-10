/**
 * This snippet simulates pressing the browser back button. 
 */
function mablJavaScriptStep(mablInputs, callback) {
    setTimeout(function(){ window.location.back() }, 1000);
    callback(true);
}
