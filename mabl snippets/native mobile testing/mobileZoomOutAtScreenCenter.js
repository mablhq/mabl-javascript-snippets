// This was created using the customMobileGestureSnippet.js snippet that also lives in this repo.

function mablJavaScriptStep(mablInputs, callback) {
  async function callAppium() {
    const screen = await new MobileElement().getScreenLocations();
    await new MultiTouch().zoomOut(screen.center).perform();
  }

  callAppium()
    .then((result) => callback(result))
    .catch((error) => callback(error.toString()));
}

/* #######################################
// ############## READ ME ################
// #######################################

  This snippet demonstrates how to perform custom gestures on a mobile device using Appium in a mabl snippet step.

  The gestures are defined using the `Gesture`, `MobileElement`, and `MultiTouch` classes, which allow for a clean
  and modular way to define and perform complex gestures.

  Note: All `locations` are referenced as x,y coordinates with the origin at the top left corner of the screen.

# Gesture Class
  The Gesture class allows for defining and chaining touch actions for a gesture.

 ## General Usage:
  - Create a new gesture object.
    `const gesture = new Gesture();`

  - Define the steps of the gesture.
    `gesture.move(location, duration)` // Note: move is required to start the gesture to define the starting point.
    `gesture.press()`
    `gesture.pause(duration)`
    `gesture.release()`

  ### Note: These gestures can be chained together. This is an example of a swipe gesture:
    `gesture.move(location).press().move(endLocation, 2000).release();`

  - Perform the gesture or access the steps to add to a multi-touch gesture.
    `await gesture.perform();`
    `gesture.steps` //=> [{type: "pointerMove", duration: 0, x: 100, y: 100}, ...]


# `MobileElement` Class
  The MobileElement class allows for finding and getting information about elements on
  a mobile device.

 ## General Usage:

  1. Create a new element object.
    `const element = new MobileElement();`         //=> Create a new element object

  2. Find the element or just get the screen location and be done.
    `await element.findByExactText(elementText)`   //=> Find the element by exact text
    `await element.findByPartialText(elementText)` //=> Find the element by partial text
    `await element.findByXpath(xpath)`             //=> Find the element by xpath

    `await element.getScreenLocations()`           //=> Get the screen locations

  ### Note: These can be combined into one step:
    `const element = await new MobileElement().findByExactText(elementText);`

  3. Wait for the element to be present or not present.
    `await element.waitUntilPresent(timeout);` //=> Wait until the element is present
    `await element.waitUntilHidden(timeout);`  //=> Wait until the element is hidden

  4. Use the element locations. (example of an element with a height of 200 and width of 200):

    Grid View:
    A---+---+---+---B
    |   |   |   |   |
    |---1---2---3---|
    |   |   |   |   |
    |---4---5---6---|
    |   |   |   |   |
    |---7---8---9---|
    |   |   |   |   |
    C---+---+---+---D

    A: `element.topLeftCorner`     //=> {0, 0}
    B: `element.topRightCorner`    //=> {200, 0}
    C: `element.bottomLeftCorner`  //=> {0, 200}
    D: `element.bottomRightCorner` //=> {200, 200}
    
    1. `element.topLeft`           //=> {50, 50}
    2. `element.topCenter`         //=> {100, 50}
    3. `element.topRight`          //=> {150, 50}
    4. `element.leftCenter`        //=> {50, 100}
    5. `element.center`            //=> {100, 100}
    6. `element.rightCenter`       //=> {150, 100}
    7. `element.bottomLeft`        //=> {50, 150}
    8. `element.bottomCenter`      //=> {100, 150}
    9. `element.bottomRight`       //=> {150, 150}

    There is also the option to create a percent location:
    `element.percentLocation(0.5, 0.5)` //=> {100, 100}

 ## `offsetLocation` Helper Function:
  - offsetLocation(location, x, y) - Modify the location by adding x and y values.

  ### Example:
    const element = await new MobileElement().findByExactText("Element Text");
    console.log(element.center); //=> {x: 100, y: 100}
    console.log(element.width);  //=> 200
    console.log(element.height); //=> 200
  
    const modifiedLocation = offsetLocation(element.center, element.width * 0.25, element.height * -0.25);
    console.log(modifiedLocation); //=> {x: 150, y: 50}


# MultiTouch Class
  The MultiTouch class allows for defining and performing custom gestures on a mobile device.

 ## General Usage:
  1. Create a new MultiTouch object.
    `const gesture = new MultiTouch();`

  2. Define the gesture actions.
    `gesture.tap(location)`
    `gesture.longPress(location, duration)`
    `gesture.dragAndDrop(startLocation, endLocation, holdDuration, dragDuration)`
    `gesture.swipe(startLocation, endLocation, swipeDuration)`
    `gesture.curvedSwipe(startLocation, endLocation, controlLocation, steps, stepDuration)`
    `gesture.spread(location, distance, duration)`
    `gesture.zoomIn(location, zoomDistance, zoomDuration)`
    `gesture.pinch(location, distance, duration)`
    `gesture.zoomOut(location, zoomDistance, zoomDuration)`

  3. Perform the gesture.
    `await gesture.perform();`

   ### Note: You can change these steps together as well
    `await new MultiTouch().tap(location).perform();`
  

# Example Usage:
  ### Note: Many of these examples use `screen` which is defined here once as well as the beginning of the script.
  const screen = await new MobileElement().getScreenLocations();

 ## Zoom in at the center of the screen
  await new MultiTouch().zoomIn(screen.center).perform();

 ## Zoom out at a custom location (10% from the left and 90% from the top)
  await new MultiTouch().zoomOut(screen.percentLocation(0.1, 0.9)).perform();

 ## Drag and drop from the element with the text "Drag me" to the element with the text "Drop here"
  const dragElement = new MobileElement().findByExactText("Drag me");
  const dropElement = new MobileElement().findByExactText("Drop here");

  await dragElement.waitUntilPresent();
  await dropElement.waitUntilPresent();
  await new MultiTouch().dragAndDrop(dragElement.center, dropElement.center).perform();

 ## 4 finger swipe up from the bottom center of the screen to the top center
  await new MultiTouch(4).swipe(screen.center, screen.topCenter).perform();

 ## 3 finger curved swipe from the bottom left center to the top right center through the top left corner
  await new MultiTouch(3)
    .curvedSwipe(
      screen.bottomLeft,
      screen.topRight,
      screen.rightCenter
    )
    .perform();

 ## One vertical swipe and one horizontal swipe at the same time
  await new MultiTouch()
    .swipe(screen.bottomRight, screen.topRight)
    .swipe(screen.bottomLeft, screen.bottomRight)
    .perform();

 ## 5 second longPress with 4 fingers at the center of the screen
  await new MultiTouch(4).longPress(screen.center, 5000).perform();

*/

// #######################################
// ###### Location Helper Function #######
// #######################################

/**
 * Modify the location by adding x and y values.
 * @param {x, y} location - The central point with x and y coordinates.
 * @param {number} x - The x value to add.
 * @param {number} y - The y value to add.
 * @returns {x, y} - The modified location.
 */
function offsetLocation(location, x, y) {
  return { x: location.x + x, y: location.y + y };
}

// ########################################
// ##### Locations Class Definition #######
// ########################################

class Locations {
  /**
   * Calculates locations based on an elements rect: {height, width, x, y}.
   * @param {object} rect - The rect object with height, width, x, and y values.
   */
  constructor(rect) {
    this.rect = rect;
    this.width = rect.width;
    this.height = rect.height;
    // Corners
    this.topLeftCorner = { x: rect.x, y: rect.y };
    this.topRightCorner = this.offset({ x: this.width, y: 0 });
    this.bottomRightCorner = this.offset({ x: this.width, y: this.height });
    this.bottomLeftCorner = this.offset({ x: 0, y: this.height });
    // Default locations
    this.topLeft = this.offset({
      x: this.width * 0.25,
      y: this.height * 0.25,
    });
    this.topCenter = this.offset({
      x: this.width / 2,
      y: this.height * 0.25,
    });
    this.topRight = this.offset({
      x: this.width * 0.75,
      y: this.height * 0.25,
    });
    this.leftCenter = this.offset({
      x: this.width * 0.25,
      y: this.height / 2,
    });
    this.center = this.offset({ x: this.width / 2, y: this.height / 2 });
    this.rightCenter = this.offset({
      x: this.width * 0.75,
      y: this.height / 2,
    });
    this.bottomLeft = this.offset({
      x: this.width * 0.25,
      y: this.height * 0.75,
    });
    this.bottomCenter = this.offset({
      x: this.width / 2,
      y: this.height * 0.75,
    });
    this.bottomRight = this.offset({
      x: this.width * 0.75,
      y: this.height * 0.75,
    });
  }

  /**
   * Adjusted locations based on the top left corner.
   * @param location
   * @param x The x value to add.
   * @param y The y value to add.
   * @returns The modified location.
   * @Private
   */
  offset(location, x = this.topLeftCorner.x, y = this.topLeftCorner.y) {
    return {
      x: location.x + x,
      y: location.y + y,
    };
  }
}

// ########################################
// ####### Element Class Definition #######
// ########################################

class MobileElement {
  /**
   * Sets the xpath to search for.
   * @param xpath The xpath to search for.
   */
  findByXpath(xpath) {
    this.xpath = xpath;
    return this;
  }

  /**
   * Sets the xpath to search for an element by exact text.
   * @param elementText The exact match text to search for.
   */
  findByExactText(elementText) {
    this.xpath = `//*[@text="${elementText}" or @content-desc="${elementText}" or @label="${elementText}" or @value="${elementText}"]`;
    return this;
  }

  /**
   * Sets the xpath to search for an element by partial text.
   * @param elementText The partial text to search for.
   */
  findByPartialText(elementText) {
    this.xpath = `//*[contains(@text, "${elementText}") or contains(@content-desc, "${elementText}") or contains(@label, "${elementText}") or contains(@value, "${elementText}")]`;
    return this;
  }

  /**
   * Calculate the location based on a percentage of the width and height.
   * @param {number} xPercent - The percentage of the width.
   * @param {number} yPercent - The percentage of the height.
   * @returns {x, y} - The calculated location.
   */
  percentLocation(xPercent, yPercent) {
    xPercent = xPercent / 100;
    yPercent = yPercent / 100;
    return {
      x: this.width * xPercent + this.topLeftCorner.x,
      y: this.height * yPercent + this.topLeftCorner.y,
    };
  }

  /**
   * Sets  the screen location information on the object.
   */
  async getScreenLocations() {
    this.xpath = undefined;
    return await this.getLocations();
  }

  /**
   * Checks if the element is present and sets the location information on the object if it is.
   * @returns {boolean} - True if the element is present, false otherwise.
   */
  async elementIsPresent() {
    const driver = await mabl.mobile.getDriver();
    try {
      this.element = await driver.findElement("xpath", this.xpath);
      this.rect = await this.element.getRect();
      await this.getLocations();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Loop to wait until the element is present or hidden.
   * @private
   */
  async waitUntilLoop() {
    this.count++;
    if ((await this.elementIsPresent()) === this.desiredPresenceState) {
      clearInterval(this.interval);
      this.resolve();
    } else if (this.count >= this.timeout / 1000) {
      clearInterval(this.interval);
      const negative = this.desiredPresenceState ? "still" : "not";
      this.reject(
        `Element matching xpath: ${this.xpath} ${negative} found after ${this.timeout}ms`
      );
    }
  }

  /**
   * Wait until the element is present.
   * @param {number} timeout - The timeout in milliseconds.
   */
  waitUntilPresent(timeout = 15000) {
    return new Promise((resolve, reject) => {
      this.count = 0;
      this.timeout = timeout;
      this.desiredPresenceState = true;
      this.resolve = resolve;
      this.reject = reject;
      this.interval = setInterval(this.waitUntilLoop.bind(this), 1000);
    });
  }

  /**
   * Wait until the element is hidden.
   * @param {number} timeout - The timeout in milliseconds.
   */
  waitUntilHidden(timeout = 15000) {
    return new Promise((resolve, reject) => {
      this.count = 0;
      this.timeout = timeout;
      this.desiredPresenceState = false;
      this.resolve = resolve;
      this.reject = reject;
      this.interval = setInterval(this.waitUntilLoop.bind(this), 1000);
    });
  }

  /**
   * Finds element and sets the location information on the object
   */
  async getLocations() {
    if (!this.xpath) {
      const driver = await mabl.mobile.getDriver();
      this.rect = await driver.getWindowRect();
    } else if (!this.rect) {
      const driver = await mabl.mobile.getDriver();
      this.element = await driver.findElement("xpath", this.xpath);
      this.rect = await this.element.getRect();
    }
    const locations = new Locations(this.rect);
    this.width = locations.width;
    this.height = locations.height;
    // Corners
    this.topLeftCorner = locations.topLeftCorner;
    this.topRightCorner = locations.topRightCorner;
    this.bottomRightCorner = locations.bottomRightCorner;
    this.bottomLeftCorner = locations.bottomLeftCorner;
    // Default locations
    this.topLeft = locations.topLeft;
    this.topCenter = locations.topCenter;
    this.topRight = locations.topRight;
    this.leftCenter = locations.leftCenter;
    this.center = locations.center;
    this.rightCenter = locations.rightCenter;
    this.bottomLeft = locations.bottomLeft;
    this.bottomCenter = locations.bottomCenter;
    this.bottomRight = locations.bottomRight;
    return this;
  }
}

// ########################################
// ##### MultiTouch Class Definition ######
// ########################################

class MultiTouch {
  constructor(fingerCount = 1) {
    this.touches = [];
    this.fingerCount = fingerCount;
  }

  /**
   * Format the touch actions.
   * @returns {Array} - An array of formatted touch actions.
   * @private
   */
  formatTouchActions() {
    return this.touches.map((touch, index) => {
      return {
        type: "pointer",
        id: `finger${index + 1}`,
        parameters: { pointerType: "touch" },
        actions: touch,
      };
    });
  }

  /**
   * Perform the action(s).
   */
  async perform() {
    const driver = await mabl.mobile.getDriver();
    const actions = this.formatTouchActions();
    await driver.performActions(actions);
  }

  /**
   * Add a gesture to the action.
   * @param {Array} gestureSteps - The gestureSteps to add.
   */
  addGestureSteps(gestureSteps) {
    this.touches.push(gestureSteps);
  }

  /**
   * Calculate adjusted touch points to avoid overlap.
   * @param {object} location - The central point with x and y coordinates.
   * @param {number} touchCount - The number of touch points to calculate.
   * @param {number} touchNumber - The number of the touch point to calculate.
   * @returns {Array} - An array of touch points.
   * @private
   */
  fingerSpread(location, touchCount, touchNumber, spacing = 30) {
    const locations = [];
    for (let i = 0; i < touchCount; i++) {
      const offset = (i - Math.floor(touchCount / 2)) * spacing;
      locations.push({ x: location.x + offset, y: location.y });
    }
    return locations[touchNumber];
  }

  /**
   * Tap at the given coordinates.
   * @param location The x,y location to tap.
   */
  tap(location) {
    const taps = [];
    for (let i = 0; i < this.fingerCount; i++) {
      const tapLocation = this.fingerSpread(location, this.fingerCount, i);
      const tap = new Gesture().move(tapLocation).press().pause(100).release();
      this.touches.push(tap.steps);
    }
    return this;
  }

  /**
   * Long press at the given coordinates.
   * @param location The x,y location to long press.
   * @param duration The duration of the press in milliseconds. Default is 1000.
   */
  longPress(location, duration = 1000) {
    for (let i = 0; i < this.fingerCount; i++) {
      const pressLocation = this.fingerSpread(location, this.fingerCount, i);
      const longPress = new Gesture()
        .move(pressLocation)
        .press()
        .pause(duration)
        .release();
      this.touches.push(longPress.steps);
    }
    return this;
  }

  /**
   * Drag and drop from the start to end coordinates.
   * @param startLocation The start x,y location of the drag.
   * @param endLocation The end x,y location of the drag.
   * @param holdDuration The duration of the hold in milliseconds. Default is 2500.
   * @param dragDuration The duration of the drag in milliseconds. Default is 1000.
   */
  dragAndDrop(
    startLocation,
    endLocation,
    holdDuration = 2500,
    dragDuration = 1000
  ) {
    for (let i = 0; i < this.fingerCount; i++) {
      const dragStartLocation = this.fingerSpread(
        startLocation,
        this.fingerCount,
        i
      );
      const dragEndLocation = this.fingerSpread(
        endLocation,
        this.fingerCount,
        i
      );
      const dragAndDrop = new Gesture()
        .move(dragStartLocation)
        .press()
        .pause(holdDuration)
        .move(dragEndLocation, dragDuration)
        .release();
      this.touches.push(dragAndDrop.steps);
    }
    return this;
  }

  /**
   * Swipe from the start to end coordinates.
   * @param startLocation The start x,y location of the swipe.
   * @param endLocation The end x,y location of the swipe.
   * @param swipeDuration The duration of the swipe in milliseconds. Default is 1000.
   */
  swipe(startLocation, endLocation, swipeDuration = 1000) {
    for (let i = 0; i < this.fingerCount; i++) {
      const start = this.fingerSpread(startLocation, this.fingerCount, i);
      const end = this.fingerSpread(endLocation, this.fingerCount, i);

      const swipe = new Gesture()
        .move(start)
        .press()
        .pause(100)
        .move(end, swipeDuration)
        .release();
      this.touches.push(swipe.steps);
    }
    return this;
  }

  /**
   * Swipe from the start to end coordinates through control coordinates along a quadratic bezier curve.
   * @param startLocation The start x,y location of the swipe.
   * @param endLocation The end x,y location of the swipe.
   * @param controlLocation The control x,y location of the swipe.
   * @param steps The number of steps to take along the curve. Default is 20.
   * @param stepDuration The duration of each step in milliseconds. Default is 100.
   */
  curvedSwipe(
    startLocation,
    endLocation,
    controlLocation,
    steps = 15,
    stepDuration = 2000
  ) {
    for (let i = 0; i < this.fingerCount; i++) {
      // Step counts above 15 can cause issues and error out
      steps = steps > 15 ? 15 : steps;

      const start = this.fingerSpread(startLocation, this.fingerCount, i);
      const end = this.fingerSpread(endLocation, this.fingerCount, i);
      const control = this.fingerSpread(controlLocation, this.fingerCount, i);

      // Generate touch actions based on a calculated set of points along the curve
      const curvedTouch = new Gesture().move(start).press().pause(100);

      // Calculate points along the quadratic bezier curve
      for (let t = 0; t <= 1; t += 1 / steps) {
        const x =
          (1 - t) * (1 - t) * start.x +
          2 * (1 - t) * t * control.x +
          t * t * end.x;
        const y =
          (1 - t) * (1 - t) * start.y +
          2 * (1 - t) * t * control.y +
          t * t * end.y;

        curvedTouch.move({ x, y }, stepDuration / steps);
      }

      curvedTouch.move(end).release();

      this.touches.push(curvedTouch.steps);
    }
    return this;
  }

  /**
   * spread fingers out from location
   * @param location The x,y location to spread fingers from.
   * @param distance The distance to spread fingers out. Default is 50.
   * @param duration The duration of the spread in milliseconds. Default is 500.
   */
  spread(location, distance = 50, duration = 500) {
    const spreadFingerCount = 2;
    for (let i = 0; i < spreadFingerCount; i++) {
      const startLocation = this.fingerSpread(location, spreadFingerCount, i);
      let endX;
      if (i === 0) {
        endX = startLocation.x - distance;
      } else {
        endX = startLocation.x + distance;
      }
      const endLocation = {
        x: endX,
        y: startLocation.y,
      };

      // Sets the finger count to 1 so each swipe is treated as a single finger swipe
      this.fingerCount = 1;
      this.swipe(startLocation, endLocation, duration);
    }
    return this;
  }

  /**
   * Zoom in at the location (Alias name for spread)
   * @param location The x,y location to zoom in at.
   * @param zoomDistance The distance to zoom in.
   * @param zoomDuration The duration of the zoom in milliseconds. Default is 500.
   */
  zoomIn(location, zoomDistance = 50, zoomDuration = 500) {
    this.spread(location, zoomDistance, zoomDuration, false);
    return this;
  }

  /**
   * Pinch at the location
   * @param location The x,y location to pinch at.
   * @param distance The distance to pinch in.
   * @param duration The duration of the pinch in milliseconds. Default is 500.
   */
  pinch(location, distance = 50, duration = 500) {
    const spreadFingerCount = 2;
    for (let i = 0; i < spreadFingerCount; i++) {
      const startLocation = this.fingerSpread(location, spreadFingerCount, i);
      let endX;
      if (i === 0) {
        endX = startLocation.x - distance;
      } else {
        endX = startLocation.x + distance;
      }
      const endLocation = {
        x: endX,
        y: startLocation.y,
      };

      // Sets the finger count to 1 so each swipe is treated as a single finger swipe
      this.fingerCount = 1;
      this.swipe(endLocation, startLocation, duration);
    }
    return this;
  }

  /**
   * Zoom out at the location (Alias name for pinch)
   * @param location The x,y location to zoom out at.
   * @param zoomDistance The distance to zoom out.
   * @param zoomDuration The duration of the zoom in milliseconds. Default is 500.
   */
  zoomOut(location, zoomDistance = 50, zoomDuration = 500) {
    this.pinch(location, zoomDistance, zoomDuration);
    return this;
  }
}

// ########################################
// ###### Gesture Class Definition ########
// ########################################

class Gesture {
  constructor() {
    this.steps = [];
  }

  /**
   * Move to the given location.
   * @param location The x,y location to move to.
   * @param duration The duration of the move in milliseconds. Default is 0.
   * @returns The gesture object to chain methods.
   */
  move(location, duration = 0) {
    this.steps.push({
      type: "pointerMove",
      duration: duration,
      x: location.x,
      y: location.y,
    });
    return this;
  }

  /**
   * Press down at the current location.
   * @returns The gesture object to chain methods.
   */
  press() {
    this.steps.push({ type: "pointerDown", button: 0 });
    return this;
  }

  /**
   * Pause for the given duration.
   * @param duration The duration of the pause in milliseconds. Default is 1000.
   * @returns The gesture object to chain methods.
   */
  pause(duration = 1000) {
    this.steps.push({ type: "pause", duration });
    return this;
  }

  /**
   * Release the press at the current location.
   * @returns The gesture object to chain methods.
   */
  release() {
    this.steps.push({ type: "pointerUp", button: 0 });
    return this;
  }

  /**
   * Perform the action(s).
   */
  async perform() {
    const driver = await mabl.mobile.getDriver();
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: this.steps,
      },
    ]);
  }
}
