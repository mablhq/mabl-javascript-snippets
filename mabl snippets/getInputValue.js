/*
* Parameterized, can pass in a selector and get the value of that element.
*/
function mablJavaScriptStep(mablInputs, callback, css = 'h3:nth-child(1)', xpath = 'h3') {
    // Check for and replace empty selectors to allow this snippet to run.
    if (!css) {
        css = " ";
    }
    if (!xpath) {
        xpath = " ";
    }
    if (css < xpath) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
        // The below version will use the given xpath to grab the first object that matches it.
        let output = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        callback(output.value);
    } else if (css > xpath) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        // querySelector will return the first element in the document that matches the CSS selector given.
        let output = document.querySelector(css);
        callback(output.textContent);
    } else {
        callback('No Selector Provided');
    }

    callback("There was an issue");

}