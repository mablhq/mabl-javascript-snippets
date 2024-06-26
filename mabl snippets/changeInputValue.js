/*
* For this snippet add parameters called text and xpath
* text should be what string you want to change it to
* xpath is the path to whatever element you want to change
* The current values have been left as an example
*/

function mablJavaScriptStep(mablInputs, callback, text = 'changed it', xpath = '//input[@type="text"]') {
    let output = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    output.value = text;
    callback(output.value);
}
