import { useState,useEffect } from "react";
import Section from "../component/Section";
import { Link } from "react-router-dom";
export default function CategoryPage() {
  const [AlbumData, setAlbumData] = useState([]);
  const fetcher = "https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch(`${fetcher}`);
      const albums = await response.json();
      setAlbumData(albums);
      console.log(albums)
    };
    getdata();
  }, []);

  const getRandomColor = () => {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.random() * 0.5 + 0.1})`;
    return color;
  };

  const randomColor = getRandomColor();

  return (
    <div className="h-[60vh] md:h-60" style={{ background: randomColor }}>
  <h1 className="p-20 text-black font-extrabold text-2xl md:text-4xl h-[15vh] md:h-60 w-[80vw] md:w-[50vw] text-center">
    Category name
  </h1>
  {AlbumData.map((data, index) => (
    <div key={index}>
      <Section>
        <Link to={`/Container`}>{data.title}</Link>
      </Section>
    </div>
  ))}
</div>

  );
}
