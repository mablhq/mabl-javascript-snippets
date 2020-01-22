/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    let result = '';
     
    // get element location by passing it a Journey parameter named rowID
    const element = document.querySelector('CSS selector' + mablInputs.variables.user.rowID);
    if (!element) {
        // If element is not found throw an error
        throw Error('Cannot locate the element');
    }
         
    // false will scroll to the bottom of the element whereas true will scroll to the top
    element.scrollIntoView(false);
    
    result = 'Scrolled element into view';
    
    callback(result);
}
