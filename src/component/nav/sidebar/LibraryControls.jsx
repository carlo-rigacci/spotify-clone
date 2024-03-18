import LibrarySVG from '../../../assets/svg/sidebar/Library';
import AddSVG from '../../../assets/svg/sidebar/Add';

export default function LibraryControls() {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex gap-2 hover:fill-white hover:text-white hover:cursor-pointer'>
        <LibrarySVG />
        <span>Your Library</span>
      </div>
      <div className='hover:bg-[#ffffff0b] hover:fill-white hover:cursor-pointer hover:rounded-full w-7 h-7 flex justify-center items-center'>
        <AddSVG />
      </div>
    </div>
  );
}
