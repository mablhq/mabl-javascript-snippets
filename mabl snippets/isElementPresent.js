/**
 * This snippet will allow you to assert against an element 
 * as long as the display of the element changes from 'none' 
 * to anything else.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // this is where you would define what your element is
    let element = document.querySelector('REPLACE_WITH_CSS_SELECTOR');
    
    // conditional statement to assure that the element is present, as well as
    // assuring the display does not equal 'none'
    if (element && element.style.display !== 'none') {
      callback('Element Present');
    } else {
      throw Error('Element Not Present');
    }
  }