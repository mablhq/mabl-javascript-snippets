function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    try {
      // Find the element by xpath
      const target = await driver.findElement("xpath", element_xpath);
      // Get the text of the element
      return await target.getText();
    } catch (error) {
      return error;
    }
  }

  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
