export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const millis = date.getMilliseconds()
    return millis.toString()
}