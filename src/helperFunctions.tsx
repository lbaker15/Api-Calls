export const getTimestamp = (timestamp: number) => {
    let d1 = new Date(timestamp);
    let d2 = new Date(Date.now());
    let yearDiff = (d2.getFullYear() - d1.getFullYear())
    let monthDiff = (d2.getMonth() - d1.getMonth())
    let dayDiff = d2.getDay() - d1.getDay()
    let hourDiff = d2.getHours() - d1.getHours()
    let diff = (yearDiff > 0) ? yearDiff : (monthDiff > 0) ? monthDiff : (dayDiff) ? dayDiff : hourDiff;
    let diffStr = (yearDiff > 0) ? ' years ago' : (monthDiff > 0) ? ' months ago' : (dayDiff) ? ' days ago' : ' hours ago';
    return {diff, diffStr}
}

export function Capitalize(str:string){
    return str.charAt(0).toUpperCase() + str.slice(1);
}