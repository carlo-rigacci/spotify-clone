import Sidebar from "../component/nav/Sidebar";
import Secondcontainer from "../component/container/Secondcontainer";
import SectionContainer from "../component/container/SectionContainer";
import Navbar from "../component/nav/Navbar";
import Footer from "../component/footer/Footer"

export default function Home() {
  return (
    <div style={{ backgroundColor: "rgba(18,18,18,255)" }}>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'><Navbar/>
        <div className='flex-col justify-start'>
          <SectionContainer/>
          <Secondcontainer/>
        </div>
        </div>
        
        </div>
        <Footer/>
    </div>
  )
}
