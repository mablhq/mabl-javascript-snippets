**
 * Locates a specific date field using the query selector
 * method. Increments the current date and modifies the
 * value of this field.
 *
 * Run a small snippet of JavaScript during a mabl flow/journey
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {

    // Set the number of days in the future of the current date
    const moreDays = 15;

    const date = new Date();
    date.setDate(date.getDate() + moreDays);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Pads the month and day by one zero if it is less than 10
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    // Returns a string in the format YYYY-MM-DD
    var updatedDate = year + '-' + month + "-" + day;

    // Locates the field using the corresponding CSS selector
    let dateField = document.querySelector('REPLACE_WITH_CSS_SELECTOR');

    // Throws an error if the element is null or undefined
    if (!dateField) {
      throw Error("Element cannot be found");
    }

    // Updates the value of the element with the new date
    dateField.setAttribute('value', updatedDate);
    dateField.value = updatedDate;
    dateField.dispatchEvent(new Event("change"));

    callback(true);
}
