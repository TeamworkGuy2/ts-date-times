"use strict";
var Timestamps = require("./Timestamps");
/** .NET web service JSON representation of the C# 'DateTime' data type
 */
var DotNetJsonDate;
(function (DotNetJsonDate) {
    /** Parses a date string in the format returned by .NET web service
     * it returns date in its time zone, so we have to convert it to UTC and then to JS time zone
     * @param value: the .NET web service date string to convert to a {@link Date} object.
     * Can be null, in which case the current date/time is returned.
     * @return a new date object created from the {@code value}
     */
    function parseDotNetJson(value) {
        if (!value) {
            return new Date();
        }
        var time = Timestamps.parseDotNetJson(value);
        // Use the UTC epoch timestamp to create a local date
        return new Date(time);
    }
    DotNetJsonDate.parseDotNetJson = parseDotNetJson;
    /** Convert a date to a string in the format supported by a .NET web service
     * @param date: the date to convert.  Or null to use the current date/time.
     * @return a .NET web service date-time string representation
     */
    function toDotNetJson(date) {
        return Timestamps.toDotNetJson((date || new Date()).getTime());
    }
    DotNetJsonDate.toDotNetJson = toDotNetJson;
})(DotNetJsonDate || (DotNetJsonDate = {}));
module.exports = DotNetJsonDate;
