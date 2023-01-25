function mablJavaScriptStep(mablInputs, callback, list, index, delimiter=",") {
    callback(list.split(delimiter)[parseInt(index)-1]);
}