const StormGlass = {
    api: '79b30aa0-1d58-11ed-abd9-0242ac130002-79b30afa-1d58-11ed-abd9-0242ac130002',
    apiEndpoint: 'https://api.stormglass.io/v2/',
    authorization: {
        'Authorization': '79b30aa0-1d58-11ed-abd9-0242ac130002-79b30afa-1d58-11ed-abd9-0242ac130002'
    } ,
    async getSwell(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'waveDirection,waveHeight,wavePeriod,swellHeight,swellPeriod,swellDirection'
        // 'waveDirection,waveHeight,wavePeriod,swellHeight,swellPeriod,swellDirection,secondarySwellDirection,secondarySwellHeight,secondarySwellPeriod
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';
        //'Comma separeted list of the parameters you want to retrieve, Eg swellHeight,waveHeight'

        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location+params+source;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getSecondarySwell(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'secondarySwellDirection,secondarySwellHeight,secondarySwellPeriod'
        // 'waveDirection,waveHeight,wavePeriod,swellHeight,swellPeriod,swellDirection,secondarySwellDirection,secondarySwellHeight,secondarySwellPeriod
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';
        //'Comma separeted list of the parameters you want to retrieve, Eg swellHeight,waveHeight'

        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location+params+source;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getWind(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const requestedParams = 'windDirection,windSpeed,gust'
        // windSpeed and gust are in meters/second
        const params = `&params=${requestedParams}`;
        const source = '&source=noaa';

        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location+params+source;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getTides(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'tide/sea-level/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const source= '&source=noaa'
        //optional: start, end
        const requestURL = apiEndpoint+endpoint+type+location+source;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getTidesExtremes(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'tide/extremes/';
        const type = 'point?';
        const {lat, lon} = arg;
        const location = `lat=${lat}&lng=${lon}`;
        const source= '&source=noaa'
        //optional: start, end
        const requestURL = apiEndpoint+endpoint+type+location+source;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default StormGlass;