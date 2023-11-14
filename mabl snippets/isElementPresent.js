/**
 * This snippet will allow you to assert against an element
 * as long as the element is visible.
 */
function mablJavaScriptStep(mablInputs, callback, selector = 'REPLACE_WITH_CSS_SELECTOR') {

    // this is where you would define what your element is
    let element = document.querySelector(selector);

    // conditional statement to assure that the element is present, as well as
    // assuring the display does not equal 'none'
    if (!element) {
        throw Error('Element Not Present');
    }

    // check display and visibility values to determine if element is present. Can replace this with "or" statements
    // in between, or even get rid of certain CSS computed style checks to match your application's implementation
    const style = getComputedStyle(element);
    if (style && (style.display === 'none' || style.visibility === 'collapse' || style.visibility === 'hidden')) {
        throw Error('Element Not Visible');
    }

    // element is present if we have not thrown an error up to this point
    callback('Element Present');
}
