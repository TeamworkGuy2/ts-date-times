# Change Log
All notable changes to this project will be documented in this file.
This project does its best to adhere to [Semantic Versioning](http://semver.org/).


--------
### [0.3.0](N/A) - 2016-10-22
#### Added
* DateConstants MILLIS_PER_WEEK, MONTHS (string array of full names), DAYS_OF_WEEK (string array of full names)
* DateUtil class with methods like getTimeSince(), isBefore(), getWeekInYear(), getPreviousSunday(), etc.

#### Changed
* Renamed DateConstants MS_PER_DAY -> MILLIS_PER_DAY


--------
### [0.2.0](https://github.com/TeamworkGuy2/ts-date-times/commit/6340ebcc4a75d02c55f79301fd4c18b1401adfeb) - 2016-10-08
#### Changed
Major refactoring, split DateTimes into:
* Dates, Timestamps, DotNetJsonDate
* Removed timezone related parameters from timestamp/dotNetJson methods since these methods should handle timezone automatically and Javascript's Date.now() and getTime() are implicitly UTC which I didn't clearly understand until now


--------
### [0.1.2](https://github.com/TeamworkGuy2/ts-date-times/commit/ce782aa5302cd9977fc07301a7e8a881ee14e8c9) - 2016-09-17
#### Changed
* Forgot a few changes in the last commit for handling TimestampUtc


--------
### [0.1.1](https://github.com/TeamworkGuy2/ts-date-times/commit/989af668dda375558b7725d0d05d73cc0a5b9fcd) - 2016-09-17
#### Added
* Timestamps module with utilties for dealing with TimestampUtc including duplicates of DateTimes.Timestamp currentTimezoneOffsetMillis, now(), and toDate()


--------
### [0.1.0](https://github.com/TeamworkGuy2/ts-date-times/commit/e5c2d1286ef4f8a09ee6ef38fbd09759f22a0077) - 2016-08-28
#### Added
Initial commit of existing DateTimes module moved from ts-mortar project
