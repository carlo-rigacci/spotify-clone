import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SectionContainer() {

  
  const titleSong = [
    {
      "id": 1,
      "category": "Rock",
      "description": "Energetic and powerful guitar-driven music.",
      "img": "https://source.unsplash.com/300x200/?rock"
    },
    {
      "id": 2,
      "category": "Pop",
      "description": "Catchy and melodic music with a focus on",
      "img": "https://source.unsplash.com/300x200/?pop"
    },
    {
      "id": 3,
      "category": "Hip-Hop",
      "description": "Rhythmic and lyrically expressive genre",
      "img": "https://source.unsplash.com/300x200/?hip-hop"
    },
    {
      "id": 4,
      "category": "Electronic",
      "description": "Innovative and synthesized sounds creating a .",
      "img": "https://source.unsplash.com/300x200/?electronic"
    },
    {
      "id": 5,
      "category": "Jazz",
      "description": "Sophisticated and improvisational music known for .",
      "img": "https://source.unsplash.com/300x200/?jazz"
    },
    {
      "id": 6,
      "category": "Classical",
      "description": "Orchestral and timeless ",
      "img": "https://source.unsplash.com/300x200/?classical"
    }
  ]
  
  const listItems = titleSong.map((song , i) =>{
    return <div  className='flex' key={i}>
       
    <div>
      <div className='max-w-sm ml-2 hover:bg-slate-950 rounded overflow-hidden shadow-lg flex-col justify-center items-center'>
        <img
          className='w-[280px] h-[150px] px-1 py-1 lg:items-center'
          src={song.img}
          alt='Sunset in the mountains'
        />
        <div className='px-3 py-2'>
          <div className='font-bold text-white text-lg mb-2'>
            {song.category}
          </div>
          <p className='text-white text-[13px]'>{song.description}</p>
        </div>
      </div>
    </div>
  </div>

  })
  return (
    <div>
        <h1 className="font-bold text-2xl p-3 text-white text-mono hover:underline">Spotify Playlist</h1>
        
        <Link to={"/albumpage"}>
        <div className='flex'>
       {listItems}
       
       </div>
       </Link>
    </div>
  )
}
