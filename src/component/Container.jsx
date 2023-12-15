import React from 'react'
import { Link } from 'react-router-dom'
export default function Container() {
  return (
    <div className="flex w-[250px] bg-gray-700 px-3 py-3">
        <Link to="/Playlist" />
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex-col justify-center items-center">
        <img className="w-[230px] h-[150px]" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
            <div className="font-bold text-white text-lg mb-2">The Coldest Sunset</div>
            <p className="text-white text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
        </div>
    </div>
</div>
  )
}
