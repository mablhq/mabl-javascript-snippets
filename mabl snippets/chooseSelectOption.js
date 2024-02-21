/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback, CssSelector = "ThisIsASelector", selectValue = "ValueYourself") {
// Parameterize!
    // selectSelector is a selector to the <select> element
    // selectValue is the value for the <option> element that needs to be selected
    let selectElement = document.querySelector(CssSelector);
    if (selectElement) {
        selectElement.value = selectValue;
        selectElement.dispatchEvent(new Event('change'));
    }
    callback(true);
}


// CSS
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// querySelector will return the first element in the document that matches the CSS selector given.

// XPath
// https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
// document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Id
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// getElementById searches the document for a unique ID, it can only work if the element you want has an id.
// let select = document.getElementById(elementId);
