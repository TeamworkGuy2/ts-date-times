"use strict";
var DateConstants;
(function (DateConstants) {
    /** Number of milliseconds in a 24 hour period */
    DateConstants.MS_PER_DAY = 1000 * 60 * 60 * 24;
    /** the current local timezone offset in milliseconds */
    DateConstants.currentTimezoneOffsetMillis = (new Date().getTimezoneOffset() * 60 * 1000);
})(DateConstants || (DateConstants = {}));
module.exports = DateConstants;
