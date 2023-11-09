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
- weekdayNarrow  => S
- weekdayShort   => Sun
- weekdayLong    => Sunday
- hour12TwoDigit => 01
- hour24TwoDigit => 13
- hour12Numeric  => 1
- hour24Numeric  => 13
- dayPeriod      => PM
- minute         => 03
- second         => 09

This then can be combined to create dates formatted however you need:
  "{{@date.yearNumeric}}-{{@date.monthTwoDigit}}-{{@date.dayTwoDigit}}" => "2021-02-07"
*/

// The locale used to format the dates
let locale = "en-US";
// NOTE: Locale may not support Right to Left languages fully

// If you need to adjust the date to a timezone
// List of timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
// example: "America/Los_Angeles" 
let timezone = "";

function mablJavaScriptStep(mablInputs, callback) {
  let date;
  var today = new Date();
  
  // Today
  date = today;

  // Tomorrow
  // date = today.addDays(1);

  // Yesterday
  // date = today.addDays(-1);

  // Last Sunday
  // date = today.getPreviousWeekday("sunday");

  // Next Friday
  // date = today.getPreviousWeekday("Friday").addDays(7);

  // Last Month
  // date = today.addMonths(-1);

  // Next Year
  // date = today.addYears(1);

  // Example of chaining functions together
  // date = today.getPreviousWeekday("Friday").addYears(1).addMonths(1).addDays(1).addHours(1).addMinutes(1).addSeconds(1);

  // Get the components and return 
  callback(getDateComponentsFor(date));
}

/* 
IF you are just trying to use this snippet, you only need to look above this line.
IF you want to modify this snippet, all of the logic is defined below!
*/
















/**************** Date Adjusting Methods ****************/

//Adds a method to all "Date" objects in this scope
//@param {integer} seconds - The number of seconds to add to the Date
//@return {Date} - The new Date
Date.prototype.addSeconds = function (seconds) {
  var date = new Date(this.valueOf());
  date.setSeconds(date.getSeconds() + Number(seconds));
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} minutes - The number of minutes to add to the Date
//@return {Date} - The new Date
Date.prototype.addMinutes = function (minutes) {
  var date = new Date(this.valueOf());
  date.setMinutes(date.getMinutes() + Number(minutes));
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} hours - The number of hours to add to the Date
//@return {Date} - The new Date
Date.prototype.addHours = function (hours) {
  var date = new Date(this.valueOf());
  date.setHours(date.getHours() + Number(hours));
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} days - The number of days to add to the Date
//@return {Date} - The new Date
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + Number(days));
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} months - The number of months to add to the Date
//@return {Date} - The new Date
Date.prototype.addMonths = function (months) {
  var date = new Date(this.valueOf());
  date.setMonth(date.getMonth() + Number(months));
  return date;
};

//Adds a method to all "Date" objects in this scope
//@param {integer} years - The number of years to add to the Date
//@return {Date} - The new Date
Date.prototype.addYears = function (years) {
  var date = new Date(this.valueOf());
  date.setFullYear(date.getFullYear() + Number(years));
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

/**************** Date Formatting Methods ****************/

// Adds a method to Date objects that gets the month matching a format
Date.prototype.month = function (format) {
  let options = {
    month: format,
  };
  if (timezone) {options.timeZone = timezone};
  return this.toLocaleDateString(locale, options);
};

// Adds a method to Date objects that gets the day matching a format
Date.prototype.day = function (format) {
  let options = {
    day: format,
  };
  if (timezone) {options.timeZone = timezone};
  return this.toLocaleDateString(locale, options);
};

// Adds a method to Date objects that gets the year matching a format
Date.prototype.year = function (format) {
  let options = { year: format };
  if (timezone) {options.timeZone = timezone};
  return this.toLocaleDateString(locale, options);
};

// Adds a method to Date objects that gets the hour matching a format
Date.prototype.hour = function (format, hour12) {
  let options = {
    hour: format,
    hour12: hour12,
  };
  if (timezone) {options.timeZone = timezone};
  var hours = this.toLocaleTimeString(locale, options).split(" ")[0];
  if (format === "numeric" && !hour12) {
    //remove the first "0" if its numeric and 24 hour time
    hours = String(Number(hours));
  }
  return hours;
};

// Adds a method to Date objects that gets the dayPeriod (AM/PM)
Date.prototype.dayPeriod = function () {
  let options = {
    hour: "2-digit",
    hour12: true,
  };
  if (timezone) {options.timeZone = timezone};
  var hours = this.toLocaleTimeString(locale, options);
  return hours.split(" ")[1];
};

// Adds a method to Date objects that gets the ordinal day matching a format
Date.prototype.dayOrdinal = function (format) {
  let dayNumber = this.getDate();
  let nth = ['th', 'st', 'nd', 'rd'][(dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3 ? 0 : dayNumber % 10];
  let options = {
    day: format,
  };
  if (timezone) {options.timeZone = timezone};
  return this.toLocaleDateString(locale, options) + nth;
};

// Adds a method to Date objects that gets the minute matching a format
Date.prototype.minute = function (format) {
  let options = {
    minute: format,
  };
  if (timezone) {options.timeZone = timezone};
  // Handle "2-digit" case not returning 2 characters
  let minutes = this.toLocaleTimeString(locale, options);
  return ("0" + minutes).slice(-2);
};
// Adds a method to Date objects that gets the second matching a format
Date.prototype.second = function (format) {
  let options = {
    second: format,
  }; 
  if (timezone) {options.timeZone = timezone};
  var seconds = this.toLocaleTimeString(locale, options);
  // Handle "2-digit" case not returning 2 characters
  return ("0" + seconds).slice(-2);
};

// Adds a method to Date objects that gets the weekday matching a format
Date.prototype.weekday = function (format) {
  let options = {
    weekday: format,
  };
  if (timezone) {options.timeZone = timezone};
  return this.toLocaleDateString(locale, options);
};

function getDateComponentsFor(date) {
  var dayNumeric = date.day("numeric");
  var dayTwoDigit = date.day("2-digit");
  var dayOrdinal = date.dayOrdinal("numeric");
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
    dayOrdinal: dayOrdinal,
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
