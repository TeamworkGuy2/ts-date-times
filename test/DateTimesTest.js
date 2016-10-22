/// <reference path="../../definitions/chai/chai.d.ts" />
/// <reference path="../../definitions/mocha/mocha.d.ts" />
"use strict";
var chai = require("chai");
var DateTimes = require("../DateTimes");
var DateConstants = DateTimes.DateConstants, Dates = DateTimes.Dates, Timestamps = DateTimes.Timestamps, DotNetJsonDate = DateTimes.DotNetJsonDate;
var asr = chai.assert;
suite("DateTimes", function DateTimesTest() {
    function testDotNetJson(asr) {
        var date = new Date(2000, 0, 27);
        var jsonTimestamp = DotNetJsonDate.toDotNetJson(date);
        var res = DotNetJsonDate.parseDotNetJson(jsonTimestamp);
        asr.equal(date.getTime(), res.getTime());
    }
    function testDotNetJsonTimestamp(asr) {
        var now = Date.now();
        var jsonTimestamp = Timestamps.toDotNetJson(now);
        var res = Timestamps.parseDotNetJson(jsonTimestamp);
        asr.equal(now, res);
    }
    test("DateTimes.MS_PER_DAY", function MS_PER_DAYTest() {
        asr.equal(DateConstants.MILLIS_PER_DAY, 24 * 60 * 60 * 1000);
    });
    test("DotNetJsonDate.parseDotNetJson", function parseDotNetJsonTest() {
        testDotNetJson(asr);
    });
    test("DotNetJsonDate.toDotNetJson", function toDotNetJsonTest() {
        testDotNetJson(asr);
    });
    test("Dates.getDayMinutes", function getDayMinutesTest() {
        var date = new Date(2000, 0, 27, 2, 14);
        var res = Dates.getDayMinutes(date);
        asr.equal(134, res);
    });
    test("Dates.toDisplayDate", function toDisplayDateTest() {
        var res1 = Dates.toDisplayDate(new Date(2000, 0, 27, 2, 14));
        asr.equal("01/27/2000", res1);
        var res2 = Dates.toDisplayDate(new Date(2000, 0, 9, 2, 14), "-");
        asr.equal("01-09-2000", res2);
    });
    test("Dates.toDisplayDateTime", function toDisplayDateTimeTest() {
        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 0, 0), false);
        asr.equal("01/27/2000", res1);
        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 2, 14), false);
        asr.equal("01/27/2000 02:14 a.m.", res1);
        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 23, 8), false);
        asr.equal("01/27/2000 11:08 p.m.", res1);
    });
    test("Dates.dayDiff", function dayDiffTest() {
        var oldDate = new Date(2000, 0, 27);
        var newDate = new Date(2000, 2, 1); // Jan 27 to Mar 1 = 34 days
        var res1 = Dates.dayDiff(newDate, oldDate);
        asr.equal(res1, 34);
    });
    test("Timestamp.currentTimezoneOffsetMillis", function currentTimezoneOffsetMillisTest() {
        var res1 = DateConstants.currentTimezoneOffsetMillis;
        asr.equal(res1, new Date().getTimezoneOffset() * 60 * 1000);
    });
    test("Timestamp.now", function nowTest() {
        var now = new Date().getTime();
        var res1 = Timestamps.now();
        asr.equal(res1 >= now, true);
    });
    test("Timestamp.toDate", function toDateTest() {
        var now = Timestamps.now();
        var res1 = Timestamps.toDate(now);
        asr.equal(res1.getTime(), now);
    });
    test("Timestamp.parseDotNetJson", function parseDotNetJsonTest() {
        testDotNetJsonTimestamp(asr);
    });
    test("Timestamp.toDotNetJson", function toDotNetJsonTest() {
        testDotNetJsonTimestamp(asr);
    });
    test("Timestamp.toUtcDotNetJson", function toUtcDotNetJsonTest() {
        testDotNetJsonTimestamp(asr);
    });
    test("Timestamp.getDayMinutes", function getDayMinutesTest() {
        var date = new Date(2000, 0, 27, 2, 14);
        var res = Timestamps.getDayMinutes(date.getTime());
        asr.equal(134, res);
    });
    test("Timestamp.toDisplayDate", function toDisplayDateTest() {
        var res1 = Timestamps.toDisplayDate(new Date(2000, 0, 27, 2, 14).getTime());
        asr.equal("01/27/2000", res1);
        var res2 = Timestamps.toDisplayDate(new Date(2000, 0, 9, 2, 14).getTime(), "-");
        asr.equal("01-09-2000", res2);
    });
    test("Timestamp.toDisplayDateTime", function toDisplayDateTimeTest() {
        var res1 = Timestamps.toDisplayDateTime(new Date(2000, 0, 27, 0, 0).getTime(), false);
        asr.equal("01/27/2000", res1);
        var res1 = Timestamps.toDisplayDateTime(new Date(2000, 0, 27, 2, 14).getTime(), false);
        asr.equal("01/27/2000 02:14 a.m.", res1);
        var res1 = Timestamps.toDisplayDateTime(new Date(2000, 0, 27, 23, 8).getTime(), false);
        asr.equal("01/27/2000 11:08 p.m.", res1);
    });
});
