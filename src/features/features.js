export const getHour = () => {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth()+1;
    const day = current.getDate();
    const hour = current.getHours();
    const timeNow = current.toLocaleTimeString();  
    const dateNow = current.toDateString();  
    return {
        current: current,
        year: year,
        month: month,
        day: day,
        hour: hour,
        timeNow: timeNow,
        dateNow: dateNow
    }
}

export const windStrength = (speed) => {
    let strength;
    if (speed <=10){
        strength="lowWind"
    }  else if (speed >10 && speed <=20){
        strength="moderateWind"
    } else if (speed >20 && speed <=30){
        strength="strongWind"
    } else if (speed >30 && speed <=45){
        strength="stormWind"
    }else {
        strength="outOfBounds"
    }
    return strength;
}

    // convert timestamp to changes
export const timestampToTime = (stamp) => {
        const converted = new Date(stamp*1000);
        let minutes;
        if (converted.getMinutes() < 10){
            minutes = '0'+converted.getMinutes();
        } else {
            minutes = converted.getMinutes();
        }
        const time = converted.getHours()+":"+minutes;
        return time;
    }