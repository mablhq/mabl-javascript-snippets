/*
* You can open tabs with JavaScript. 
* This snippet example is parameterized. Add the tabURL as a snippet parameter with the URL you want opened.
* https://www.w3schools.com/jsref/met_win_open.asp
*/
function mablJavaScriptStep(mablInputs, callback, tabURL = 'https://acme.com') {
  try {
    // Attempt to open the new tab
    window.open(tabURL, "_blank");
    callback(true);
  } catch (err) {
    // Log the error and fail the step
    console.error("Tab failed to open: " + err.message);
    callback(false); 
  }
}