/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // selectSelector is a selector to the <select> element
    // selectValue is the value for the <option> element that needs to be selected
    let selectElement = document.querySelector(mablInputs.variables.user.selectSelector);
    if (selectElement) {
        selectElement.value = mablInputs.variables.user.selectValue;
        selectElement.dispatchEvent(new Event('change'));
    }
    callback(true);
}
