/**
 * Queries the page and returns all elements matching the provided xpath.
 * @param {String} path - Xpath to find the desired elements
 * @returns {Array<Element>} The found elements 
 */
function queryXpathAll(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < query.snapshotLength; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}
