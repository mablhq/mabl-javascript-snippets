/*
* You can open and close windows with javascript
* https://www.w3schools.com/jsref/met_win_close.asp
* https://www.w3schools.com/jsref/met_win_open.asp
*/
function mablJavaScriptStep(mablInputs, callback, Site = 'https://sandbox.mabl.com/') {
    let NewURL = window.open(Site, '_blank', "width=300, height=300");
    callback(true);
}