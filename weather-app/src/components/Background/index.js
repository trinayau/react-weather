import {useState, useEffect} from 'react';
import axios from 'axios';

const Background = ({city}) => {

    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photographerUrl, setPhotographerUrl] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [photoLocation, setPhotoLocation] = useState('');


    useEffect(() => {
        async function searchApi(city) {
            try{
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)];
                console.log(randomPhoto)
                setBackgroundUrl(randomPhoto.urls.regular);
                setPhotographer(randomPhoto.user.name);
                setPhotographerUrl(randomPhoto.user.links.html);
                setPhotoUrl(randomPhoto.links.html);
                //get photo location
                const location = await axios.get(`https://api.unsplash.com/photos/${randomPhoto.id}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
                setPhotoLocation(location.data.location.title)
                
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
    <div className='unsplash-description'>
        <p>{photoLocation}</p>
        <p><a href={photoUrl} target="_blank" rel='noreferrer'>Photo</a> / <a href={photographerUrl}>{photographer}</a> / <a href='https://unsplash.com/'>Unsplash</a></p>
    </div>
    </> );
}
 
export default Background;
