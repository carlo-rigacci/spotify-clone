import Albums from "../component/section/Albums";
import Sidebar from "../component/nav/Sidebar";
import Navbar from "../component/nav/Navbar";
import { Link } from "react-router-dom";

export default function Albumpage() {
  return (
    <div>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'><Navbar/>
        <div className='flex-col justify-start'>
          <Albums/>
        </div>
        </div>
        
        </div>
    </div>
  )
}
