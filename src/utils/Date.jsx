import {
  daysInMonthAvg,
  hoursInDay,
  minutesInFifteenMinutes,
  minutesInHalfHour,
  minutesInHour,
  milisecondsInMinute,
  amountOfDates,
} from "../constants/Constants";

export function convertDateToTimestamp(date) {
  const timestamp = new Date(date).getTime();
  return timestamp;
}

export function dateManipulation(date, method, value) {
  let startDate = date ? new Date(date) : new Date();
  startDate.setDate(
    method === "sum" ? startDate.getDate() + value : startDate.getDate() - value
  );
  return startDate;
}

export function convertTimestampToSeconds(date) {
  return Math.round(date / 1000);
}

export function checkResolution(startDate, endDate) {
  const timeMargin = endDate - startDate;
  const minutes = timeMargin / 60000;
  const hours = minutes / 60;
  const day = timeMargin / 8.64e7;

  if (day > (daysInMonthAvg * amountOfDates) / 2) {
    return "M";
  }

  if (hours > hoursInDay * amountOfDates) {
    return "D";
  }

  if (minutes > minutesInHour * amountOfDates) {
    return "60";
  }

  if (minutes > minutesInHalfHour * amountOfDates) {
    return "30";
  }

  if (minutes > minutesInFifteenMinutes * amountOfDates) {
    return "15";
  }

  if (timeMargin > milisecondsInMinute * amountOfDates) {
    return "1";
  }
}
