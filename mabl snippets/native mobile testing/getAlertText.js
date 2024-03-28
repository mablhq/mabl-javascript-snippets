function mablJavaScriptStep(mablInputs, callback) {
  // Call the Appium function
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}

async function callAppium() {
  // Get the Appium driver
  const driver = await mabl.mobile.getDriver();
  try {
    // Get the text of the alert
    return await driver.getAlertText();
  } catch (error) {
    return error;
  }
}
