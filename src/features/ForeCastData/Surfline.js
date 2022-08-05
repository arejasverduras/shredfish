const Surfline = {
    // fetch request with data
    // https://services.surfline.com/kbyg/spots/forecasts/{type}?{params}
    //https://services.surfline.com/kbyg/spots/forecasts/wave?{params}
    async getSpotData(type, parameters) {
        const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/';
        const params = `${type}?${parameters}`
        const reqURL = baseURL+params;

        console.log(reqURL);


        const result = await fetch(reqURL,
            {headers: {}}
            ).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.data){
                    console.log('this happens');
                    return [];
                }
                //forecastLocation
                //lat
                //long
                return jsonResponse.associated;
            });
        return result;

    }
};

export default Surfline;