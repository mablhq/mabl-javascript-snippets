function mablJavaScriptStep(mablInputs, callback, list, delimiter=",") {
    callback(list.split(delimiter).map((str) => str.trim()).sort().toString());
}