import chai = require("chai");
import mocha = require("mocha");
import DateTimes = require("../index");

var { DateConstants, Dates, DateUtil, Timestamps, DotNetJsonDate } = DateTimes;

var asr = chai.assert;


suite("DateTimes", function DateTimesTest() {

    function testDotNetJson(asr: Chai.AssertStatic) {
        var date = new Date(2000, 0, 27);
        var jsonTimestamp = DotNetJsonDate.toDotNetJson(date);
        asr.equal(DotNetJsonDate.parseDotNetJson(jsonTimestamp).getTime(), date.getTime());

        asr.equal(DotNetJsonDate.parseDotNetJson(Timestamps.toDotNetJson(<TimestampUtc><any>null)).getTime(), new Date(0).getTime());
        asr.equal(DotNetJsonDate.parseDotNetJson(Timestamps.toDotNetJson(<TimestampUtc>0)).getTime(), new Date(0).getTime());
    }


    function testDotNetJsonTimestamp(asr: Chai.AssertStatic) {
        var now = <TimestampUtc>Date.now();
        var jsonTimestamp = Timestamps.toDotNetJson(now);
        asr.equal(Timestamps.parseDotNetJson(jsonTimestamp), now);

        asr.equal(Timestamps.parseDotNetJson(Timestamps.toDotNetJson(<TimestampUtc><any>null)), new Date(0).getTime());
        asr.equal(Timestamps.parseDotNetJson(Timestamps.toDotNetJson(<TimestampUtc>0)), new Date(0).getTime());
    }


    test("DateTimes.MILLIS_PER_DAY", function MS_PER_DAYTest() {
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
        asr.equal(res, 134);
    });


    test("Dates.toDisplayDate", function toDisplayDateTest() {
        var res1 = Dates.toDisplayDate(new Date(2000, 0, 27, 2, 14));
        asr.equal(res1, "01/27/2000");

        var res2 = Dates.toDisplayDate(new Date(2000, 0, 9, 2, 14), "-");
        asr.equal(res2, "01-09-2000");
    });


    test("Dates.toDisplayDateTime", function toDisplayDateTimeTest() {
        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 0, 0), false);
        asr.equal(res1, "01/27/2000");

        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 2, 14), false);
        asr.equal(res1, "01/27/2000 02:14 am");

        var res1 = Dates.toDisplayDateTime(new Date(2000, 0, 27, 23, 8), false);
        asr.equal(res1, "01/27/2000 11:08 pm");
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
        asr.isTrue(<number><any>res1 >= now);
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


    test("Timestamp.getDayMinutes", function getDayMinutesTest() {
        var date = new Date(2000, 0, 27, 2, 14);
        var res = Timestamps.getDayMinutes(<TimestampUtc>date.getTime());
        asr.equal(res, 134);
    });


    test("Timestamp.toDisplayDate", function toDisplayDateTest() {
        var res1 = Timestamps.toDisplayDate(<TimestampUtc>new Date(2000, 0, 27, 2, 14).getTime());
        asr.equal(res1, "01/27/2000");

        var res2 = Timestamps.toDisplayDate(<TimestampUtc>new Date(2000, 0, 9, 2, 14).getTime(), "-");
        asr.equal(res2, "01-09-2000");
    });


    test("Timestamp.toDisplayDateTime", function toDisplayDateTimeTest() {
        var res1 = Timestamps.toDisplayDateTime(<TimestampUtc>new Date(2000, 0, 27, 0, 0).getTime(), false);
        asr.equal(res1, "01/27/2000");

        var res1 = Timestamps.toDisplayDateTime(<TimestampUtc>new Date(2000, 0, 27, 2, 14).getTime(), false);
        asr.equal(res1, "01/27/2000 02:14 am");

        // Testing changing the AM/PM time string constants
        var origPmStr = DateConstants.PM_STRING;
        DateConstants.PM_STRING = "P.M.";

        var res1 = Timestamps.toDisplayDateTime(<TimestampUtc>new Date(1920, 5, 3, 15, 21).getTime(), false);
        asr.equal(res1, "06/03/1920 03:21 P.M.");

        DateConstants.PM_STRING = origPmStr;

        var res1 = Timestamps.toDisplayDateTime(<TimestampUtc>new Date(2000, 0, 27, 23, 8).getTime(), false);
        asr.equal(res1, "01/27/2000 11:08 pm");
    });


    test("Timestamp.toDisplayTime", function toDisplayTimeTest() {
        var res1 = Timestamps.toDisplayTime(<TimestampUtc>new Date(2000, 0, 27, 0, 0).getTime());
        asr.equal(res1, "12:00 am");

        var res1 = Timestamps.toDisplayTime(<TimestampUtc>new Date(2000, 0, 27, 2, 14).getTime());
        asr.equal(res1, "02:14 am");

        var res1 = Timestamps.toDisplayTime(<TimestampUtc>new Date(2000, 0, 27, 23, 8).getTime());
        asr.equal(res1, "11:08 pm");
    });


    test("Timestamp.isSameDate", function isSameDateTest() {
        var res1 = DateUtil.isSameDate(new Date(2000, 0, 27), new Date(2000, 0, 28));
        asr.isFalse(res1);

        var res1 = DateUtil.isSameDate(new Date(2000, 0, 27, 2, 14), new Date(2000, 0, 27, 23));
        asr.isTrue(res1);

        var res1 = DateUtil.isSameDate(new Date(2000, 0, 27, 23, 8), new Date(2000, 0, 27));
        asr.isTrue(res1);
    });

});