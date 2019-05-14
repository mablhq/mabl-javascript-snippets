/**
 * This snippet allows for the extraction of color from an svg element. Notice the nested querySelectors in which could be
 * further nested to refer to a particular element. In this case, the path to get to the color of the svg element is svg->g->path.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // Can be used to target a div element by class name, id, etc. Replace element with your desired element.
    const element = document.querySelector('.element');
    
    // check to see if the element exists before interaction
    if (!element) {
        throw Error('Element was not found'); 
    } else {
    
    // Looks inside the above element for svg then g then path. Replace with desired path.
    const svgElement = element.querySelector('svg g path');

    // gets the style attribute that contains the color in rgb format. Can be replaced with any attribute.
    callback(svgElement.getAttribute('style'));
       
    }

}
