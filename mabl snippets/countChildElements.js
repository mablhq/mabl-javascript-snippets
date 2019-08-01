/**
 * JS snippet to get number of child elements
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
 
function mablJavaScriptStep(mablInputs, callback) {

  // Gets the page element by ID
  let id_result = document.getElementById("REPLACE_WITH_ID");

  // check that the element is not null or undefined
  if (!id_result) {
    throw Error('Element cannot be found');
  }
  
  //counts the number of child elements
  let id_childCount = id_result.childElementCount;
  
  callback(id_childCount)
    
}
