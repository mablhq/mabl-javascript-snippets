function mablJavaScriptStep(mablInputs, callback, delimiter, value) {
    callback(value.split(delimiter).length);
}