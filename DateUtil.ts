﻿import DateConstants = require("./DateConstants");

module DateUtil {
    export var DEFAULT_MIN_DAYS_IN_FIRST_WEEK = 1;


    /** Create a midnight (00:00) date for the given year, month, date using the Date constructor
     */
    export function newMidnightDate(year: number, month: number, day: number): Date {
        return new Date(year, month, day, 0, 0, 0, 0);
    }


    /** Check if the first argument is an earlier date than the second argument
     */
    export function isBefore(base: Date, date: Date): boolean {
        return base.getTime() < date.getTime();
    }


    /** Check whether two dates are the same year-month-day
     */
    export function isSameDate(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }


    /** Get the number of milliseconds between two dates
     */
    export function getMillisSince(base: Date, date: Date): number {
        return <number>base.getTime() - <number>date.getTime();
    }


    /** Returns a midnight date of the first Sunday previous to the given date
     */
    export function getPreviousSunday(date: Date): Date {
        // Using midday avoids any possibility of Daylight Savings Time (DST) messing things up
        var midday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
        var previousSunday = new Date(<number>midday.getTime() - date.getDay() * DateConstants.MILLIS_PER_DAY);
        return newMidnightDate(previousSunday.getFullYear(), previousSunday.getMonth(), previousSunday.getDate());
    }


    export function getDayInYear(date: Date): number {
        var startOfYear = newMidnightDate(date.getFullYear(), 0, 1);
        return 1 + Math.floor(getMillisSince(date, startOfYear) / DateConstants.MILLIS_PER_DAY);
    }


    export function getWeekInMonth(date: Date, minDaysInFirstWeek?: number | null | undefined): number {
        if (minDaysInFirstWeek == null) {
            minDaysInFirstWeek = DEFAULT_MIN_DAYS_IN_FIRST_WEEK;
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


    export function getWeekInYear(date: Date, minDaysInFirstWeek?: number | null | undefined): number {
        if (minDaysInFirstWeek == null) {
            minDaysInFirstWeek = DEFAULT_MIN_DAYS_IN_FIRST_WEEK;
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

}

export = DateUtil;
