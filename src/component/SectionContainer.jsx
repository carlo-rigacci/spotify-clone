import React from 'react';
export default function SectionContainer(props) {

  return (
    <div className='flex'>
        <div className=" h-fit p-4 text-white " style={{ backgroundColor: "rgba(18,18,18,0.7)" }}>
      <div
        
      >
        <div className='max-w-sm rounded overflow-hidden shadow-lg flex-col justify-center items-center'>
          <img
            className='w-[230px] h-[150px]'
            src='https://tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          
          <div className='px-3 py-2'>
            <div className='font-bold text-white text-lg mb-2'>
              {props.title}
            </div>
            <p className='text-white text-[13px]'>{props.description}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
