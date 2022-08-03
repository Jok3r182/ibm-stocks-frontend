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

export function convertTimestampToSeconds(date){
  return date/1000
}

export function checkResolution(startDate, endDate) {
  const timeMargin = endDate - startDate;
  const minutes = timeMargin / 60000;
  const hours = minutes / 60;
  const day = timeMargin / 8.64e7;

  if (day > 50) {
    return "M";
  }

  if (hours > 50) {
    return "D";
  }

  if (minutes > 240) {
    return "60";
  }

  if (minutes > 120) {
    return "30";
  }

  if (minutes > 60) {
    return "15";
  }

  if (timeMargin > 360000) {
    return "1";
  }
}
