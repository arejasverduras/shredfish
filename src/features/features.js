export const getHour = () => {
    const current = new Date();
    const hour = current.getHours();
    const timeNow = current.toLocaleTimeString();    
    return {
        hour: hour,
        timeNow: timeNow
    }
}