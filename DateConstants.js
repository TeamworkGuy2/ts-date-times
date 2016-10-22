"use strict";
var DateConstants;
(function (DateConstants) {
    /** Number of milliseconds in a 24 hour period */
    DateConstants.MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
    /** Number of milliseconds in a 7 x 24 hour period */
    DateConstants.MILLIS_PER_WEEK = 7 * DateConstants.MILLIS_PER_DAY;
    /** Full, capitialized, English names of the gregorian calendar months of the year (January, February, ...) */
    DateConstants.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /** Full, capitialized, English names of the gregorian calendar days of the week (i.e. Sunday, Monday, ...) */
    DateConstants.DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    /** the current local timezone offset in milliseconds */
    DateConstants.currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);
})(DateConstants || (DateConstants = {}));
module.exports = DateConstants;
