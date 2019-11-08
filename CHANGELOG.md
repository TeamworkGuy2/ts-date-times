# Change Log
All notable changes to this project will be documented in this file.
This project does its best to adhere to [Semantic Versioning](http://semver.org/).


--------
### [0.8.5](N/A) - 2019-11-08
#### Changed
* Update to TypeScript 3.7


--------
### [0.8.4](https://github.com/TeamworkGuy2/ts-date-times/commit/a90f85dbf6065308b2172f24c2489efa56d29514) - 2019-07-06
#### Changed
* Update to TypeScript 3.5


--------
### [0.8.3](https://github.com/TeamworkGuy2/ts-date-times/commit/c10eecdf927c7975257fabda44a0d1c04edfbe0b) - 2018-12-29
#### Changed
* Update to TypeScript 3.2
* Update @types/ dependencies


--------
### [0.8.2](https://github.com/TeamworkGuy2/ts-date-times/commit/c7ab4b7c49998e0a7c001d173f779f031c331fde) - 2018-10-17
#### Changed
* Update to TypeScript 3.1
* Update dev dependencies and @types
* Enable `tsconfig.json` `strict`
* Removed compiled bin tarball in favor of git tags


--------
### [0.8.1](https://github.com/TeamworkGuy2/ts-date-times/commit/bf3d1aa3873a0c9e843a645756ee9cc24ea76f37) - 2018-04-14
#### Changed
* Forgot to update package.json version in 0.8.0 release
* Forgot to include release tarball


--------
### [0.8.0](https://github.com/TeamworkGuy2/ts-date-times/commit/16e3a06868b8457b6568ace0e6bd013ec916c2b6) - 2018-04-09
#### Changed
* Renamed DateTimes.[ts|js] -> index.[ts|js] to follow standard npm package format
* Added release tarball and npm script `build-package` to package.json referencing external process to generate tarball


--------
### [0.7.5](https://github.com/TeamworkGuy2/ts-date-times/commit/a7e889245dd0f11a3cab821f8df9d100a73d0944) - 2018-03-31
#### Changed
* Update to TypeScript 2.8
* Update tsconfig.json with `noImplicitReturns: true` and `forceConsistentCasingInFileNames: true`


--------
### [0.7.4](https://github.com/TeamworkGuy2/ts-date-times/commit/4d5fe7fe4f1bad50bfd65424f830d10ea4d28256) - 2018-03-01
#### Changed
* Update to TypeScript 2.7
* Update dependencies: mocha, @types/chai, @types/mocha, @types/node


--------
### [0.7.3](https://github.com/TeamworkGuy2/ts-date-times/commit/8d777c39e7fbe888b2e0d9957af4524bea14e17c) - 2017-10-14
#### Changed
* New `DateDotNetJson` type (for the formatted strings returned by various `toDotNetJson()` functions), this is a nominal type based on `string`
* Changed the various `parseDotNetjson()` function parameters to accept new `DateDotNetJson` type in addition to string
* `tsconfig.json` added `noImplicitAny`, `noImplicitThis`, and `strictNullChecks` flags and fixed any related code


--------
### [0.7.2](https://github.com/TeamworkGuy2/ts-date-times/commit/f6792c3fd377bc33f8d2a23b34c7b4cdd962306f) - 2017-08-05
#### Changed
* Updated to TypeScript 2.4


--------
### [0.7.1](https://github.com/TeamworkGuy2/ts-date-times/commit/6e5e8528ad1b7d6621ac792945bc4af1be98e6c2) - 2017-05-09
#### Changed
* Updated to TypeScript 2.3, add tsconfig.json, use @types/ definitions
* Updated documentation to work better with Visual Studio


--------
### [0.7.0](https://github.com/TeamworkGuy2/ts-date-times/commit/4da61a4f81139fc9417456eac367745ea31c960c) - 2017-02-25
#### Added
* DateConstants MONTHS_SHORT and DAYS_OF_WEEK_SHORT
* Dates.toDisplayTime() and Timestamps.toDisplayTime()
* DateUtil.isSameDate()
* DateTimes.DateUtil

#### Changed
* Renamed DateUtil getTimeSince() to getMillisSince()


--------
### [0.6.0](https://github.com/TeamworkGuy2/ts-date-times/commit/56c9278885b18269daedc26375582d8df015fe76) - 2016-12-31
#### Changed
* TimestampUtc better nominal type behavior, changed from an `interface` to a `type` which auto down-casts to `number`, but must be explicitly cast to.


--------
### [0.5.0](https://github.com/TeamworkGuy2/ts-date-times/commit/c9b084aa832b94fd1389b52ed0454025f7065edc) - 2016-12-21
#### Changed
* TimestampUtc interface now extends Number and has a marker property so that it behaves as a strong type


--------
### [0.4.1](https://github.com/TeamworkGuy2/ts-date-times/commit/ab5f3a32b6439c14a8d8e10b2c9beb2dd85f10af) - 2016-11-07
#### Changed
* toDotNetJson() to handle date.getTime() returning a TimestampUtc


--------
### [0.4.0](https://github.com/TeamworkGuy2/ts-date-times/commit/1cd6d5acd935236c3bf002f508bebcff1bb0e3bf) - 2016-11-05
#### Added
Some method documentation

#### Changed
* DotNetJsonDate:
  * parseDotNetJson() now throws an error when a null or empty argument is passed in
  * toDotNetJson() now throws an error if the date argument is null or invalid
* Timestamps
  * toDotNetJson() defaults to 0 if the timestamp argument is null instead of the current date
* Small unit tests update


--------
### [0.3.0](https://github.com/TeamworkGuy2/ts-date-times/commit/58943906c63af9351bb60114959305cd60baa609) - 2016-10-22
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
