/**
 * This script demonstrates how to perform a drag and drop action on a mobile app element using Appium.
 * @param {*} dragElementText The exact text of the element to drag.
 * @param {*} dropElementText The exact text of the element to drop the element onto.
 */
function mablJavaScriptStep(
  mablInputs,
  callback,
  dragElementText = undefined,
  dropElementText = undefined
) {
  async function callAppium() {
    const driver = await mabl.mobile.getDriver();
    // Create the xpath for both elements
    const elm1 = await driver.findElement(
      "xpath",
      getXpathForElementMatching(dragElementText)
    );
    const elm2 = await driver.findElement(
      "xpath",
      getXpathForElementMatching(dropElementText)
    );
    // Get the rect of both elements
    const elm1Rect = await getElementCenterXY(elm1);
    const elm2Rect = await getElementCenterXY(elm2);
    // Define the actions to perform
    const actions = {
      type: "pointer",
      id: "finger1",
      parameters: { pointerType: "touch" },
      actions: [
        // Move the pointer to the center of the first element
        { type: "pointerMove", duration: 0, x: elm1Rect.x, y: elm1Rect.y },
        // Press down on the first element
        { type: "pointerDown", button: 0 },
        // Wait for 1 second as a long press to lift element
        { type: "pause", duration: 1000 },
        // Move the pointer to the center of the second element over 500ms
        { type: "pointerMove", duration: 2000, x: elm2Rect.x, y: elm2Rect.y },
        // Release the press
        { type: "pointerUp", button: 0 },
      ],
    };
    // Perform the actions
    await driver.performActions([actions]);
  }
  // Call the function and return the result
  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error));
}

/**
 * Returns an xpath for an element matching the given text.
 * @param {string} text The text to match.
 * @returns {string} The xpath.
 */
function getXpathForElementMatching(text) {
  return `//*[@text="${text}" or @content-desc="${text}" or @label="${text}"]`;
}

/**
 * Returns the center coordinates of an element.
 * @param target element to get the center coordinates of.
 * @returns {x, y} The center coordinates.
 */
async function getElementCenterXY(target) {
  const rect = await target.getRect();
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}
