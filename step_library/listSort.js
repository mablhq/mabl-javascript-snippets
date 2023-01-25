function mablJavaScriptStep(mablInputs, callback, list) {
    callback(list.split(delimiter).map((str) => str.trim()).sort());
}