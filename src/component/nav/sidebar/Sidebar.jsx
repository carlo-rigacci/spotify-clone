import Wrapper from '../../common/Wrapper.jsx';
import LanguageModal from '../../modal/LanguageModal.jsx';
import SidebarButtonsContainer from './Container.jsx';
import Footer from './Footer.jsx';
import LibraryControls from './LibraryControls.jsx';
import Notification from './Notification.jsx';

export default function Sidebar() {
  return (
    <nav className=' bg-black flex flex-col sticky top-0'>
      <div className='  flex flex-col w-[300px]'>
        <div className='bg-[#121212] m-2 rounded-md'>
          <div
            className='pl-4 pt-5
          pb-1'
          >
            <SidebarButtonsContainer />
          </div>
        </div>
        <Wrapper>
          <div className='flex flex-col items-center fill-[#b8b8b8] text-[#b8b8b8] transition-all pt-5 ml-2  mr-2 mb-2'>
            <LibraryControls />
            <Notification
              header='Create your first playlist'
              content="It's easy, we'll help you"
              buttonText='Create playlist'
            />
            <Notification
              header="Let's find some podcasts to follow"
              content="We'll keep you updated on new episodes"
              buttonText='Browse podcasts'
            />
            <div className='flex flex-col h-fit items-center justify-center relative top-[5px]'>
              <Footer />
              <LanguageModal />
            </div>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
}
