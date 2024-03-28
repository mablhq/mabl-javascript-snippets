function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    try {
      const xpath = `//*[@text="${elementText}" or @content-desc="${elementText}" or @label="${elementText}"]`;
      // Find the element by xpath
      const target = await driver.findElement("xpath", elementXpath);
      // Tap on the element
      await target.click();
      return "Element Tap Sent Successfully!";
    } catch (error) {
      return error;
    }
  }
