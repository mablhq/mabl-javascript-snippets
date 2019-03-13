/**
 * Returns a flexibly formattable date string. Use when creating a variable via JavaScript.
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
    // Set the number of days in the future of the target date.
    let moreDays = 1;

    // Set the locale for date translation and formatting.
    // Examples:
    // let locale = "de-DE";
    // let locale = "fr-FR";
    let locale = "en-US";

    // Set date formatting options. Locale impacts final output.
    // Examples:
    // let options = { month: 'long', day: 'numeric' }; // Month DD
    // let options = { month: '2-digit', day: '2-digit', year: '2-digit' }; // MM/DD/YY  
    let options = {month: 'long', day: 'numeric', year: 'numeric'}; // Month DD, YYYY

    const date = new Date();
    date.setDate(date.getDate() + moreDays);
    callback(date.toLocaleDateString(locale, options));
}