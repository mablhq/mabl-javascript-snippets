/**
* Generate random number between a range
* Parameterized to use a passed in variable that equals the number of variables being used
*/
function mablJavaScriptStep(mablInputs, callback, count = '{{@user.numberOfElements}}') {

  let randomNum = Math.floor(Math.random() * count + 1);
  callback(randomNum);
}
