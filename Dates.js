"use strict";
var DateConstants = require("./DateConstants");
/** Javascript 'Date' type conversion/manipulation
 */
var Dates;
(function (Dates) {
    /** Get minutes of the day (0 - 1439) from a date. The date is in the current timezone.
     * @param date: the date to get the minute of the day from
     * @return the number of minutes that have elapsed since the last midnight of the timestamp
     */
    function getDayMinutes(date) {
        return date.getHours() * 60 + date.getMinutes();
    }
    Dates.getDayMinutes = getDayMinutes;
    /** Convert a date to a string. The display date is in the current timezone. The format is 'mm/dd/yyyy'
     * @param date: the date to convert to a display date string
     * @param [separator='/']: optional separator such as '/' or '-' to separate the 'mm', 'dd', and 'yyyy' portions of the returned date string
     * @return the date represented by the timestamp in the format 'mm/dd/yyyy'
     */
    function toDisplayDate(date, separator) {
        if (separator === void 0) { separator = "/"; }
        var d = date.getDate();
        var mon = date.getMonth() + 1;
        var y = date.getFullYear();
        return (mon <= 9 ? '0' + mon : '' + mon) + separator + (d <= 9 ? '0' + d : '' + d) + separator + y;
    }
    Dates.toDisplayDate = toDisplayDate;
    /** Convert a date to a date-time string. The display date-time is in the current timezone. The format is 'mm/dd/yyyy hh:mm am/pm'
     * @param date: the date to convert to a date-time string
     * @param [includingMidnight=false]: if true AND date is midnight, returns only the 'mm/dd/yyyy' portion of the date representation
     * @return the date-time representated by the timestamp in the format 'mm/dd/yyyy hh:mm am/pm'
     */
    function toDisplayDateTime(date, includingMidnight) {
        var hrs = date.getHours();
        var mins = date.getMinutes();
        if (!includingMidnight && hrs === 0 && mins === 0) {
            return Dates.toDisplayDate(date);
        }
        return Dates.toDisplayDate(date) + ' ' + Dates.toDisplayTime(date);
    }
    Dates.toDisplayDateTime = toDisplayDateTime;
    /** Convert a date to a time string. The display time is in the current timezone. The format is 'hh:mm am/pm'
     * @param date: the date to convert to a time string
     * @return the time representated by the timestamp in the format 'hh:mm am/pm'
     */
    function toDisplayTime(date) {
        var hrs = date.getHours();
        var mins = date.getMinutes();
        var ampm = hrs < 12 ? 'a.m.' : 'p.m.';
        hrs = hrs % 12;
        if (hrs === 0) {
            hrs = 12;
        }
        return (hrs <= 9 ? '0' + hrs : '' + hrs) + ':' + (mins <= 9 ? '0' + mins : '' + mins) + ' ' + ampm;
    }
    Dates.toDisplayTime = toDisplayTime;
    /** Calculates the number of days between 'dtLeft - dtRight'
     * @param [incrementAtMidnight=false]: if true, assumes dtRight's time is midnight and counts from dtRight's date
     * (i.e.if incrementAtMidnight == true then 2001-3-15 2:43 is the same day as 2001-3-15 19:39, even though the dates are more than 12 hours apart)
     */
    function dayDiff(dtLeft, dtRight, incrementAtMidnight) {
        if (incrementAtMidnight === void 0) { incrementAtMidnight = false; }
        var daysDiff = ((dtLeft.getTime() - dtRight.getTime()) / DateConstants.MILLIS_PER_DAY);
        var dateDiff = (incrementAtMidnight ? Math.floor(daysDiff) : Math.round(daysDiff)); // TODO this does not handle leap years or non-gregorian calendar days
        return dateDiff;
    }
    Dates.dayDiff = dayDiff;
})(Dates || (Dates = {}));
module.exports = Dates;
