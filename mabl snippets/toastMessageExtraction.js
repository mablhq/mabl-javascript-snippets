/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
//This function takes 2 parameters the selector to interact with the button or element to initiate a toast message, 
//and the selector for a given toast message to extract innertext from.  The default wait for this snippet is 25 seconds
//but can be increased by adding to the value less than or equal to count on line 34

function mablJavaScriptStep(mablInputs, callback, buttonSelector = 'buttonSelectorParameter', toastSelector = 'toastSelectorParameter') {

//Initiate toast message 
let button = document.querySelector(buttonSelector);
button.click();
// Create the interval that will keep looping until the clearInterval is called.
let interval = setInterval(loop, 1000);
let count = 0;
// Iterate through loop for 25 seconds, if toast message is present and call back the innerText, or call back error message if loop timesout
function loop() {
    count++;
    let toastIsPresent = document.querySelectorAll(toastSelector).length > 0;
    if (toastIsPresent) {
        clearInterval(interval);
        callback(document.querySelector(toastSelector).innerText);
    }
    if (count >= 25) {
        clearInterval(interval);
        callback("25 seconds elapsed. Loop Terminated.")
    }
  }
}
