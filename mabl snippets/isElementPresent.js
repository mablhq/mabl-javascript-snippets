/**
 * This snippet will allow you to assert against an element 
 * as long as the element is visible.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // this is where you would define what your element is
    let element = document.querySelector('REPLACE_WITH_CSS_SELECTOR');
    
    // conditional statement to assure that the element is present, as well as
    // assuring the display does not equal 'none'
    if (!element) {
        throw Error('Element Not Present');
        
     // If element is present, check display and visibility values to determine if element is present
     } else {
        const style = getComputedStyle(element);
        if (style && style.display == 'none' && style.visibility == 'collapse' && style.visibility == 'hidden') {
            throw Error('Element Not Visible');
            
        } else {
         callback('Element Present');
        }
       
    }
  }
