
module DateConstants {
    /** Number of milliseconds in a 24 hour period */
    export var MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
    /** Number of milliseconds in a 7 x 24 hour period */
    export var MILLIS_PER_WEEK = 7 * MILLIS_PER_DAY;

    /** Full, capitialized, English names of the gregorian calendar months of the year (January, February, ...) */
    export var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /** Full, capitialized, English names of the gregorian calendar days of the week (i.e. Sunday, Monday, ...) */
    export var DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    /** the current local timezone offset in milliseconds */
    export var currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);

}

export = DateConstants;
