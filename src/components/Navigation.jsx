import { NavLink } from "react-router"
import { listStyle } from "./shared/menubarStayle"
import { ulList } from "./shared/menubarStayle";
export default function Navigation() {
  return (
    <nav className="flex justify-around">
        <NavLink to="/">
        <h1 className="text-emerald-500 font-bold text-[44px] leading-[48px] tracking-[2px] font-segoe pl-5">MixMaster</h1>
        </NavLink>
      <ul className="flex gap-4.5">
        <li className={<listStyle/>}>
         <NavLink to="/home">
         Home
          </NavLink>  
        </li>
        <li className={<listStyle/>}>
          <NavLink to="/About">
          About
          </NavLink>
        </li>
        <li className={<listStyle/>}>
          <NavLink>
          Newsletter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
