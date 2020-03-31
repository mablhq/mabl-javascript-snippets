/**
 * TITLE: Wait until the provided element is no longer present up to 15 seconds
 *        testing every 100 ms
 *
 * @mablParam: elementSelector - A CSS selector for the element
 *
 * @mablReturn: 'true' if the element disappeared within the timeout,
 *              'false' otherwise
 *
 */
async function mablJavaScriptStep(mablInputs, callback) {
  const TIME_BETWEEN_MS = 100;
  const TIMEOUT_SEC = 15;
  const MAX_RETRIES = TIMEOUT_SEC * 1000 / TIME_BETWEEN_MS;
  
  for (let i=0; i<MAX_RETRIES; i++) {
    if (document.querySelector(mablInputs.variables.user.elementSelector) === null) {
      callback(true);
      break;
    } else {
      await delay(TIME_BETWEEN_MS);
    }
  }
  
  callback(false);
}

async function delay(millis) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), millis);
  });
}
