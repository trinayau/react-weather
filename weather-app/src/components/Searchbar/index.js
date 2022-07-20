import { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = ({setSubmitValue, city, setTemperature, setDescription, setIcon, setLoaded}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const handleCityQuery = async () => {
            setLoaded(true);
            const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
            let units = "metric";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        
            const response = await axios.get(apiUrl);
            console.log(response.data, 'axios data');
            setTemperature(Math.round(response.data.main.temp));
            const desc = response.data.weather[0].description;
            setDescription(desc);
            setIcon(response.data.weather[0].icon);

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
         <button type="submit"> Search City </button>
       </form>
    </> 
    );
}
 
export default Searchbar;
