import React from 'react';
import { useState } from 'react';
import Playlist from './Playlist';
export default function Container(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className='flex'>
      <div
        className='flex w-[250px] rounded-lg bg-gray-700 px-2 py-2 hover:bg-gray-500'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <div className='max-w-sm rounded overflow-hidden shadow-lg flex-col justify-center items-center'>
          <img
            className='w-[230px] h-[150px]'
            src='https://tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          {isHovered && (
            <button
              onClick={() => {
                <Playlist />;
              }}
              className=' even:none text-white bg-green-600 float-right  focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2  '
            >
              <i class='fa-solid fa-play'></i>
            </button>
          )}
          <div className='px-3 py-2'>
            <div className='font-bold text-white text-lg mb-2'>
              {props.title}
            </div>
            <p className='text-white text-[13px]'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
