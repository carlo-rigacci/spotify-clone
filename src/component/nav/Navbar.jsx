
import './Navbar.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

import { useRef } from 'react';

export default Navbar

function Navbar () {
    return (           
    <nav className='flex justify-between items-center sticky top-0 bg-black opacity-95'>

            {/*pulsanti frecce */}       
            <div className= 'flex p-3'>
                <div className='flex p-3'>
                <button className='arrow1'><IoIosArrowBack /></button>
                <button className='arrow2'><IoIosArrowForward /></button>
                </div>
                {/*search bar*/}
                <div>
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
    );
}