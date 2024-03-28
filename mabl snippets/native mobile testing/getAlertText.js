function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    // Get the Appium driver
    const driver = await mabl.mobile.getDriver();
    // Get and return the alert text
    return await driver.getAlertText();
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
