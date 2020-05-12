/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
function mablJavaScriptStep(mablInputs, callback) {
  
  // need a parameter of class name
  let name = mablInputs.variables.user.wait_target_name;
  
  const MAX_WAIT_SEC = 10;
  let times = 0;
  let exist = true;
  
  var checkExist = setInterval(function() {
    let elements = document.getElementsByClassName(name);
    if (elements.length) {
      console.log('element exist.');
    } else {
      console.log('no element.');
      exist = false;
      clearInterval(checkExist);
    }
    
    times++;
    
    if (MAX_WAIT_SEC < times) {
      console.log('time up! element still exist.');
      clearInterval(checkExist);
    }
  }, 1000);

  callback(exist);
}
