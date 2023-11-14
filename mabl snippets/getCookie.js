/**
 * Get the value of a cookie you know the name of
 */
function mablJavaScriptStep(mablInputs, callback, cookieName = 'myCookie') {

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) {
        callback(parts.pop().split(';').shift());
    }
    callback("Cookie not found");
}
