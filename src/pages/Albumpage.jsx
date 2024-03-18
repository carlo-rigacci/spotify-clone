import Albums from '../component/section/Albums';
import { Link } from 'react-router-dom';

export default function Albumpage() {
  return (
    <div>
      <div className='flex justify-between '>
        <div className='flex-col justify-start'>
          <div
            className={` bg-[url(https://source.unsplash.com/800x480/?rock)]  p-6 mt-4 flex items-center justify-center rounded-lg h-[200px] w-[790px] bg-center bg-no-repeat opacity-80 mb-4`}
          >
            <hi className=' text-7xl first-letter:text-9xl  text-white font-serif drop-shadow-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]'>
              ALBUM
            </hi>
          </div>
          <div className='flex justify-between w-[790px]'>
            <div className='flex font-sans text-lg hover:drop-shadow-2xl text-white p-3 gap-5'>
              <p>For you </p>
              <p> All events</p>
            </div>
            <div className=' cursor-pointer p-3'>
              <i class='fa fa-bars'></i>
            </div>
          </div>
        </div>

        <Albums />
      </div>
    </div>
  );
}
