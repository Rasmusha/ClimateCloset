import axios from 'axios'

const API_KEY = import.meta.env.VITE_VISUALCROSSING_API_KEY;

const getWeather = async(location) => {
    try {
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`, 
        {
        params: {
            unitGroup: "metric",
            key: API_KEY,
            contentType: "json"
        },
    }
    );
    return response.data;
    } catch (error) {
        console.log("Error");
        throw error
    }
}

export default { getWeather };