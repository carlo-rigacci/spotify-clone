/* eslint-disable no-unused-vars */
import heart from "../assets/heart-431.svg"
import playImage from "../assets/cai.jpg"

export default function Playlist() {

  const titleSong = [
    {
      id: 1, 
      title : "Acadian Driftwood",
      artist : "jk rowline",
      Album : "none",
      Release : "guilio",
      added : "december",
      instock : true
    }, {
      id: 2, 
      title : "Ac-Cent-Tchu-Ate The Positive",
      artist : "arijit sing ",
      Album : "none",
      Release : "6 th february ",
      added : "december",
      instock : true
    }, {
      id: 3, 
      title : "Act Naturally",
      artist : "jk rowline",
      Album : "none",
      image : {playImage}, 
      Release : "december",
      added : "gennio",
      instock : true
    },{
      id: 4, 
      title : "After Hours",
      artist : "jk rowline",
      Album : "none",
      Release : "guilio",
      added : "december",
      instock : true
    }, {
      id: 5, 
      title : "Aftermath",
      artist : "arijit sing ",
      Album : "none",
      Release : "6 th february ",
      added : "december",
      instock : true
    },{
      id: 6, 
      title : "Ain't That Just Like A Woman",
      artist : "jk rowline",
      Album : "none",
      Release : "guilio",
      added : "december",
      instock : true
    }, {
      id: 7, 
      title : "Albert Flasher",
      artist : "arijit sing ",
      Album : "none",
      Release : "6 th february ",
      added : "december",
      instock : true
    }, 
  ]
  const listItems = titleSong.map((song , i) =>
  
            <tr key={i} className=" border-gray-200 dark:border-gray-700 hover:border">
                <th scope="row" className="px-3 py-1 font-medium ">
                    
                    <div className="flex">
                    <img className="mr-6 w-[60px] h-[60px]" src="https://placekitten.com/g/200/200"/>
                      <div className="flex-col ">
                      <p className=" mb-2 text-lg text-white">{song.title}</p>
                      <p className="text-white text-sm">{song.artist} </p>
                      </div>
                    </div>
                </th>
                <td className="px-6 py-4 text-white">
                    {song.Album}
                </td>
                <td className="px-6 py-4 text-white dark:bg-gray-800">
                    {song.Release}
                </td>
                <td className="px-6 py-4 text-white">
                    {song.added}
                </td>
            </tr>
            
  );
  return (
    <div className="bg-gradient-to-r from-violet-800 to-black">
        <div className="flex-col">
          <div  className="bg-[url(https://wallpapers.com/images/featured/guitar-vtvn8855v2zafbtj.jpg)] bg-center w-4/5">
            <div className="flex p-2 gap-4 text-white  ">  <button className="rounded-[50%] bg-black p-1"> pre</button> 
            <button className="rounded-[50%] bg-black p-1"> next</button> </div>
            <p className="text-sm">playlist</p>
            <h1 className="text-3xl text-white p-2 ml-4">RARAR Podcasters Italia </h1>
            <p className="text-sm text-white p-2 ml-1">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque voluptates numquam perferendis </p>
            <div className="flex">
            <button type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play</button> <img className="h-[34px] ml-4 hover:blur-sm" src= {heart}/>
                <p className="text-lg ml-5 text-white hover:cursor-pointer">...</p>
            </div>
          </div>
        <div className="flex">
          <table  className="w-4/5 text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
            
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="text-white">
                <th scope="col" className="px-6 py-3  dark:bg-gray-800">
                Title
                </th>
                <th scope="col" className="px-6 py-3 ">
                Album
                </th>
                <th scope="col" className="px-6 py-3">
                Release Date
                </th>
                <th scope="col" className="px-6 py-3  dark:bg-gray-800">
                Data added
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className=" border-gray-200 dark:border-gray-700 text-white hover:border">
                <th scope="row" className="px-3 py-1 font-medium ">
                    
                    <div className="flex">
                    <img className="mr-6 w-[60px] h-[60px]" src={playImage}/>
                      <div className="flex-col text-white">
                      <p className="text-white mb-2 text-lg">Hipes dont lie</p>
                      <p className="text-white text-sm">With J. Cole, Quavo, Ty Dollar </p>
                      </div>
                    </div>
                </th>
                <td className="px-6 py-4 ">
                    None
                </td>
                <td className="px-6 py-4  dark:bg-gray-800">
                    December
                </td>
                <td className="px-6 py-4 ">
                    December
                </td>
            </tr>
            </tbody>
            <tbody>{listItems}</tbody>
    </table>
  </div>
  
  <div>
  </div>
        </div>
    </div>
  )
}
