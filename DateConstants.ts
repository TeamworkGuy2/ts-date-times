
module DateConstants {
    /** Number of milliseconds in a 24 hour period */
    export var MS_PER_DAY = 1000 * 60 * 60 * 24;

    /** the current local timezone offset in milliseconds */
    export var currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);

}

export = DateConstants;
