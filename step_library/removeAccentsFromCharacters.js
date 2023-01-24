function mablJavaScriptStep(mablInputs, callback, value) {
  callback(value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
}
