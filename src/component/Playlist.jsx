/* eslint-disable no-unused-vars */
import playImage from "../assets/SWHT.jpg"
export default function Playlist() {
  const titleSong = [
    {
      id: 1, 
      title : "hips dont lie",
      Album : "none",
      Release : "december",
      added : "december",
      instock : true
    }, {
      id: 1, 
      title : "hips dont lie",
      Album : "none",
      Release : "december",
      added : "december",
      instock : true
    }, {
      id: 1, 
      title : "hips dont lie",
      Album : "none",
      Release : "december",
      added : "december",
      instock : true
    }
  ]

  return (
    <div>
        <div className="flex-col">
          <img className="bg-cover bg-no-repeat bg-bottom w-4/5 h-40" src={playImage} />
        <div className="flex">
          <table  className="w-4/5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Title
                </th>
                <th scope="col" className="px-6 py-3">
                Album
                </th>
                <th scope="col" className="px-6 py-3">
                Release Date
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Data added
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-3 py-1 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                    
                    <div className="flex">
                    <img className="mr-6 w-[60px] h-[60px]" src="https://placekitten.com/g/200/200"/>
                      <div className="flex-col">
                      <p className="text-gray-600 mb-2 text-lg">Hipes dont lie</p>
                      <p className="text-gray-600 text-sm">With J. Cole, Quavo, Ty Dollar </p>
                      </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    None
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    December
                </td>
                <td className="px-6 py-4">
                    December
                </td>
            </tr>
            </tbody>
            
      
    {
       titleSong.map((e, i)=> {
        <tr key={i}> 
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-3 py-1 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                    
                    <div className="flex">
                    <img className="mr-6 w-[60px] h-[60px]" src="https://placekitten.com/g/200/200"/>
                      <div className="flex-col">
                      <p className="text-gray-600 mb-2 text-lg">{e.title}</p>
                      <p className="text-gray-600 text-sm">{e.Album}</p>
                      </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                   {e.added}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {e.Release}
                </td>
                <td className="px-6 py-4">
                    {e.id}
                </td>
            </tr>
            </tbody>
        </tr>
      })
    }
    </table>
  </div>
        </div>
    </div>
  )
}
