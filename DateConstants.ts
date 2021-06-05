
module DateConstants {
    /** String to append to display times that are less than 12 hrs */
    export var AM_STRING = "am";
    /** String to append to display times that are greater than or equal to 12 hrs */
    export var PM_STRING = "pm";
    /** Number of milliseconds in a 24 hour period */
    export var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
    /** Number of milliseconds in a 7 x 24 hour period */
    export var MILLIS_PER_WEEK = 7 * MILLIS_PER_DAY;

    /** Full, capitialized, English names of the gregorian calendar months of the year (January, February, ...) */
    export var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /** Abbreviated, capitialized, English names of the gregorian calendar months of the year (Jan, Feb, ...) */
    export var MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    /** Full, capitialized, English names of the gregorian calendar days of the week (i.e. Sunday, Monday, ...) */
    export var DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    /** Abbreviated, capitialized, English names of the gregorian calendar days of the week (i.e. Sun, Mon, ...) */
    export var DAYS_OF_WEEK_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    /** the current local timezone offset in milliseconds */
    export var currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);

}

export = DateConstants;
