import { Link } from 'react-router-dom';
import Wrapper from '../common/Wrapper.jsx';
import SvgSwitcher from '../Svg/SvgSwitcher.jsx';
import LanguageModal from '../modal/LanguageModal.jsx';
import Logo from '../../assets/svg/Logo.jsx';
import Library from '../../assets/svg/Library.jsx';
import Add from '../../assets/svg/Add.jsx';

export default function Sidebar() {
  return (
    <nav className=' bg-black flex flex-col sticky top-0'>
      <div className='  flex flex-col w-[300px]'>
        <div className=' bg-[#121212] flex flex-col m-2 rounded-md gap-3'>
          <div
            className=' pl-4 pt-5
          pb-1'
          >
            <Link to={'/'}>
              <p className='text-white '>
                <Logo />
              </p>
            </Link>
          </div>
          <div className=' flex flex-col gap-3 pl-4 pb-4'>
            <p className='text-[#b8b8b8]  hover:text-[#f5f5f5] focus:text-[#fff] transition-all'>
              <Link to={'/'}>
                <i className=' fa-solid fa-house mr-3 text-[20px] active:text-white'></i>{' '}
                Home
              </Link>
            </p>

            <div className=' text-[#b8b8b8]  hover:text-[#f5f5f5]  transition-all'>
              <Link to={'/searchpage'}>
                <SvgSwitcher />
              </Link>
            </div>
          </div>
        </div>
        <Wrapper>
          <div className='flex flex-col items-center fill-[#b8b8b8] text-[#b8b8b8] transition-all pt-5 ml-2  mr-2 mb-2'>
            <div className='flex items-center hover:fill-white hover:text-white'>
              <button className='flex flex-row gap-3'>
                <span>
                  <Library />
                </span>
                Your Library
              </button>
              <button className='flex flex-row gap-3 w-[20px] ml-[100px]'>
                <span className='hover:bg-[#222222] hover:rounded-l'>
                  <Add />
                </span>
              </button>
            </div>
            <div
              className='playlist w-full mt-10 p-4 rounded-xl text-white'
              style={{ backgroundColor: 'rgba(36,36,36,255)' }}
            >
              <h1 className=' mb-2'>Create your first playlist</h1>
              <h3 className='mb-6'>It's easy, we'll help you</h3>
              <button className='text-black bg-white p-3 rounded-full  hover:scale-110 text-md font-bold'>
                Create playlist
              </button>
            </div>
            <div
              className='playlist w-full mt-10 p-4 rounded-xl text-white'
              style={{ backgroundColor: 'rgba(36,36,36,255)' }}
            >
              <h1 className=' mb-2'>Let's find some podcasts to follow</h1>
              <h3 className='mb-6'>We'll keep you updated on new episodes</h3>
              <button className='text-black bg-white p-3 rounded-full hover:scale-110 text-md font-bold'>
                Browse podcasts
              </button>
            </div>
            <div className='flex flex-col h-fit items-center justify-center relative top-[5px]'>
              <footer className='flex flex-col h-fit items-center bg-[#121212] p-2 w-[280px]'>
                <div className='grid grid-cols-2 gap-2 text-xs'>
                  <p className='underline cursor-pointer'>Legal information</p>
                  <p className='underline cursor-pointer'>Privacy Center</p>
                  <p className='underline cursor-pointer'>Privacy Policy</p>
                  <p className='underline cursor-pointer'>Cookie settings</p>
                  <p className='underline cursor-pointer'>Announcement info</p>
                  <p className='underline cursor-pointer'>Accessibility</p>
                  <p className='underline cursor-pointer'>Cookie Policy</p>
                </div>
                <LanguageModal />
              </footer>
            </div>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
}
