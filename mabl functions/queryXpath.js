/**
 * Queries the page and returns the first element matching the provided xpath.
 * @param {String} path - Xpath to find the desired element
 * @returns {Element} The found element 
 */
function queryXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
