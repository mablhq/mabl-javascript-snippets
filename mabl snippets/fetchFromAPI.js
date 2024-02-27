/**
 * Fetch from an API then extract the JSON value
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback, url = 'https://uinames.com/api/?ext') {
    // Adjust to practice API

    // perform an asynchronous fetch against the API endpoint that returns JSON responses
    fetch(url).then(apiResponse => {
        // extract the json value from the response
        return apiResponse.json();
    }).then(jsonResponse => {
        // extract the credit card number and perform callback
        callback(jsonResponse.credit_card.number);  // sample output: "2589-7385-9065-7232"
    });
}

