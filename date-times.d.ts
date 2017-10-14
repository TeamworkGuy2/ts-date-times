
/** Unix epoch UTC millisecond timestamp
 * Nominal type, see: https://basarat.gitbooks.io/typescript/content/docs/tips/nominalTyping.html
 */
declare type TimestampUtc = number & { _timestampUtcBrand: void; };

/** .NET JSON date/timestamp string (format: '/Date(1234567890-1020)/)
 */
declare type DateDotNetJson = string & { _dateDotNetJsonBrand: void; };
