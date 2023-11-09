/**
 * Get the value of a cookie you know the name of
 */
function mablJavaScriptStep(mablInputs, callback, cookieName = 'myCookie') {

  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      console.log(c.substring(name.length, c.length));
      callback (c.substring(name.length, c.length));
    }
  }
  callback ("");
}