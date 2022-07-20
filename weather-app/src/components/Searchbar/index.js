import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";

const Searchbar = ({setSubmitValue, city, setWeatherData}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        function handleResponse(response) {
            setWeatherData({
              ready: true,
              coord: response.data.coord,
              temperature: Math.round(response.data.main.temp),
              humidity: response.data.main.humidity,
              date: response.data.dt * 1000,
              description: response.data.weather[0].description,
              icon: response.data.weather[0].icon,
              wind: response.data.wind.speed,
              city: response.data.name,
            });
          }

        const handleCityQuery = async () => {
            const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
            let units = "metric";
            let finalCity;

            // openweather uses wrong country codes if you search just these cities
            if (city === "venice" | city === "italy") {
                finalCity = city.concat(", IT");
            } else if (city === "france"){
                finalCity = city.concat(", FR");
            } else if (city === "poland"){
                finalCity = city.concat(", PL");
            } else {
                finalCity = city
            }
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&appid=${apiKey}&units=${units}`;
        
            const response = await axios.get(apiUrl);
            handleResponse(response);
            }

        handleCityQuery(city);
    }, [city, setWeatherData]);

    function handleInput(e) {
        const newValue = e.target.value;
        setInputValue(newValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitValue(inputValue)
        setInputValue("");
    }
    return ( <>
        <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleInput} value={inputValue}/>
         <button type="submit"> Search </button>
       </form>
    </> 
    );
}
 
export default Searchbar;
