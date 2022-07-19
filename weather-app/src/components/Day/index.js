const Day = ({day, temp}) => {

    const fahrenheitConvertor = () => {
        return Math.round((temp * 9/5) + 32);
    }
    return ( 
        <>
    <p>{day}</p>
    <p>{temp}°C</p>
    <p>{fahrenheitConvertor(temp)}°</p>
    </> );
}
 
export default Day;
