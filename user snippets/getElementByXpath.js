function mablJavaScriptStep(mablInputs, callback, path = undefined) {
  let element = getElementByXpath(path)
  callback (element.innerText);
}
/**
 * Queries the page using the supplied Xpath (path variable) and returns the first element matching the provided xpath.
 * This version of the snippet is an implementation of https://github.com/mablhq/mabl-javascript-snippets/blob/main/mabl%20functions/findFirstElementMatchingXpath.js
 * element.innerText can be changed to element.click() to click on the element instead of returning a value.
 * @param {String} path - Xpath to find the desired element
 * @returns {Element} The found element 
 */
function findFirstElementMatchingXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
