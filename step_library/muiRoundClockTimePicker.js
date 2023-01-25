function mablJavaScriptStep(
  mablInputs,
  callback,
  numberToClick,
  clockNumberSelector = "[class*='MuiPickersClock'] [role='menu']",
  clockFaceSelector = "span[class*='clockNumber']"
) {
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

  let clockElement = document.querySelector(clockFaceSelector);

  let clockNumbers = Array.from(document.querySelectorAll(clockNumberSelector));
  let clockNumberToClick = clockNumbers.filter((clockNumber) => {
    clockNumber.innerText === numberToClick;
  })[0];

  let rect = clockNumberToClick.getBoundingClientRect();
  let x = rect.x;
  let y = rect.y;

  clickElementAt(clockElement, x, y);
  callback(true);
}
