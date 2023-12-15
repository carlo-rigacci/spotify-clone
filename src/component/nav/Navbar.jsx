
import './Navbar.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



export default Navbar

function Navbar () {
    return (           
    <nav className='Wrapper'>

        {/*pulsanti frecce */}       
            <div >
                <button className='arrow1'><IoIosArrowBack /></button>
                <button className='arrow2'><IoIosArrowForward /></button>
            </div>
      
        {/*pulsanti di accesso */}  
            <div>
                <button className='btn1'>Sign Up</button>
                <button className='btn2'>Log In</button>
            </div>
       
          
    </nav>
    );
}