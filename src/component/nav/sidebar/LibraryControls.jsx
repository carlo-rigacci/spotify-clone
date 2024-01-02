import Library from '../../../assets/svg/Library';
import Add from '../../../assets/svg/Add';

export default function LibraryControls() {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex gap-2 hover:fill-white hover:text-white hover:cursor-pointer'>
        <Library />
        <span>Your Library</span>
      </div>
      <div className='hover:bg-[#ffffff0b] hover:fill-white hover:cursor-pointer hover:rounded-[20px] w-7 h-7 flex justify-center items-center'>
        <Add />
      </div>
    </div>
  );
}
