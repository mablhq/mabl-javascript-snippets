function mablJavaScriptStep(mablInputs, callback, numberToClick) {
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

  let clockElement = document.querySelector(
    "[class*='MuiPickersClock'] [role='menu']"
  );

  let clockNumber = Array.from(
    document.querySelectorAll('span[class*="clockNumber"]')
  ).filter((clockNumber) => {
    return clockNumber.innerText === numberToClick;
  })[0];

  let rect = clockNumber.getBoundingClientRect();
  let x = rect.x;
  let y = rect.y;

  clickElementAt(clockElement, x, y);
  callback(true);
}
