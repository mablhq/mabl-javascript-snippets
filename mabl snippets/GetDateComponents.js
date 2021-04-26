/**
Returns an object containing values associated today's date.

To access the date attributes listed below, save the output of this snippet to a variable (I'll call 
it "date" for the example) and then use this syntax: 
    {{@<variable name>.<option>}}
like this:
    {{@date.monthNumeric}}

EXAMPLE DATE: February 7th, 2021 at 1:03.09 PM

DATE ATTRIBUTES:
- dayNumeric     => 7
- dayTwoDigit    => 07
- monthNumeric   => 2
- monthTwoDigit  => 02
- monthNarrow    => F
- monthShort     => Feb
- monthLong      => February
- yearNumeric    => 2021
- yearTwoDigit   => 21
- hour12TwoDigit => 01
- hour24TwoDigit => 13
- hour12Numeric  => 1
- hour24Numeric  => 1
- DayOfWeekLong  => Sunday
- dayPeriod      => PM
- minute         => 03
- second         => 09

This then can be combined to create dates formatted however you need:
  "{{@date.yearNumeric}}-{{@date.monthTwoDigit}}-{{@date.dayTwoDigit}}" => "2021-02-07"
*/

function mablJavaScriptStep(mablInputs, callback) {
  var today = new Date();
  // Today
  callback(getDateComponentsFor(today));

  // Tomorrow
  // callback(getDateComponentsFor(today.addDays(1)));

  // Yesterday
  // callback(getDateComponentsFor(today.addDays(-1)));

  // Last Sunday
  // callback(getDateComponentsFor(today.getPreviousWeekday("sunday")));

  // Last Tuesday
  // callback(getDateComponentsFor(today.getPreviousWeekday("Tuesday")));

  // Next Friday
  // callback(getDateComponentsFor(today.getPreviousWeekday("Friday").addDays(7)));

  // Next Month
  // callback(getDateComponentsFor(today.addMonths(1)));

  // Last Month
  // callback(getDateComponentsFor(today.addMonths(-1)));
}


/* 
IF you are just trying to use this snippet, you only need to look above this line.
IF you want to modify this snippet, all of the logic is defined below!
*/
















/**************** Date Adjusting Methods ****************/

//Adds a method to all "Date" objects in this scope
//@param {integer} days - The number of days to add to the Date
//@return {Date} - The new Date
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} months - The number of months to add to the Date
//@return {Date} - The new Date
Date.prototype.addMonths = function (months) {
  var date = new Date(this.valueOf());
  date.setMonth(date.getMonth() + months);
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {string} weekday - The day of the week
//@return {Date} - The new Date
Date.prototype.getPreviousWeekday = function (weekday) {
  weekday = weekday.toLowerCase();
  var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var date = new Date(this.valueOf());
  var dayIndex = daysOfWeek.indexOf(weekday);
  var days = date.getDay() * -1 + dayIndex;
  if (dayIndex >= date.getDay()) {
    days = days - 7;
  }
  date.setDate(date.getDate() + days);
  return date;
};

// Formats the date based off of the provided options
// @param {object {string: string}} option - The options for how to format the date string
// @return {string} - Formatted date matching options
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

Date.prototype.weekday = function(format) {
  var region =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-us";
  return this.toLocaleDateString(region, {
    weekday: format
  });
}

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
  var weekdayNarrow = date.weekday("narrow");
  var weekdayShort = date.weekday("short");
  var weekdayLong = date.weekday("long");
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
    weekdayNarrow: weekdayNarrow,
    weekdayShort: weekdayShort,
    weekdayLong: weekdayLong,
    hour12TwoDigit: hour12TwoDigit,
    hour24TwoDigit: hour24TwoDigit,
    hour12Numeric: hour12Numeric,
    hour24Numeric: hour24Numeric,
    dayPeriod: dayPeriod,
    minute: minute,
    second: second,
  };
}
