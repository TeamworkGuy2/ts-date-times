"use strict";
/// <reference path="./date-times.d.ts" />
var DateConstants = require("./DateConstants");
var DotNetJsonDate = require("./DotNetJsonDate");
var Dates = require("./Dates");
var DateUtil = require("./DateUtil");
var Timestamps = require("./Timestamps");
var dc = DateConstants;
var dnjd = DotNetJsonDate;
var d = Dates;
var du = DateUtil;
var ts = Timestamps;
/** DateTimes - contains static sub-modules for date and time operations, including:
 * - DateConstants: for date constants such as the days of the week or milliseconds in a day
 * - Dates: for working with JS 'Date' objects and converting to display strings
 * - Timestamps: working with UTC millisecond Unix epoch offsets
 * - DotNetJsonDate: for working with .NET JSON serialized date-time strings
 */
var DateTimes;
(function (DateTimes) {
    DateTimes.DateConstants = dc;
    DateTimes.Dates = d;
    DateTimes.DateUtil = du;
    DateTimes.Timestamps = ts;
    DateTimes.DotNetJsonDate = dnjd;
})(DateTimes || (DateTimes = {}));
module.exports = DateTimes;
