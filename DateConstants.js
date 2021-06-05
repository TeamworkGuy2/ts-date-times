"use strict";
var DateConstants;
(function (DateConstants) {
    /** String to append to display times that are less than 12 hrs */
    DateConstants.AM_STRING = "am";
    /** String to append to display times that are greater than or equal to 12 hrs */
    DateConstants.PM_STRING = "pm";
    /** Number of milliseconds in a 24 hour period */
    DateConstants.MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
    /** Number of milliseconds in a 7 x 24 hour period */
    DateConstants.MILLIS_PER_WEEK = 7 * DateConstants.MILLIS_PER_DAY;
    /** Full, capitialized, English names of the gregorian calendar months of the year (January, February, ...) */
    DateConstants.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /** Abbreviated, capitialized, English names of the gregorian calendar months of the year (Jan, Feb, ...) */
    DateConstants.MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    /** Full, capitialized, English names of the gregorian calendar days of the week (i.e. Sunday, Monday, ...) */
    DateConstants.DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    /** Abbreviated, capitialized, English names of the gregorian calendar days of the week (i.e. Sun, Mon, ...) */
    DateConstants.DAYS_OF_WEEK_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    /** the current local timezone offset in milliseconds */
    DateConstants.currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);
})(DateConstants || (DateConstants = {}));
module.exports = DateConstants;
