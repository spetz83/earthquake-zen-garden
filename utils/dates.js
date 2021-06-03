import { DateTime } from "luxon";

export const getDate = (quake) => {
  const rawDate = quake.properties.time;
  const tz = quake.properties.tz * 60000;
  const converted = new Date(rawDate + tz);
  const utc = converted.getTime() + converted.getTimezoneOffset() * 60000;
  const nd = new Date(utc);
  return DateTime.fromJSDate(nd);
};
