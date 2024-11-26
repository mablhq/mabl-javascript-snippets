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
 function mablJavaScriptStep(mablInputs, callback, dateTimeString = undefined) {

  // Check Timezone
  let offset = new Date().getTimezoneOffset();

  // Offset 0 means "mabl cloud run"
  if (offset !== 0) {
    // Local execution, so nothing to do.
    return callback(false);
  }

  // ja: 以下のようなフォーマットを与えるとUTCの文字列に変換します
  // en: Given the following format, it will convert to a UTC string
  // dateTimeString = '2021-12-22T07:59:06+09:00';
  console.log(dateTimeString);

  let date = new Date(dateTimeString);

  // Convert to UTC
  let result = date.toISOString(); // => ex. 2021-12-21T22:59:06.000Z

  // ja: 以下のメソッドを組み合わせれば、年、月、日といった項目を組み合わせて返せます。
  // en: By combining the following methods, you can return a combination of items such as year, month, and day.
  // result = date.getUTCFullYear();
  // result = date.getUTCMonth() + 1;
  // result = date.getUTCDate();
  // result = date.getUTCHours();
  // result = date.getUTCMinutes();
  // result = date.getUTCSeconds();

  return callback(result);
}
