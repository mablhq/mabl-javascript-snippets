// An example of setting and getting a local token

function mablJavaScriptStep(mablInputs, callback) {

    // Set up token with key and value
    window.localStorage.setItem("exampleKey", "thatsSomeValue");

    // Get value of specific token
    let result = window.localStorage.getItem("exampleKey");

    if (result) {
        callback("Success: Token found in local storage! Value is: " + result);
    } else {
        throw ("Failure: No token found in local storage!");
    }
}