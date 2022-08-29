const StormGlass = {
    apiEndpoint: 'https://api.stormglass.io/v2/',
    authorization: {
        'Authorization': process.env.REACT_APP_SG_KEY
    } ,
    async getSwell(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon, start} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'waveDirection,waveHeight,wavePeriod,swellHeight,swellPeriod,swellDirection'
        // 'waveDirection,waveHeight,wavePeriod,swellHeight,swellPeriod,swellDirection,secondarySwellDirection,secondarySwellHeight,secondarySwellPeriod
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';
        //'Comma separeted list of the parameters you want to retrieve, Eg swellHeight,waveHeight'

        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location+params+source+start;

        const headers = {
            headers : this.authorization
        }

        if (!lat || !lon ||!start){
            console.log('Swell request invalid arguments');
            return;
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error(`Swell Request Failed`);
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getSecondarySwell(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon, start} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'secondarySwellDirection,secondarySwellHeight,secondarySwellPeriod'
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';
        const requestURL = apiEndpoint+endpoint+type+location+params+source+start;

        const headers = {
            headers : this.authorization
        }
        
        if (!lat || !lon ||!start){
            console.log('SecondarySwell request invalid arguments');
            return;
        }

        try {
            const response = await fetch(requestURL, headers); 
            
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error(`Second Swell Request Failed`);
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getWind(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon, start} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'windDirection,windSpeed,gust'
        // windSpeed and gust are in meters/second
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';

        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location+params+start+source;

        const headers = {
            headers : this.authorization
        }
        
        if (!lat || !lon ||!start){
            console.log('Wind request invalid arguments');
            return;
        }

        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Wind Request Failed');
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getTides(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'tide/sea-level/';
        const type = 'point?';
        const {lat, lon, start} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const source= '&source=noaa'
 
        const requestURL = apiEndpoint+endpoint+type+location+source+start;

        const headers = {
            headers : this.authorization
        }

        if (!lat || !lon ||!start){
            console.log('Tides request invalid arguments');
            return;
        }
        
        try {
            const response = await fetch(requestURL, headers); 

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Tides Request Failed');
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getTidesExtremes(arg){
        //return tides Extremes in UTC
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'tide/extremes/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const source= '&source=noaa'
        //optional: start, end
        // const end='&end=2022-08-18T24:00:00'
        const requestURL = apiEndpoint+endpoint+type+location+source;

        const headers = {
            headers : this.authorization
        }

        if (!lat || !lon){
            console.log('Tides Extremes request invalid arguments');
            return;
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('TidesExtremes Request Failed');
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getAstronomy(arg){
        //return tides Extremes in UTC
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'astronomy/';
        const type = 'point?';
        const {lat, lon, start} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const source= '&source=noaa'
        const dateStart = `&start=${start}`
        //optional: start, end
        // const end='&end=2022-08-18T24:00:00'
        const requestURL = apiEndpoint+endpoint+type+location+source+dateStart;

        const headers = {
            headers : this.authorization
        }
        
        if (!lat || !lon || !start){
            console.log('Astronomy request invalid arguments');
            return;
        }

        try {
            const response = await fetch(requestURL, headers); 

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error ('Astronomy Request Failed')
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
};

export default StormGlass;