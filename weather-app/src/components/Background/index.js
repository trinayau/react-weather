import {useState, useEffect} from 'react';
import axios from 'axios';

const Background = () => {

    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [city, setCity] = useState('London');


    useEffect(() => {
        async function searchApi(searchString) {
            try{
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)].urls.raw;
                console.log(randomPhoto)
                setBackgroundUrl(randomPhoto);
                
            }catch(err){
                console.error(err)
            }
        }
        searchApi(city);
    }, [city]);

    const divStyle = {
        color: 'blue',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85)), url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -100,
        width: "100%",
        height: "100%"
      };
    return ( <>
          <div style={divStyle}>
    </div>
    </> );
}
 
export default Background;
