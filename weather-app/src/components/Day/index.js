import dayjs from "dayjs";
import WeatherIcon from "../WeatherIcon";

const Day = (forecastData) => {
    const min = Math.round(forecastData.data.temp.min);
    const max = Math.round(forecastData.data.temp.max);
    const icon = forecastData.data.weather[0].icon;
    const date = dayjs(forecastData.data.dt * 1000).format("ddd");
    
    return ( 
        <div className="day-forecast" style={{ display:"flex", flexDirection:"column", height: "auto" }}>
    <p style={{ fontWeight:"600"}}>{date}</p>
    <WeatherIcon code={icon} size={150}/>

    <p>{min}° | {max}° </p>
    </div> );
}
 
export default Day;
