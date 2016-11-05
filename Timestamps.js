"use strict";
var Dates = require("./Dates");
/** Create, parse, stringify, and other helpers for the TimestampUtc type
 */
var Timestamps;
(function (Timestamps) {
    var dotNetJsonDateRegex = /(\d+)|([+-])|(\d{4})/g;
    /** Get the current UTC time as Unix millisecond timestamp */
    function now() {
        return Date.now();
    }
    Timestamps.now = now;
    /** Add the two arguments together */
    function add(a, b) {
        return (a + b);
    }
    Timestamps.add = add;
    /** Subtract the second argument from the first */
    function subtract(a, b) {
        return (a - b);
    }
    Timestamps.subtract = subtract;
    /** Attempt to parse a millisecond UTC timestamp like value
     * @param timestamp
     * @return a valid timestamp or null
     */
    function parseUtc(timestamp) {
        var val = parseInt(timestamp);
        return (isNaN(val) || !isFinite(val) ? null : val);
    }
    Timestamps.parseUtc = parseUtc;
    /** Convert a millisecond UTC timestamp to a Date
     * @param timestamp: convert a timestamp to a {@link Date}
     * @return the date created from the timestamp
     */
    function toDate(timestamp) {
        return new Date(timestamp);
    }
    Timestamps.toDate = toDate;
    /** Parse a JSON string representing a .NET DateTime value
     * @param dateString: a .NET date string in the format {@code "/Date(1415354400000-0500)/"},
     * or a numeric timestamp which is returned as-is
     * @param [ignoreTimezoneAssumeUtc=true]: true to ignore embeded timezone offset in the date string and
     * treat the date as a UTC timestamp and apply the current timezone offset, false to parse any
     * embeded timezone from the date string or apply no timezone offset if there is none
     * @return the epoch millisecond timestamp value of the input {@code dateString}
     */
    function parseDotNetJson(dateString, errorIfNoneUtcTimezone) {
        if (errorIfNoneUtcTimezone === void 0) { errorIfNoneUtcTimezone = true; }
        if (!dateString) {
            throw new Error("cannot parse null or empty date string '" + dateString + "'");
        }
        if (Number.isInteger(dateString)) {
            return dateString;
        }
        // Split the date string into parts. e.g. "/Date(1415354400000-0500)/" gets parsed into "1415354400000", "-", and "0500"
        var dateObj = dateString.match(dotNetJsonDateRegex);
        var timeZoneOffsetMs = 0;
        if (dateObj.length > 2) {
            // parse the '+/- ####' timezone offset at the end of the date string as a 'hhmm' timezone offset
            var offsetVal = parseInt(dateObj[2]);
            var sign = dateObj[1];
            if ((sign !== '+' && sign !== '-') || isNaN(offsetVal)) {
                throw new Error("unrecognized date string '" + dateString + "'");
            }
            var timeZoneOffsetHrMin = (sign === '+' ? -1 : 1) * offsetVal;
            timeZoneOffsetMs = (Math.round(timeZoneOffsetHrMin / 100) * 60 + timeZoneOffsetHrMin % 100) * 60 * 1000;
            if (errorIfNoneUtcTimezone && timeZoneOffsetMs !== 0) {
                throw new Error("invalid date timezone '" + dateString + "', expected UTC");
            }
        }
        var time = parseInt(dateObj[0], 10) + timeZoneOffsetMs;
        return time;
    }
    Timestamps.parseDotNetJson = parseDotNetJson;
    /** Convert a date to a string in the format supported by a .NET web service
     * @param timestamp: the timestamp to convert
     * @return a .NET web service date-time string representation
     */
    function toDotNetJson(timestamp) {
        var dateStr = "/Date(" + (timestamp || 0) + ")/";
        return dateStr;
    }
    Timestamps.toDotNetJson = toDotNetJson;
    /** Get the minute of the day (0 - 1439) from a timestamp. The date is in the current timezone.
     * @param timestamp: the timestamp to get the minute of the day from
     * @return the number of minutes that have elapsed since the last midnight of the timestamp's date
     */
    function getDayMinutes(timestamp) {
        return Dates.getDayMinutes(new Date(timestamp));
    }
    Timestamps.getDayMinutes = getDayMinutes;
    /** Convert a timestamp to a date string. The display date is in the current timezone.
     * @param timestamp: the timestamp to convert to a date
     * @param [separator]: optional separator such as '/' or '-' to separate the 'mm', 'dd', and 'yyyy' portions of the returned date string
     * @return the date represented by the timestamp in the format 'mm/dd/yyyy'
     */
    function toDisplayDate(timestamp, separator) {
        return Dates.toDisplayDate(new Date(timestamp), separator);
    }
    Timestamps.toDisplayDate = toDisplayDate;
    /** Convert a timestamp to a date-time string. The displayed date is in the current timezone.
     * @param timestamp: the timestamp to convert to a date-time string
     * @return the date-time representated by the timestamp in the format 'mm/dd/yyyy hh:mm am/pm'
     */
    function toDisplayDateTime(timestamp, includingMidnight) {
        return Dates.toDisplayDateTime(new Date(timestamp), includingMidnight);
    }
    Timestamps.toDisplayDateTime = toDisplayDateTime;
})(Timestamps || (Timestamps = {}));
module.exports = Timestamps;
