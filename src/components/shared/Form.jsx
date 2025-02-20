import axios from "axios";
import { useState } from "react"

export default function Form({setItems , loader, setLoader ,setError}) {
    const [input, setInput]= useState("")
   
    const formHandler = async (e) =>{
      setLoader(true);
      setItems(null);
        e.preventDefault();
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        setLoader(false);
        const result =response.data ;
        setItems(result.drinks) 
        setError(false);
      } catch (error) {
        setLoader(false);
        setItems([]);
        setError(true);
      }       
     
    }
  return (
    <form onSubmit={formHandler} className="m-auto flex justify-center pb-7 gap-2">
      <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} className="bg-[#E2E8F0] border-amber-950 px-4 py-2 rounded "/>
      <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded">search</button>
    </form>
  )
}
