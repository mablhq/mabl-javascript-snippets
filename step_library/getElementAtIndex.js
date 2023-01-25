function mablJavaScriptStep(mablInputs, callback, list, index) {
    callback(list.split(delimiter)[parseInt(index)]);
}