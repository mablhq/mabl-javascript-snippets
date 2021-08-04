/**
 * Simulates right-clicking an element to display a context menu.
 * Customize by adding a CSS selector to the element variable.
 * To use an xPath, integrate the getElementByXpath snippet.
 * 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
    let element = document.querySelector(/*cssSelector*/);
    
    let e = element.ownerDocument.createEvent('MouseEvents');
    e.initMouseEvent('contextmenu', true, true,
        element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
        false, false, false, 2, null);
    callback(!element.dispatchEvent(e));
}