import { useState } from "react";

const Searchbar = ({setSubmitValue}) => {
    const [inputValue, setInputValue] = useState("");


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
         <button type="submit"> Submit </button>
       </form>
    </> 
    );
}
 
export default Searchbar;
