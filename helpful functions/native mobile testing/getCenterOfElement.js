/*
 * Get the center x,y of an element on the screen
 * @param {object} targetElement - The element to get the center of
 * @returns {object} - The x,y coordinates of the center of the element
 *
 * Note: This function is intended to be used in a native mobile flow
 */

async function getElementCenterXY(targetElement) {
  // Get the rect of the element
  const rect = await targetElement.getRect();
  // Calculate the center of the element
  const center = {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}
