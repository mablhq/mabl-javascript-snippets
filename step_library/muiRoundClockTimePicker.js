function mablJavaScriptStep(
  mablInputs,
  callback,
  numberToClick = undefined,
  clockNumberSelector = 'span[class*="clockNumber"]',
  clockFaceSelector = '[class*="MuiPickersClock"] [role="menu"]'
) {
  let clockElement = document.querySelector(clockFaceSelector);

  let clockNumbers = Array.from(document.querySelectorAll(clockNumberSelector));
  let clockNumberToClick = clockNumbers.filter((clockNumber) => {
    return clockNumber.innerText === numberToClick;
  })[0];
  let rect = clockNumberToClick.getBoundingClientRect();
  let x = rect.x + rect.width / 2;
  let y = rect.y + rect.height / 2;

  clickElementAt(clockElement, x, y);
  callback(true);
}

// Creates the function to send the clicks to the element.
function clickElementAt(element, x, y) {
  let e = element.ownerDocument.createEvent("MouseEvents");
  let actionsToPerform = ["mousedown", "mouseup"];
  actionsToPerform.forEach((action) => {
    e.initMouseEvent(
      action,
      true,
      true,
      element.ownerDocument.defaultView,
      1,
      0,
      0,
      x,
      y,
      false,
      false,
      false,
      false,
      0,
      null
    );
    element.dispatchEvent(e);
  });
}
