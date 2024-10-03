function mablJavaScriptStep(mablInputs, callback, elementText = undefined) {
  async function callAppium() {
    // Get the Appium driver
    const driver = await mabl.mobile.getDriver();
    // Create the xpath to find the element by text
    const xpath = `//*[@text="${elementText}" or @content-desc="${elementText}" or @label="${elementText}"]`;
    // Find the element by xpath
    const target = await driver.findElement("xpath", xpath);
    // Tap on the element
    await target.click();
    // Return a success message
    return "Element Tap Sent Successfully!";
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
