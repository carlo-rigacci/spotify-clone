import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./NavwithSearch.css";
import { CiSearch } from "react-icons/ci";
export default function NavwithSearch() {
  return (
    <div>
        <nav className='flex justify-between items-center sticky top-0 bg-black opacity-95'>

{/*pulsanti frecce */}       
<div className= 'flex p-3'>
    <div className='flex p-3 gap-1'>
    <button className='arrow1'><IoIosArrowBack /></button>
    <button className='arrow2'><IoIosArrowForward /></button>
    </div>
    {/*search bar*/}
    <div className="flex">
            <input  className="search p-1 uppercase text-white"/>
            <i className="p-3 text-2xl hover:scale-150"> <CiSearch /></i>
     </div>       
 
</div>


{/*pulsanti di accesso */}  
<div className='btnContainer flex items-center justify-center w-fit'>
    <Link to={"/signuppage"}>
    <button className='btn1'>Sign Up</button>
    </Link>
    <Link to={"/loginpage"}>
    <button className='btn2'>Log In</button>
    </Link>
</div>


</nav>
    </div>
  )
}
