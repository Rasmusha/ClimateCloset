import { useState } from "react";
import weatherService from "../services/weatherService";
import getClothingRecommendation from "../utils/clothingRecommendation";

export default function ClothingRecommendation() {
    const [address, setAddress] = useState("");
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [clothes, setClothes] = useState(null)

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setWeather(null);

    try {
        const data = await weatherService.getWeather(address);
        const getClothes = getClothingRecommendation(data.currentConditions.temp, data.currentConditions.feelslike, data.currentConditions.conditions, data.currentConditions.windspeed)
        console.log(getClothes);
        setWeather(data);
        setClothes(getClothes);
    } catch  {
        setError("Error")
    }
    }

    return (
        <div>
            <h1>Start by adding your location</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Location:</label>
                <input type="text" value={address} id="location-input" onChange={(e) => setAddress(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            
            {error}

            {weather && (
                <div>
                    <h2>{weather.resolvedAddress}</h2>
                    <p>Temp: {weather.currentConditions.temp}°C</p>
                    <p>Feels like: {weather.currentConditions.feelslike}°C</p>
                    <p>Conditions: {weather.currentConditions.conditions}</p>
                    <p>Conditions: {weather.currentConditions.windspeed * 0.2778 } m/s</p>
                </div>
            )}

            {clothes && (
                <div>
                    <h2>Recommended clothing</h2>
                    {clothes.map((clothing, index) => (
                        <div key={index}>
                            <p>Top: {clothing.top}</p>
                            <p>Bottom: {clothing.bottom}</p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    );
};