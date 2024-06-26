/**
 * Scroll down one page.
 */
function mablJavaScriptStep(mablInputs, callback) {
    let windowHeight = window.innerHeight;
    let scrollValue = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollBy(0, windowHeight + scrollValue);
    callback(windowHeight + scrollValue);
}

