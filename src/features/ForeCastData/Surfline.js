const Surfline = {
    // fetch request with data
    // https://services.surfline.com/kbyg/spots/forecasts/{type}?{params}
    //https://services.surfline.com/kbyg/spots/forecasts/wave?{params}

    async getData(type, parameters){
        const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/';
        const params = `${type}?${parameters}`
        const reqURL = baseURL+params;
        
        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                //code tot execute with response
                // console.log(jsonResponse);
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },



    async getSpotData(type, parameters) {
        const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/';
        const params = `${type}?${parameters}`
        const reqURL = baseURL+params;

        console.log(reqURL);


        const result = await fetch(reqURL,
            {headers: {}}
            ).then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    console.log('bad request');
                    return [];
                }
            }).then(jsonResponse => {
                if (!jsonResponse.data){
                    console.log('this happens');
                    return ['bla','nothing'];
                }
                //forecastLocation
                //lat
                //long
                return jsonResponse.map(info => (
                    {
                        associated: info
                    }
                ))
                ;
            });
        return result;

    }
};

export default Surfline;