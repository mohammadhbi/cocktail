export default function Item({idDrink, strDrink, strDrinkThumb, strGlass}) {
    return (
    <div className="w-90 flex flex-col" >
    <img src={strDrinkThumb} alt="" />
    <h1>{strDrink}</h1>
    <span> {strGlass}</span>
    <p>{idDrink}</p>
    </div>
  )
}
