
import './Navbar.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



export default Navbar

function Navbar () {
    return (           
    <nav className='Wrapper'>

        {/*pulsanti frecce */}       
            <div >
                <button className='arrow1'><IoIosArrowBack /></button>
                <button className='arrow2'><IoIosArrowForward /></button>

                {/*search */}
                
                                 
                    <input className= 'search' type='text' placeholder='Search...'></input> 
              
                
                
                                          
             
            </div>

       
      
        {/*pulsanti di accesso */}  
            <div>
                <button className='btn1'>Sign Up</button>
                <button className='btn2'>Log In</button>
            </div>
       
          
    </nav>
    );
}