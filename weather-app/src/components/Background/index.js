import {useState, useEffect} from 'react';
import axios from 'axios';

const Background = ({city}) => {

    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [photographer, setPhotographer] = useState(null);
    const [photographerUrl, setPhotographerUrl] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [photoLocation, setPhotoLocation] = useState('');


    useEffect(() => {
        async function searchApi(city) {
            try{
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)];
                setBackgroundUrl(randomPhoto.urls.regular);
                setPhotographer(randomPhoto.user.name);
                setPhotographerUrl(randomPhoto.user.links.html.concat('?utm_source=trina_react_weather&utm_medium=referral'));
                setPhotoUrl(randomPhoto.links.html.concat('?utm_source=trina_react_weather&utm_medium=referral'));
                //get photo location
                const location = await axios.get(`https://api.unsplash.com/photos/${randomPhoto.id}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
                setPhotoLocation(location.data.location.title)
                
            }catch(err){
                console.error(err)
            }
        }
        searchApi(city);
    }, [city]);

    let divStyle;

    if (backgroundUrl !== ''){
      divStyle = {
        color: 'blue',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85)), url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -100,
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
      };
    } else {
        divStyle = {
            color: 'blue',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1535722339661-7f22185bc7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -100,
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
          };

    }
    return ( <>
          <div style={divStyle}>
    </div>
    <div className='unsplash-description'>
        <p>{photoLocation}</p>
        <p><a href={photoUrl ? photoUrl : 'https://unsplash.com/photos/u4uGoUBxmCE?utm_source=trina_react_weather&utm_medium=referral'} target="_blank" rel='noreferrer'>Photo</a> / <a href={photographerUrl ? photographerUrl : 'https://unsplash.com/@wildlittlethingsphoto?utm_source=trina_react_weather&utm_medium=referral'} target="_blank" rel='noreferrer'>{photographer ? photographer : 'Helena Lopes'}</a> / <a href='https://unsplash.com/?utm_source=trina_react_weather&utm_medium=referral' target="_blank" rel='noreferrer'>Unsplash</a></p>
    </div>
    </> );
}
 
export default Background;
