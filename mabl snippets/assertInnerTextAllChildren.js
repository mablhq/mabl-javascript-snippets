/**
 * JS snippet to get number of child elements
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
 
function mablJavaScriptStep(mablInputs, callback) {
  
  // gets the parent element
  const parentElement = document.getElementById('REPLACE_WITH_ID'); 
  
  // looping through all child elements
  for (let i = 0; i < parentElement.childNodes.length; i++) {
     const node = parentElement.childNodes[i];
     if (node.nodeType == Node.ELEMENT_NODE ) {
        if(!node.innerText.includes("REPLACE_WITH_INNERTEXT_ASSERTION")) {
        // failed assertion
        callback("Failed assertion against innertext in " + i + " child element")
        }
    }
  }
  
// passed assertion
callback("Assertion against all child elements passed")
}
