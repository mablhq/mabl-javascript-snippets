/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    let element = document.querySelector('REPLACE_WITH_CSS_SELECTOR');

    if (element) {
        let elementText = element.innerText;
        let parsed = parseInt(elementText);
        
        if (isNaN(parsed)) {
         throw Error('Inner text does not contain an integer');
        } else {
          callback(parsed);
        }
     
    } else {
        throw Error('Element cannot be found');
    }
  }