/**
 * Get the value of a cookie you know the name of
 * mabl has built in ways to manipulate cookies:
 * https://help.mabl.com/docs/working-with-cookie-assertions
 */
function mablJavaScriptStep(mablInputs, callback, cookieName = 'myCookie') {

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) {
        callback(parts.pop().split(';').shift());
    }
    callback("Cookie not found");
}
