import {Day} from '../../components'
const Forecast = () => {
    return ( 
    <div className="forecast">
        {/* weather forecast */}
        <Day day='Mon' temp='27'/>
        <Day day='Tue' temp='23'/>
        <Day day='Wed' temp='24'/>
        <Day day='Thu' temp='20'/>
        <Day day='Fri' temp='20'/>
    </div> );
}
 
export default Forecast;
