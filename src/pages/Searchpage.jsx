import Search from "../component/section/Search";
import Sidebar from "../component/nav/Sidebar";
import Navbar from "../component/nav/Navbar";

import { CiSearch } from "react-icons/ci";
export default function Searchpage() {
   
  return (
    <div>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'>
        <div >
              
          <Navbar/>
        <div className='flex-col justify-start'>
          <Search/>
        </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}
