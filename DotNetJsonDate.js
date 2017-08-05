"use strict";
var Timestamps = require("./Timestamps");
/** .NET web service JSON representation of the C# 'DateTime' data type
 */
var DotNetJsonDate;
(function (DotNetJsonDate) {
    /** Parses a date string in the format returned by .NET web service
     * it returns date in its time zone, so we have to convert it to UTC and then to JS time zone
     * @param dateStr: the .NET web service date string to convert to a Date object.
     * Can be null, in which case the current date/time is returned.
     * @return a new date object created from the 'dateStr'
     * @throws an error if the 'dateStr' is null or empty
     */
    function parseDotNetJson(dateStr) {
        // parseDotNetJson() will handle null/empty values and throw an error
        var time = Timestamps.parseDotNetJson(dateStr);
        // Use the UTC epoch timestamp to create a local date
        return new Date(time);
    }
    DotNetJsonDate.parseDotNetJson = parseDotNetJson;
    /** Convert a date to a string in the format supported by a .NET web service
     * @param date: the date to convert.  Or null to use the current date/time.
     * @return a .NET web service date-time string representation
     * @throws an error if the 'date' is null or empty
     */
    function toDotNetJson(date) {
        var time;
        if (date == null || isNaN(time = date.getTime())) {
            throw new Error("cannot convert null or invalid date to .NET JSON string");
        }
        return Timestamps.toDotNetJson(time);
    }
    DotNetJsonDate.toDotNetJson = toDotNetJson;
})(DotNetJsonDate || (DotNetJsonDate = {}));
module.exports = DotNetJsonDate;
