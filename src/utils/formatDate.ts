import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateByUserTimezone = (
  date: string,
  format = "D MMM YYYY"
) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return dayjs(date).tz(userTimeZone).format(format);
};
