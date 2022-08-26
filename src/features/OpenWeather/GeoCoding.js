const GeoCoding = {
    api: 'eaf16b774db5bd5bdbc862aa052204bb',
    async getGeoCords(arg){
        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        const baseURL = 'https://api.openweathermap.org/geo/1.0/direct?q=';
        const appId = `&appid=${this.api}`;
        const params = arg;
        const reqURL = baseURL+params+appId;
        //arg = {city name},{state code},{country code}
        
        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;

            }
            throw new Error('Getting geocode failed')
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    async getWeatherFromGeo(arg){
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
        const appId = `&appid=${this.api}`;
        const {lat, lon} = arg;
        const units = 'metric';
        const params = `lat=${lat}&lon=${lon}&units=${units}`;
        // arg = lat={lat}&lon={lon}
        const reqURL = baseURL+params+appId;
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error ('GeoWeather failed');
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
        
    },
    async getAllWeatherFromGeo(arg){
        const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?';
        const appId = `&appid=${this.api}`;
        const {lat, lon} = arg;
        const units = 'metric';
        const exclude = 'minutely,alerts'
        const params = `lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}`;
        // arg = lat={lat}&lon={lon}
        const reqURL = baseURL+params+appId;
        // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}

        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error ('AllWeather Geo Data failed')
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
        
    }
}

export default GeoCoding;

