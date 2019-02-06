export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const millis = date.getTime()
    return millis.toString()
}