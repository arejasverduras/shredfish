const GeoCoding = {
    api: 'eaf16b774db5bd5bdbc862aa052204bb',
    async getGeoCords(arg){
        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        const baseURL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
        const appId = `&appid=${this.api}`;
        const params = arg
        const reqURL = baseURL+params+appId;
        //arg = {city name},{state code},{country code}
        
        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default GeoCoding;

