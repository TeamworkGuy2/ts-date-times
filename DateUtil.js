"use strict";
var DateConstants = require("./DateConstants");
var DateUtil;
(function (DateUtil) {
    DateUtil.DEFAULT_MIN_DAYS_IN_FIRST_WEEK = 1;
    /** Create a midnight (00:00) date for the given year, month, date using the Date constructor
     */
    function newMidnightDate(year, month, day) {
        return new Date(year, month, day, 0, 0, 0, 0);
    }
    DateUtil.newMidnightDate = newMidnightDate;
    /** Check if the first argument is an earlier date than the second argument
     */
    function isBefore(base, date) {
        return base.getTime() < date.getTime();
    }
    DateUtil.isBefore = isBefore;
    /** Check whether two dates are the same year-month-day
     */
    function isSameDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
    DateUtil.isSameDate = isSameDate;
    /** Get the number of milliseconds between two dates
     */
    function getMillisSince(base, date) {
        return base.getTime() - date.getTime();
    }
    DateUtil.getMillisSince = getMillisSince;
    /** Returns a midnight date of the first Sunday previous to the given date
     */
    function getPreviousSunday(date) {
        // Using midday avoids any possibility of Daylight Savings Time (DST) messing things up
        var midday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
        var previousSunday = new Date(midday.getTime() - date.getDay() * DateConstants.MILLIS_PER_DAY);
        return newMidnightDate(previousSunday.getFullYear(), previousSunday.getMonth(), previousSunday.getDate());
    }
    DateUtil.getPreviousSunday = getPreviousSunday;
    function getDayInYear(date) {
        var startOfYear = newMidnightDate(date.getFullYear(), 0, 1);
        return 1 + Math.floor(getMillisSince(date, startOfYear) / DateConstants.MILLIS_PER_DAY);
    }
    DateUtil.getDayInYear = getDayInYear;
    function getWeekInMonth(date, minDaysInFirstWeek) {
        if (minDaysInFirstWeek == null) {
            minDaysInFirstWeek = DateUtil.DEFAULT_MIN_DAYS_IN_FIRST_WEEK;
        }
        var previousSunday = getPreviousSunday(date);
        var startOfMonth = newMidnightDate(date.getFullYear(), date.getMonth(), 1);
        var numberOfSundays = isBefore(previousSunday, startOfMonth) ?
            0 : 1 + Math.floor(getMillisSince(previousSunday, startOfMonth) / DateConstants.MILLIS_PER_WEEK);
        var numberOfDaysInFirstWeek = 7 - startOfMonth.getDay();
        var weekInMonth = numberOfSundays;
        if (numberOfDaysInFirstWeek >= minDaysInFirstWeek) {
            weekInMonth++;
        }
        return weekInMonth;
    }
    DateUtil.getWeekInMonth = getWeekInMonth;
    function getWeekInYear(date, minDaysInFirstWeek) {
        if (minDaysInFirstWeek == null) {
            minDaysInFirstWeek = DateUtil.DEFAULT_MIN_DAYS_IN_FIRST_WEEK;
        }
        var previousSunday = getPreviousSunday(date);
        var startOfYear = newMidnightDate(date.getFullYear(), 0, 1);
        var weeksSinceSartOfYear = Math.floor(getMillisSince(previousSunday, startOfYear) / DateConstants.MILLIS_PER_WEEK);
        var numberOfSundays = isBefore(previousSunday, startOfYear) ? 0 : 1 + weeksSinceSartOfYear;
        var numberOfDaysInFirstWeek = 7 - startOfYear.getDay();
        var weekInYear = numberOfSundays;
        if (numberOfDaysInFirstWeek < minDaysInFirstWeek) {
            weekInYear--;
        }
        return weekInYear;
    }
    DateUtil.getWeekInYear = getWeekInYear;
})(DateUtil || (DateUtil = {}));
module.exports = DateUtil;
