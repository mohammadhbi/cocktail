import { useParams } from "react-router"
import DetailShow from "./detailshow";
export default function Detail({items}) {
 
  const{id}= useParams();
  
 return (

    <div>
      {
        items.map(item => (item.idDrink===id && <DetailShow key={item.idDrink} {...item} />)
        )
      }
    </div>
  )
}
