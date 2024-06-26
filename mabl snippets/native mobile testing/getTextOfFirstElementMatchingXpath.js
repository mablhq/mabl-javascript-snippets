function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    // Get the Appium driver
    const driver = await mabl.mobile.getDriver();
    // Find the element by xpath
    const target = await driver.findElement("xpath", element_xpath);
    // Get the text of the element
    return await target.getText();
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
