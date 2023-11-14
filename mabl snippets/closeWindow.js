/*
* You can open and close windows with javascript
* https://www.w3schools.com/jsref/met_win_close.asp
* https://www.w3schools.com/jsref/met_win_open.asp
*/

function mablJavaScriptStep(mablInputs, callback) {
    window.setInterval(() => {
        window.close();
    }, 1000);
    callback(true);
}