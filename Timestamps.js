"use strict";
/** Create, parse, stringify, and other helpers for the TimestampUtc type
 */
var Timestamps;
(function (Timestamps) {
    /** the current local timezone offset in milliseconds */
    Timestamps.currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);
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
})(Timestamps || (Timestamps = {}));
module.exports = Timestamps;
