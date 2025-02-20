import { useEffect, useState } from "react"
import axios from "axios"
import Item from "../components/Item"
import Form from "../components/shared/Form"
import NotFoundcoc from "./NotFoundcoc"
import Spinner from "./Spinner"
export default function Home({items,setItems, loader, setLoader}) {
  // const [items, setItems] =useState([])
 const [error,setError]= useState(false)
//   const getDataFromApi =async ()=>{
// try {
//   const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
// const response = await axios.get(url);
// const result = response.data.drinks ;
// // console.log(result);
// setItems(result)

// } catch (error) {
//   console.log(error)
// }
//   }
  useEffect(()=>{
    // getDataFromApi()
  }, [])
  return (
    
    <div>
      <Form setItems={setItems} loader={loader} setLoader={setLoader} setError={setError} />
      {
        error && <h1>there was an error...</h1>
      }
      {
        !items ?(
         loader ? (<Spinner/>):(<NotFoundcoc/>)
        ) :( <div className="flex flex-wrap gap-10 mt-2 m-auto justify-center">
          {items.map((item)=>{
            return <Item key={item.idDrink} {...item} />
          })}
    
          </div>
         ) 
      }
      
    </div>
  )
}
