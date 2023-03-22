/**
 * Right-click interactions are now natively supported by the mabl Trainer. 
 * For more info, see the changelog: https://help.mabl.com/changelog/right-click-support
 * Right click on element 
 * @param {HTMLElement} element - The element in the page you want to right click
 */
function rightClickElement(element) {
  let e = element.ownerDocument.createEvent("MouseEvents");
  e.initMouseEvent(
    "contextmenu", true, true, element.ownerDocument.defaultView,
    1, 0, 0, 0, 0, false, false, false, false, 2, null
  );
  element.dispatchEvent(e);
}
