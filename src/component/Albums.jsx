
import { useEffect, useState } from "react"
import Container from "./Container";
export default function Albums() {
    const [albumData , setAlbumData] = useState([])
    const fetcher = "https://jsonplaceholder.typicode.com/albums";
    
    useEffect(()=> {
        const getdata = async () => {
            const response = await fetch(`${fetcher}`);
            const albums = await response.json() ;
            setAlbumData(albums)
        }
        getdata();
    },[])
  return (
    <div className="flex flex-wrap bg-gray-600">
        {
            albumData.map((data)=>{
                return <div> <Container title ={data.title} description = {data.title} />
                </div>
            })
        }
    </div>
  )
}
