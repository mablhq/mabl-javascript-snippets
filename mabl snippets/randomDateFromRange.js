function mablJavaScriptStep(mablInputs, callback, end = '1970-01-01', start = '2022-12-31') {
    // create Date objects for the start and end parameters
    let earliest = new Date(start);
    let latest = new Date(end);

    // generate a random Date between earliest and latest
    let randomDate = new Date(earliest.getTime() + Math.random() * (latest.getTime() - earliest.getTime()));

    // add a "0" before the month if needed for formatting
    let month = (randomDate.getMonth() + 1).toString();

    if (month.length === 1)
        month = `0${month}`;

    // create a string for the random date in MM-DD-YYYY format
    let output = `${month}-${randomDate.getUTCDate()}-${randomDate.getFullYear()}`;

    callback(output);
}
