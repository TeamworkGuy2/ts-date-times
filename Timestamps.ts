/** Create, parse, stringify, and other helpers for the TimestampUtc type
 */
module Timestamps {
    /** the current local timezone offset in milliseconds */
    export var currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);


    /** Get the current UTC time as Unix millisecond timestamp */
    export function now(): TimestampUtc {
        return Date.now();
    }


    /** Add the two arguments together */
    export function add(a: TimestampUtc, b: TimestampUtc): TimestampUtc {
        return <TimestampUtc>(<number>a + <number>b);
    }


    /** Subtract the second argument from the first */
    export function subtract(a: TimestampUtc, b: TimestampUtc): TimestampUtc {
        return <TimestampUtc>(<number>a - <number>b);
    }


    /** Attempt to parse a millisecond UTC timestamp like value
     * @param timestamp
     * @return a valid timestamp or null
     */
    export function parseUtc(timestamp: number | string | TimestampUtc) {
        var val = parseInt(<any>timestamp);
        return <TimestampUtc>(isNaN(val) || !isFinite(val) ? null : val);
    }


    /** Convert a millisecond UTC timestamp to a Date
     * @param timestamp: convert a timestamp to a {@link Date}
     * @return the date created from the timestamp
     */
    export function toDate(timestamp: TimestampUtc): Date {
        return new Date(<number>timestamp);
    }

}

export = Timestamps;