// Can no longer close a window you did not open yourself in javascript.

function mablJavaScriptStep(mablInputs, callback) {
  window.setInterval(() => { window.close(); }, 1000);
  callback(true);
}