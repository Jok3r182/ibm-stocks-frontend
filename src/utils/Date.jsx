export function convertDateToTimestamp(date){
    const timestamp = new Date(date).getTime()
    return timestamp
}