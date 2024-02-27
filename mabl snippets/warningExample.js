/**
 * https://developer.mozilla.org/en-US/docs/Web/API/console/warn
 * warn(obj1)
 * warn(obj1, …,  objN)
 * warn(msg)
 * warn(msg, subst1, …, substN)
 */
function mablJavaScriptStep(mablInputs, callback) {
    console.warn("Attempt to generate a warning");
    callback("finished");
}

