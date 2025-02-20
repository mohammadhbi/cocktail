import { Link } from "react-router"
export default function DetailShow({idDrink, strDrinkThumb, strDrink, strCategory, strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3, strInstructions}) {
    return (
      <div className="flex justify-center flex-col gap-0">
        <button  className="mr-9"><Link to="/" className=" bg-[#10B981] w-[78px] h-[28px] rounded-[5px] px-3  text-xl text-center"> <span className="text-amber-50">back Home</span></Link></button>
    <div className="flex w-full px-20 mt-15 m-auto ">
       <div>
        <img src={strDrinkThumb} alt="" className="w-300" />
       </div>
<div className="text-[16px] leading-[20px] tracking-[2px] font-bold font-segoe m-1 flex flex-col gap-3 ">
<p className="px-0.5"><span className="w-20 h-7 gap-2.5 rounded-md px-2 py-1 bg-[#6EE7B7] text-[#047857] mt-1"> Name:</span>{strDrink}</p>
<p><span className="w-20 h-7 gap-2.5 rounded-md px-2 py-1 bg-[#6EE7B7] text-[#047857] mt-1">category: </span>{strCategory}</p>
<p><span className="w-20 h-7 gap-2.5 rounded-md px-2 py-1 bg-[#6EE7B7] text-[#047857] mt-1">Info:</span> {strGlass}</p>
<p><span className="w-20 h-7 gap-2.5 rounded-md px-2 py-1 bg-[#6EE7B7] text-[#047857] mt-1">Ingredients :</span>{strIngredient1}{strIngredient2}{strIngredient3}</p>
<p><span className="w-20 h-7 gap-2.5 rounded-md px-2 py-1 bg-[#6EE7B7] text-[#047857] mt-1">Instructions :</span>{strInstructions}</p>
</div>
     
    </div>
    </div>
  )
}
