/*
* Parameterized, can pass in the xpath.
* Current value of xpath left as an example
*/
function mablJavaScriptStep(mablInputs, callback, xpath = '//html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]') {

  let output = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  callback(output.value);
}