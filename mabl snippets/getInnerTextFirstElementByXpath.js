/**
 * Gets an element by XPath.
 * Get an element by valid XPath, also includes options of extracting text or clicking
 * @param {string} path - a valid XPath to the element
 * @example
 * let elementXpath = "//*[contains(text(),'match')]";
 * getElementByXpath(elementXpath);
 * getElementByXpath(elementXPath).click();
 * getElementByXpath(elementXPath).innerText();
 */
function mablJavaScriptStep(mablInputs, callback, elementXpath = '//div/p') {

    let element = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let elementInnerText = element.innerText;
    callback(elementInnerText);
}