
import './Navbar.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



export default Navbar

function Navbar () {
    return (           
    <nav className='Wrapper'>
       
            <div >
                <button className='arrow1'><IoIosArrowBack /></button>
                <button className='arrow2'><IoIosArrowForward /></button>
            </div>

            <div>
                <button className='btn1'>Sign Up</button>
                <button className='btn2'>Log In</button>
            </div>
       
          
    </nav>
    );
}