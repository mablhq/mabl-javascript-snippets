/**
 * Right-click interactions are now natively supported by the mabl Trainer. 
 * For more info, see the changelog: https://help.mabl.com/changelog/right-click-support
 * Simulates right-clicking an element to display a context menu.
 * Customize by adding a CSS selector to the element variable.
 * To use an xPath, integrate the getElementByXpath snippet.
 * See: https://github.com/mablhq/mabl-javascript-snippets/blob/main/user%20snippets/getElementByXpath.js
 * 
 * Note that this snippet is not compatible with Internet Explorer 11.
 * 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
    let element = document.querySelector(/*cssSelector*/);
    
    // See: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
    let e = new MouseEvent(
        'contextmenu',
        {
            bubbles: true,
            cancelable: true,
            button: 2 // right mouse button
        });
    callback(!element.dispatchEvent(e));
}
