
/** Unix epoch UTC millisecond timestamp
 * Nominal type, see: https://basarat.gitbooks.io/typescript/content/docs/tips/nominalTyping.html
 */
declare type TimestampUtc = number & { _timestampUtcBrand: void; };
