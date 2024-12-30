function mablJavaScriptStep(mablInputs, callback, duration, xpath) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    // Find the element by xpath
    const target = await driver.findElement("xpath", xpath);
    // Get the rect of the element
    const center = await getElementCenterXY(target);
    // Define the actions to perform
    const action = {
      type: "pointer",
      id: "finger1",
      parameters: { pointerType: "touch" },
      actions: [
        // Move to the center of the element
        { type: "pointerMove", duration: 0, x: center.x, y: center.y },
        // Press down on the element
        { type: "pointerDown", button: 0 },
        // Pause for the specified duration
        { type: "pause", duration: duration },
        // Release the press
        { type: "pointerUp", button: 0 },
      ],
    };
    // Perform the actions
    await driver.performActions([action]);
    return "Success";
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback("Error = " + error));
}

async function getElementCenterXY(targetElement) {
  // Get the rect of the element
  const rect = await targetElement.getRect();
  // Calculate the center of the element
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}
