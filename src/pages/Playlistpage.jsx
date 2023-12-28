import Playlist from '../component/section/Playlist';

export default function Playlistpage() {
  return (
    <div>
      <div className='flex justify-between '>
        <div className='flex-col justify-start'>
          <Playlist />
        </div>
      </div>
    </div>
  );
}
