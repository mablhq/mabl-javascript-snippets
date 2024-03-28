function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    try {
      return await driver.getAlertText();
    } catch (error) {
      return error;
    }
  }

  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}
