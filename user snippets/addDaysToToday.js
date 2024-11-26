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

  // addDays変数の数だけ日付を進める, Advance the date by the number of addDays variables
  let addDays = mablInputs.variables.user.addDays;
  if (addDays){
    addDays = Number(addDays);
  } else {
    // addDaysが設定されてない場合は翌日にする, If addDays is not set, make it the next day.
    addDays = 1;
  }
  
  console.log("add days: " + addDays);
  
  let targetDate = new Date();
  console.log("today: " + targetDate);
  
  // ここで日付を加算しています。マイナスにすれば減算です, The date is added here. If we set it to minus, we are subtracting.
  targetDate.setDate(targetDate.getDate() + addDays);
  console.log(targetDate);
  
  // 戻り値の作成, Creating Return Values
  let y = targetDate.getFullYear();
  let m = ('00' + (targetDate.getMonth()+1)).slice(-2);
  let d = ('00' + targetDate.getDate()).slice(-2);
  
  // 日付のフォーマットはこちらで調整してください, Please adjust the date format here
  callback(y + '-' + m + '-' + d);
}
