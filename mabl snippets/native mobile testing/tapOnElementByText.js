function mablJavaScriptStep(mablInputs, callback, elementText = undefined) {
  // Create an xpath that matches the element with the given text
  const xpath = `//*[@text="${elementText}" or @content-desc="${elementText}" or @label="${elementText}"]`;
  // Call the appium function
  callAppium(xpath)
    .then((result) => callback(result))
    .catch((error) => callback(error));
}

async function callAppium(elementXpath) {
  // Get the appium driver
  const driver = await mabl.mobile.getDriver();
  try {
    // Find the element by xpath
    const target = await driver.findElement("xpath", elementXpath);
    // Tap on the element
    await target.click();
  } catch (error) {
    return error;
  }
}
