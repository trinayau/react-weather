import axios from "axios";
import { useEffect, useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    useEffect(() => {
        async function getQuote() {
        try {
            const result = await axios.get('https://stoicquotesapi.com/v1/api/quotes/random')
            setQuote(result.data.body)
            setAuthor(result.data.author)
        }
        catch (err) {
            console.error(err)
        }
    }
    getQuote()
    }, [])

    return ( 
        <div className="quote">
        {quote && <p style={{padding: "20px"}}>"{quote}"</p>} {author && <p className="author">- {author}</p>}
        </div>
     );
}
 
export default Quote;
