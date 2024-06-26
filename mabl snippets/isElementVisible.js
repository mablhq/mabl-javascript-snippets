/**
 * This snippet will allow you to assert against an element
 * as long as the element is visible.
 */
function mablJavaScriptStep(mablInputs, callback, cssSelector = undefined, xPathSelector = undefined) {
  // Checks for empty variables to make this example easier to work with.
  if (!cssSelector) {
    cssSelector = " ";
  }
  if (!xPathSelector) {
    xPathSelector = " ";
  }
  // Based on which Selector is filled in we will either use the CSS or Xpath method.
  if (cssSelector > xPathSelector) {
       // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
       // querySelector will return the first element in the document that matches the CSS selector given.
    let element = document.querySelector(cssSelector);
    if (!element) {
      callback('CSS Not Present');
    } else {
       // Check display and visibility values to determine if element is present. Can replace this with "or" statements
      // in between, or even get rid of certain CSS computed style checks to match your application's implementation
      const style = getComputedStyle(element);
      if (style && (style.display === 'none' || style.visibility === 'collapse' || style.visibility === 'hidden')) {
        callback('CSS Element Not Visible');
      }
      callback('CSS Present');
    }
      callback('CSS Error');
  } else if (cssSelector < xPathSelector) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate
        // The below version will use the given xpath to grab the first object that matches it.
    const XPathElement = document.evaluate(xPathSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (XPathElement) {
      callback('Xpath Present');
    } else {
      callback('Xpath Not Present')
    }
  // You have the same value for both selectors,  likely means they're empty.
  } else {
    callback('Need to put in a Selector');
  }
  callback('Not Present')
}