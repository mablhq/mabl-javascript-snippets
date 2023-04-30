function rightClick(selector) {
    let element = document.querySelector(selector);
    
    let e = element.ownerDocument.createEvent('MouseEvents');
    e.initMouseEvent('contextmenu', true, true,
        element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
        false, false, false, 2, null);
    element.dispatchEvent(e)
}
Collaps
