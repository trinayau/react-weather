import dayjs from 'dayjs';
import BounceLoader from 'react-spinners/BounceLoader';
import { CSSProperties } from 'react';

const Description = ({description, icon, loaded}) => {
  const date = dayjs().format();
  const formattedDate = dayjs(date).format('dddd, DD MMMM YYYY');

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if(loaded !== false){
    return ( <>
        <div className="description">
        <div className="descContainer">
        <p>{formattedDate}</p>
        <p className="desc">{description}</p>
        <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
      </div>
        </div>
    </> );
  } else {
    return (<BounceLoader loading={false} color={"#ffffff"} cssOverride={override}/>);
  }
}
 
export default Description;
