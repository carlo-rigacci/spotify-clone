import Playlist from "../component/Playlist";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/nav/Navbar";

export default function Playlistpage() {
  return (
    <div>
        <div className='flex justify-between '>
          <div className=" w-[300px]"><Sidebar /></div>
        <div className='w-[100%]'><Navbar/>
        <div className='flex-col justify-start'>
          <Playlist/>
        </div>
        </div>
        
        </div>
    </div>
  )
}
