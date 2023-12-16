import Sidebar from "../component/Sidebar";
import Secondcontainer from "../component/container/Secondcontainer";
import SectionContainer from "../component/container/SectionContainer";
import Navbar from "../component/nav/Navbar";

export default function Home() {
  return (
    <div>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'><Navbar/>
        <div className='flex-col justify-start'>
          <SectionContainer/>
          <Secondcontainer/>
        </div>
        </div>
        
        </div>
    </div>
  )
}
