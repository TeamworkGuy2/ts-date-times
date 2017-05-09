import Dates = require("./Dates");

/** Create, parse, stringify, and other helpers for the TimestampUtc type
 */
module Timestamps {
    var dotNetJsonDateRegex = /(\d+)|([+-])|(\d{4})/g;


    /** Get the current UTC time as Unix millisecond timestamp */
    export function now(): TimestampUtc {
        return <TimestampUtc>Date.now();
    }


    /** Add the two arguments together */
    export function add(a: TimestampUtc | number, b: TimestampUtc | number): TimestampUtc {
        return <TimestampUtc>(<number>a + <number>b);
    }


    /** Subtract the second argument from the first */
    export function subtract(a: TimestampUtc | number, b: TimestampUtc | number): TimestampUtc {
        return <TimestampUtc>(<number>a - <number>b);
    }


    /** Attempt to parse a millisecond UTC timestamp like value
     * @param timestamp
     * @return a valid timestamp or null
     */
    export function parseUtc(timestamp: number | string | TimestampUtc): TimestampUtc {
        var val = parseInt(<any>timestamp);
        return <TimestampUtc>(isNaN(val) || !isFinite(val) ? null : val);
    }


    /** Convert a millisecond UTC timestamp to a Date
     * @param timestamp: convert a timestamp to a Date
     * @return the date created from the timestamp
     */
    export function toDate(timestamp: TimestampUtc): Date {
        return new Date(<number>timestamp);
    }


    /** Parse a JSON string representing a .NET DateTime value
     * @param dateString: a .NET date string in the format "/Date(1415354400000-0500)/",
     * or a numeric timestamp which is returned as-is
     * @param [ignoreTimezoneAssumeUtc=true]: true to ignore embeded timezone offset in the date string and
     * treat the date as a UTC timestamp and apply the current timezone offset, false to parse any
     * embeded timezone from the date string or apply no timezone offset if there is none
     * @return the epoch millisecond timestamp value of the input 'dateString'
     */
    export function parseDotNetJson(dateString: string | number | TimestampUtc, errorIfNoneUtcTimezone: boolean = true): TimestampUtc {
        if (!dateString) {
            throw new Error("cannot parse null or empty date string '" + dateString + "'");
        }
        if (Number.isInteger(<any>dateString)) {
            return <TimestampUtc><number>dateString;
        }

        // Split the date string into parts. e.g. "/Date(1415354400000-0500)/" gets parsed into "1415354400000", "-", and "0500"
        var dateObj = (<string>dateString).match(dotNetJsonDateRegex);
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
        return <TimestampUtc>time;
    }


    /** Convert a date to a string in the format supported by a .NET web service
     * @param timestamp: the timestamp to convert
     * @return a .NET web service date-time string representation
     */
    export function toDotNetJson(timestamp: TimestampUtc): string {
        var dateStr = "/Date(" + (timestamp || 0) + ")/";
        return dateStr;
    }


    /** Get the minute of the day (0 - 1439) from a timestamp. The date is in the current timezone.
     * @param timestamp: the timestamp to get the minute of the day from
     * @return the number of minutes that have elapsed since the last midnight of the timestamp's date
     */
    export function getDayMinutes(timestamp: TimestampUtc): number {
        return Dates.getDayMinutes(new Date(<number>timestamp));
    }


    /** Convert a timestamp to a date string. The display date is in the current timezone.
     * @param timestamp: the timestamp to convert to a date
     * @param [separator]: optional separator such as '/' or '-' to separate the 'mm', 'dd', and 'yyyy' portions of the returned date string
     * @return the date represented by the timestamp in the format 'mm/dd/yyyy'
     */
    export function toDisplayDate(timestamp: TimestampUtc, separator?: string): string {
        return Dates.toDisplayDate(new Date(<number>timestamp), separator);
    }


    /** Convert a timestamp to a date-time string. The displayed date is in the current timezone.
     * @param timestamp: the timestamp to convert to a date-time string
     * @return the date-time representated by the timestamp in the format 'mm/dd/yyyy hh:mm am/pm'
     */
    export function toDisplayDateTime(timestamp: TimestampUtc, includingMidnight?: boolean): string {
        return Dates.toDisplayDateTime(new Date(<number>timestamp), includingMidnight);
    }


    /** Convert a timestamp to a time string. The displayed time is in the current timezone.
     * @param timestamp: the timestamp to convert to a time string
     * @return the time representated by the timestamp in the format 'hh:mm am/pm'
     */
    export function toDisplayTime(timestamp: TimestampUtc): string {
        return Dates.toDisplayTime(new Date(<number>timestamp));
    }

}

export = Timestamps;
