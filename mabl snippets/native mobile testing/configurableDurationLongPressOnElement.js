function mablJavaScriptStep(
  mablInputs,
  callback,
  duration = "1000",
  xpath = undefined
) {
  // Call the Appium function
  callAppium(xpath, duration)
    .then((result) => callback(result))
    .catch((error) => callback(error));
}

async function callAppium(element_xpath, duration) {
  // Get the Appium driver
  const driver = await mabl.mobile.getDriver();
  try {
    // Find the element by xpath
    const target = await driver.findElement("xpath", element_xpath);
    // Get the rect of the element
    const rect = await target.getRect();
    // Calculate the center of the element
    const center = {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    };
    // Define the actions to perform
    const actions = {
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
    await driver.performActions([actions]);
  } catch (error) {
    return error;
  }
}
