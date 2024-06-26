/**
  * Set the value of a cookie you know the name of
  * mabl has built in ways to manipulate cookies:
  * https://help.mabl.com/docs/working-with-cookie-assertions
 */
function mablJavaScriptStep(mablInputs, callback, cookieName = 'myCookie', cookieValue = '123546135353454365466456') {

    document.cookie = cookieName + cookieValue;

    callback("Current cookie value: " + document.cookie);
}