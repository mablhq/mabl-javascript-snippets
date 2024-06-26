/**
* TITLE: Wait until the provided element is no longer present, testing every 100 ms
* @mablParam: elementSelector - A CSS selector for the element
*
* @mablReturn: 'true' if the element disappeared within the timeout, 'false' otherwise
*/
async function mablJavaScriptStep(mablInputs, callback, elementSelector = 'replaceMe!', TIMEOUT_SEC = '15') {

    const TIME_BETWEEN_MS = 100;
    const MAX_RETRIES = TIMEOUT_SEC * 1000 / TIME_BETWEEN_MS;

    // This loop will wait until the maximum time for the provided CSS selector to
    // disappear from the DOM.
    for (let i = 0; i < MAX_RETRIES; i++) {
        if (document.querySelector(elementSelector) === null) {
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
