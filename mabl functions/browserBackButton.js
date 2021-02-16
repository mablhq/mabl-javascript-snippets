/**
 * Tells the browser to go back one page
 * NOTE: This function needs to be called LAST in your snippet
 */
function browserBackButton() {
    setTimeout(function(){ window.history.back() }, 1000);
    callback(true);
}
