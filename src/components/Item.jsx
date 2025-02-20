import { Link } from "react-router";

export default function Item({idDrink,strAlcholic , strDrink, strDrinkThumb, strGlass}) {
    return (
    <div className="w-90 flex flex-col" >
    <img src={strDrinkThumb} alt="" />
    <h1>{strDrink}</h1>
    <span> {strGlass}</span>
    <p>{strAlcholic}</p>
    <Link  className="bg-[#10B981] w-[78px] h-[28px] rounded-[5px] px-3  text-xl text-center " to={`/Detail/${idDrink}`} >
   <span className=" text-amber-50">Detail</span> 
    </Link>
    </div>
  )
}
