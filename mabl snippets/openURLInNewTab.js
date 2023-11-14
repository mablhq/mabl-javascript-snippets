/*
* You can open and close tabs with javascript
* Parameterized, pass in the URL you want opened in the Site variable
* https://www.w3schools.com/jsref/met_win_close.asp
* https://www.w3schools.com/jsref/met_win_open.asp
*/
function mablJavaScriptStep(mablInputs, callback, Site = 'https://sandbox.mabl.com/') {
    let NewURL = window.open(Site, '_blank');
    callback(true);
}