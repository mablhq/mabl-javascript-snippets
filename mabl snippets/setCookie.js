/**
 * https://www.w3schools.com/js/js_cookies.asp
 */
function mablJavaScriptStep(mablInputs, callback, cookieName = 'myCookie', cookieValue = '123546135353454365466456') {

    document.cookie = cookieName + cookieValue;

    callback("Current cookie value: " + document.cookie);
}