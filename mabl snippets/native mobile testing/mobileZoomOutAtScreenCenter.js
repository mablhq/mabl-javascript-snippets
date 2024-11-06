function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    // Find the element by xpath
    const target = await driver.findElement("xpath", "//*");
    // Get the rect of the element
    const center = await getElementCenterXY(target);
    // Define the actions to perform
    const actions = [
      {
        type: "pointer",
        id: "leftFinger",
        parameters: { pointerType: "touch" },
        actions: [
          // Move the pointer to the left of the center
          { type: "pointerMove", duration: 0, x: center.x * 0.35, y: center.y },
          // Press down
          { type: "pointerDown", button: 0 },
          // Move the pointer closer to the center over 1000ms
          {
            type: "pointerMove",
            duration: 1000,
            x: center.x * 0.45,
            y: center.y,
          },
          // Release the press
          { type: "pointerUp", button: 0 },
        ],
      },
      {
        type: "pointer",
        id: "rightFinger",
        parameters: { pointerType: "touch" },
        actions: [
          // Move the pointer to the right of the center
          { type: "pointerMove", duration: 0, x: center.x * 0.65, y: center.y },
          // Press down
          { type: "pointerDown", button: 0 },
          // Move the pointer closer to the center over 1000ms
          {
            type: "pointerMove",
            duration: 1000,
            x: center.x * 0.55,
            y: center.y,
          },
          // Release the press
          { type: "pointerUp", button: 0 },
        ],
      },
    ];
    // Perform the actions
    await driver.performActions(actions);
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error.toString()));
}

/**
 * Returns the center coordinates of an element.
 * @param target element to get the center coordinates of.
 * @returns {x, y} The center coordinates.
 */
async function getElementCenterXY(target) {
  const rect = await target.getRect();
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}
