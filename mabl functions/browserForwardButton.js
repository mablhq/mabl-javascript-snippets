/**
 * Tells the browser to go forward one page
 * NOTE: This function needs to be called LAST in your snippet
 */
function browserForwardButton() {
    setTimeout(function(){ window.location.forward() }, 1000);
    callback(true);
}