import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";

const Searchbar = ({setSubmitValue, city, setTemperature, setDescription, setIcon, setLoaded,setDate, setLocation}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const handleCityQuery = async () => {
            setLoaded(true);
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
            setTemperature(Math.round(response.data.main.temp));
            const desc = response.data.weather[0].description;
            setDescription(desc);
            setIcon(response.data.weather[0].icon);
            setLocation({lon: response.data.coord.lon, lat: response.data.coord.lat});
            setDate(response.data.dt * 1000)

            }

        handleCityQuery(city);
    }, [city, setTemperature, setDescription, setIcon, setLoaded]);

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
