function mablJavaScriptStep(mablInputs, callback) {
  let NewURL = window.open('https://sandbox.mabl.com/', '_blank', "width=300, height=300");
  callback(true);
}