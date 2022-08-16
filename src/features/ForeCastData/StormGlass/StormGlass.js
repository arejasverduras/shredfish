const StormGlass = {
    api: '79b30aa0-1d58-11ed-abd9-0242ac130002-79b30afa-1d58-11ed-abd9-0242ac130002',
    apiEndpoint: 'https://api.stormglass.io/v2/',
    authorization: {
        'Authorization': this.api
    } ,
    async getSwell(arg){
        const apiEndpoint = this.apiEndpoint;
        const endpoint = 'weather/';
        const type = 'point?';
        const {lat, lng} = arg;
        const location = `lat=${lat}&lng=${lng}`;
        const params = 'Comma separeted list of the parameters you want to retrieve, Eg swellHeight,waveHeight';
        // const start = 'timestart';
        // const end = 'Timestamp in UTC for last forecast hour - UNIX format or URL encoded ISO format.'
        const requestURL = apiEndpoint+endpoint+type+location;

        const headers = {
            headers : this.authorization
        }
        
        try {
            const response = await fetch(requestURL, headers); 
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                return jsonResponse;

            }
        } catch (error) {
            console.log(error);
        }
    },



};

export default StormGlass;