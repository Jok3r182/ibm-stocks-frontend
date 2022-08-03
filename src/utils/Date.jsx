export function convertDateToTimestamp(date){
    const timestamp = new Date(date).getTime()
    return timestamp
}

export function dateManipulation(date, method, value){
  let startDate = date? new Date(date): new Date();
  startDate.setDate(method === 'sum'? startDate.getDate() + value : startDate.getDate()- value);
  return startDate
}

export function convertToSeconds(date){
  return Math.ceil(date/1000)
}