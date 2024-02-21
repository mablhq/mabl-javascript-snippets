/*
* Looks for an element of an id, collects the number of items within, and randomly selects one.
*/
function mablJavaScriptStep(mablInputs, callback, dropdownSelector = undefined, tagName = 'option') {

    //let select = document.getElementById(elementId);
    document.querySelector(dropdownSelector)
    //Confirm your element tagnames and adjust as necessary
    let items = select.getElementsByTagName(tagName);
    items = select.getElementsByTagName(tagName);
    let index = Math.floor(Math.random() * items.length);

    select.selectedIndex = index;

    callback("Selected index " + index);
}
