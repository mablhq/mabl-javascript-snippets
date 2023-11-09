/**
* Example of logging
* https://www.w3schools.com/jsref/met_console_log.asp
*/
function mablJavaScriptStep(mablInputs, callback, string1 = '{{@user.string1}}', string2 = '{{@user.string2}}') {

  console.log("Example of logging!");

  console.log("String1: " + string1);

  const myObj = {firstname:"John", lastname:"Doe"};
  console.log(myObj);

  const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
  console.log(myArr);

  callback(true)
}
