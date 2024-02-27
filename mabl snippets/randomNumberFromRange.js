/**
 * You can also accomplish this in mabl variables: https://help.mabl.com/docs/valid-expressions#advanced-math-expressions
 * Generate random number between a range
 * Parameterized to use a passed in variable that equals the number of variables being used
 */
function mablJavaScriptStep(mablInputs, callback, count = 'numberOfElements') {
    callback(Math.floor(Math.random() * count + 1));
}
