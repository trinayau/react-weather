import {Description} from '../../components'

const Info = ({city}) => {

    return ( 
    <div className="info">
        <p className="city">{city}</p>
        <div className="temp-container">
        <span className="temp">40</span><span style={{ fontSize: "25px" }}>°C</span>
        <Description/>
        </div>
    </div> );
}
 
export default Info;
