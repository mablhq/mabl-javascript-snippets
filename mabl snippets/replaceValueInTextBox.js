/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // enter code here, return result in callback
    var x = document.getElementById('REPLACE_WITH_ELEMENT_ID');
    
    // check if the element exists
    if (x === null) {
        throw new Error('Element not found');
    }
    
    // set value
    x.setAttribute('value', 'REPLACE_WITH_VALUE');
    x.value = 'REPLACE_WITH_VALUE';
    
  
    callback('Done');
  }
