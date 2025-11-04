const events = [
    { time: "2025-11-04T08:30:00", type: "login" },
    { time: "2025-11-04T08:45:00", type: "click" },
    { time: "2025-11-04T09:00:00", type: "scroll" },
    { time: "2025-11-04T09:15:00", type: "logout" },
    { time: "2025-11-04T09:30:00", type: "login" },
    { time: "2025-11-04T09:45:00", type: "click" },
    { time: "2025-11-04T10:00:00", type: "purchase" }
];

const intervalInMS = 30 * 60 * 1000; // 30 minutes in milliseconds
const binTime = (time) => {
    const timeFrame = new Date(time);
    const timeDiff = Math.floor(timeFrame.getTime() / intervalInMS) * intervalInMS
    return timeDiff;
}

const binnedEvents = events.reduce((acc, current)=> {
    if(!acc[binTime(current.time)]){
        acc[binTime(current.time)] = {total: 0, events: []};
    }
    acc[binTime(current.time)].total += 1;
    acc[binTime(current.time)].events.push(current);
    return acc;
},{})

console.log(JSON.stringify(binnedEvents, null, 2));

console.log(binnedEvents['1762228800000']);