/**
 * Replace this with a detailed description of what your custom JS snippet does.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  /**
   * Gets an element by XPath.
   * @param {string} path - a valid XPath to the element
   * @example
   * let elementXpath = "//*[contains(text(),'match')]";
   * getElementByXpath(elementXpath);
   * getElementByXpath(elementXPath).click();
   * getElementByXpath(elementXPath).innerText();
   */
  function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
}
