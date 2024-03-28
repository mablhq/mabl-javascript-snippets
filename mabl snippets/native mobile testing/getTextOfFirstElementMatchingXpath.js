function mablJavaScriptStep(mablInputs, callback, xpath = undefined) {
  // Call the Appium function
  appiumCall(xpath)
    .then((result) => callback(result))
    .catch((error) => callback(error));
}

async function appiumCall(element_xpath) {
  // Get the Appium driver
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
