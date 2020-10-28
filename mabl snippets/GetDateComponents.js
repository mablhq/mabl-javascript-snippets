/**
Returns an object containing values assosiated todays date.
IE compatiable: true

To access these options, save the output of this snippet to a variable (I'll call 
it "date" for the example) and then use this syntax: 
    {{@<variable name>.<option>}}
like this:
    {{@date.monthNumeric}}


OPTIONS:
- dayNumeric
- dayTwoDigit
- monthNumeric
- monthTwoDigit
- monthNarrow
- monthShort
- monthLong
- yearNumeric
- yearTwoDigit
- hour12TwoDigit
- hour24TwoDigit
- hour12Numeric
- hour24Numeric
- dayPeriod
- minute
- second
 */

function mablJavaScriptStep(mablInputs, callback) {
    var today = new Date();
    // Today
    callback(getDateComponentsFor(today));
  
    // Tomorrow
    // callback(getDateComponentsFor(today.addDays(1)));
  
    // Yesterday
    // callback(getDateComponentsFor(today.addDays(-1)));
  
    // Two weeks from now
    // callback(getDateComponentsFor(today.addDays(14)));
  
    // Two weeks ago
    // callback(getDateComponentsFor(today.addDays(-14)));
  }
  
  //Adds a method to all "Date" objects in this scope
  //@param {integer} days - The number of days to add to the Date
  //@return {Date} - The new Date
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  
  // Formats the date based off of the provided options
  // @param {object {string: string}} option - The options for how to format the date string
  // @return {string} - Formated date matching options
  // Formatting the date components:
  // Formatting Options: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  Date.prototype.format = function (option) {
    var date = new Date(this.valueOf());
    return date.toLocaleDateString("en-US", option);
  };
  /**************** Date Formatting Methods ****************/
  // Adds a method to Date objects that gets the month matching a format
  Date.prototype.month = function (format) {
    var region =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
    return this.toLocaleDateString(region, {
      month: format,
    });
  };
  
  // Adds a method to Date objects that gets the day matching a format
  Date.prototype.day = function (format) {
    var region =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
    return this.toLocaleDateString(region, {
      day: format,
    });
  };
  
  // Adds a method to Date objects that gets the year matching a format
  Date.prototype.year = function (format) {
    var region =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
    return this.toLocaleDateString(region, {
      year: format,
    });
  };
  
  // Adds a method to Date objects that gets the hour matching a format
  Date.prototype.hour = function (format) {
    var hour12 =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var region =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en-us";
    var hours = this.toLocaleTimeString(region, {
      hour: format,
      hour12: hour12,
    });
    return hours.split(" ")[0];
  };
  
  // Adds a method to Date objects that gets the dayPeriod (AM/PM)
  Date.prototype.dayPeriod = function () {
    var region =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en-us";
    var hours = this.toLocaleTimeString(region, {
      hour: "2-digit",
      hour12: true,
    });
    return hours.split(" ")[1];
  };
  
  // Adds a method to Date objects that gets the minute matching a format
  Date.prototype.minute = function (format) {
    var region =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
    return this.toLocaleTimeString(region, {
      minute: format,
    });
  };
  
  // Adds a method to Date objects that gets the second matching a format
  Date.prototype.second = function (format) {
    var region =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
    var seconds = this.toLocaleTimeString(region, {
      second: format,
    }); // Handle "2-digit" case not returning 2 characters
  
    return ("0" + seconds).slice(-2);
  };
  
  /*
   * Strings you can passed in for different formats:
   *  - day: "numeric", "2-digit".
   *  - weekday: "narrow", "short", "long".
   *  - year: "numeric", "2-digit".
   *  - month: "numeric", "2-digit", "narrow", "short", "long".
   *  - hour: "numeric", "2-digit".
   *  - minute: "numeric", "2-digit".
   *  - second: "numeric", 2-digit".
   */
  
  function getDateComponentsFor(date) {
    var dayNumeric = date.day("numeric");
    var dayTwoDigit = date.day("2-digit");
    var monthNumeric = date.month("numeric");
    var monthTwoDigit = date.month("2-digit");
    var monthNarrow = date.month("narrow");
    var monthShort = date.month("short");
    var monthLong = date.month("long");
    var yearNumeric = date.year("numeric");
    var yearTwoDigit = date.year("2-digit");
    var hour12TwoDigit = date.hour("2-digit", true);
    var hour24TwoDigit = date.hour("2-digit", false);
    var hour12Numeric = date.hour("numeric", true);
    var hour24Numeric = date.hour("numeric", false);
    var dayPeriod = date.dayPeriod();
    var minute = date.minute("2-digit");
    var second = date.second("2-digit");
    return {
      dayNumeric: dayNumeric,
      dayTwoDigit: dayTwoDigit,
      monthNumeric: monthNumeric,
      monthTwoDigit: monthTwoDigit,
      monthNarrow: monthNarrow,
      monthShort: monthShort,
      monthLong: monthLong,
      yearNumeric: yearNumeric,
      yearTwoDigit: yearTwoDigit,
      hour12TwoDigit: hour12TwoDigit,
      hour24TwoDigit: hour24TwoDigit,
      hour12Numeric: hour12Numeric,
      hour24Numeric: hour24Numeric,
      dayPeriod: dayPeriod,
      minute: minute,
      second: second,
    };
  }
  