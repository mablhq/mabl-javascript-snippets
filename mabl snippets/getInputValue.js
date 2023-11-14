/*
* Parameterized, can pass in the xpath.
* Current value of xpath left as an example
*/
function mablJavaScriptStep(mablInputs, callback, xpath = '//input[@type="text"]') {

    let output = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    callback(output.value);
}