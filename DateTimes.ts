/// <reference path="./date-times.d.ts" />

import DateConstants = require("./DateConstants");
import DotNetJsonDate = require("./DotNetJsonDate");
import Dates = require("./Dates");
import Timestamps = require("./Timestamps");

var dc = DateConstants;
var dnjd = DotNetJsonDate;
var d = Dates;
var ts = Timestamps;

/** DateTimes - contains static sub-modules for date and time operations, including:
 * - DateConstants: for date constants such as the days of the week or milliseconds in a day
 * - Dates: for working with JS 'Date' objects and converting to display strings
 * - Timestamps: working with UTC millisecond Unix epoch offsets
 * - DotNetJsonDate: for working with .NET JSON serialized date-time strings
 */
module DateTimes {

    export var DateConstants = dc;

    export var Dates = d;

    export var Timestamps = ts;

    export var DotNetJsonDate = dnjd;

}

export = DateTimes;
