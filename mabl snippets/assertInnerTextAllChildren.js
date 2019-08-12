/**
 * JS snippet to get number of child elements
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
 
function mablJavaScriptStep(mablInputs, callback) {
  
  // gets the parent element
  var parentElement = document.getElementById('REPLACE_WITH_ID');
  
  // to count the child number of failing assertion
  var countPos = 0; 
  
  // looping through all child elements
  for (var i = 0; i < parentElement.childNodes.length; i++) {
     var node = parentElement.childNodes[i];
     if (node.nodeType == Node.ELEMENT_NODE ) {
        if(!node.innerText.includes("REPLACE_WITH_INNERTEXT_ASSERTION")) {
        // failed assertion
        callback("Failed assertion against innertext in " + countPos + " child element")
        }
        countPos++;
    }
  }
  
// passed assertion
callback("Assertion against all child elements passed")
}
