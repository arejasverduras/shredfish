const Surfline = {
    // fetch request with data
    // https://services.surfline.com/kbyg/spots/forecasts/{type}?{params}
    //https://services.surfline.com/kbyg/spots/forecasts/wave?{params}
    async loadSpotInfo(arg){
        const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/';
        const params = arg
        const reqURL = baseURL+params;
        
        try {
            const response = await fetch(reqURL); 
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getDataFromAPI(arg){
        //https://quiet-hamlet-33642.herokuapp.com/
        const baseURL = 'https://services.surfline.com/kbyg/spots/forecasts/';
        const params = arg
        const reqURL = baseURL+params;
        
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
};

export default Surfline;