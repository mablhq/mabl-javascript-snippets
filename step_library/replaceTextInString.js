function mablJavaScriptStep(mablInputs, callback, value, find, replace) {
  callback(value.replaceAll(find, replace));
}
