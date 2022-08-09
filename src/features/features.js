export const getHour = () => {
    const current = new Date();
    const hour = current.getHours();
    const timeNow = current.toLocaleTimeString();    
    return {
        hour: hour,
        timeNow: timeNow
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