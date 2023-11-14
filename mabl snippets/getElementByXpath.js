// Get an element by valid XPath, also includes options of extracting text or clicking
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
    let elementXpath = "//div/p";
    let element = getElementByXpath(elementXpath).innerText;
    callback(element);

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
}