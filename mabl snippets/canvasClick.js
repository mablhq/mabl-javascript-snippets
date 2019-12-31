/*
 * Click on a canvas element at certain coordinates. If no values are set
 * before this, the center of the first canvas on the page will be clicked.
 *
 * @param {String} coordinates --------- (optional) comma separated x and y value (strips all non-numeric values, commas, and periods).
 *                                       Ex: "(250,750)" or "250,750" or "(250, 750)" or "( 250 , 750 )" or "250 , 750"
 * 
 * @param {String} canvas_css_selector - (optional) CSS Selector for canvas.
 *                                       Ex: "canvas#weekly_average"
 * 
 * @return {String} -------------------- returns the X and Y values that were clicked.
 *                                       Ex: "X: 250, Y: 750"
 */

function mablJavaScriptStep(mablInputs, callback) {
  // If the variable "canvas_css_selector" is not set in the test, 
  // use a selector for the first canvas in the page
  let canvas_css_selector = mablInputs.variables.user.canvas_css_selector;
  canvas_css_selector = (canvas_css_selector === undefined ? "canvas" : canvas_css_selector);
  
  // Respond with error message if unable to find a canvas
  if (document.querySelectorAll(canvas_css_selector).length === 0) {
    callback("Canvas not found: \"canvas_css_selector\" did not find any elements.");
  } 
  // Find the desired canvas and save it to the variable "canvas"
  let canvas = document.querySelector(canvas_css_selector);
  
  // IF "coordinates" is set, then parse and set x and y
  // ELSE set X and Y to the center of the canvas
  let coordinates = mablInputs.variables.user.coordinates;
  let x, y;
  if (coordinates) {
    // Remove any characters that are not numbers, commas, or periods
    coordinates = coordinates.replace(/[^0-9\,\.]/g, "").split(",");
    // Error out if "coordinates" does not split into 2 values
    if (coordinates.length !== 2) {
      callback("Canvas not clicked: \"coordinates\" incorrectly formatted.");
    }
    x = coordinates[0];
    y = coordinates[1];
  } else {
    // Find the size of the canvas and calculate the middle of the canvas
    let canvasRect = canvas.getBoundingClientRect();
    x = canvasRect.width / 2;
    y = canvasRect.height / 2;
  }

  // Creates the function to send the clicks to the canvas.
  function clickCanvasAt(x, y) {
    let e = canvas.ownerDocument.createEvent("MouseEvents");
    let actionsToPerform = ["mousedown", "mouseup"];
    actionsToPerform.forEach(action => {
      e.initMouseEvent(
        action, true, true, canvas.ownerDocument.defaultView, 
        1, 0, 0, x, y, false, false, false, false, 0, null
      );
      canvas.dispatchEvent(e);
    });
  }
  
  // This sends the clicks to the canvas its self
  clickCanvasAt(x, y);
  // You can manually add one or more clicks here as well
  // Ex: clickCanvasAt(250, 750);

  // Returns a string to the mabl test with the x & y values.
  console.log("X: " + x + ", Y: " + y);
}

