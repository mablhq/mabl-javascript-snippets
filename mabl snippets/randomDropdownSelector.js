/*
* Looks for an element of an id, collects the numer of items within, and randomly selects one.
*/
function mablJavaScriptStep(mablInputs, callback, elementId = 'day', tagName = 'option') {

    let select = document.getElementById(elementId);
    //Confirm your element tagnames and adjust as necessary
    let items = select.getElementsByTagName(tagName);
    let index = Math.floor(Math.random() * items.length);

    select.selectedIndex = index;

    callback("Selected index " + index);
}
