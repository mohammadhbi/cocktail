import illustration from "../assets/illustration.svg"
import { Link } from "react-router"
export default function NotFound() {
  return (
    <div className="flex flex-col  justify-center items-center gap-5 ">
<img src={illustration} alt="" className="w-150"/>   
<h6 className="text-[40px] leading-[40px] tracking-[1px] text-center font-segoe font-normal"> ohh!</h6>
<p className=" text-gray-500 text-[16px] leading-[32px] tracking-[0px] text-center font-segoe font-normal">We can't seem to find page you are looking for.</p>
<Link to="/home" className="text-[16px] leading-[32px] tracking-[0px] text-center font-segoe font-normal"><span className=" text-emerald-500">Back Home</span></Link>
    </div>
  )
}
