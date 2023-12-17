import Search from "../component/section/Search";
import Sidebar from "../component/nav/Sidebar";
import { Link } from "react-router-dom";
import NavwithSearch from "../component/common/NavwithSearch";
export default function Searchpage() {
   
  return (
    <div>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'>
          <NavwithSearch/>
        <div >
        <div className='flex-col justify-start'>
          <Search/>
        </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}
