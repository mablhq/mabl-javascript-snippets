/**
 * Example of logging
 * https://www.w3schools.com/jsref/met_console_log.asp
 * The console logs can be seen in either the Local Run Output or, in a cloud run, under mabl activity
 */
function mablJavaScriptStep(mablInputs, callback, string1 = 'Hello World') {

    console.log("Example of logging!");

    console.log("String1: " + string1);

    const myObj = {firstname: "John", lastname: "Doe"};
    console.log(myObj);

    const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
    console.log(myArr);

    callback(true)
}
