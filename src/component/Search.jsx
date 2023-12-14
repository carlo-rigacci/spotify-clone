import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Search() {
  const [title, setTitle] = useState([]);

  let endpoint = "src/component/generi.json";
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setTitle([...res.data.generi]);
    });
  }, []);

  const getRandomColor = () => {
    const letters = "89ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  };

  return (
    <div
      className="min-h-screen flex flex-col p-7 relative"
      style={{ backgroundColor: "rgba(18,18,18,255)" }}
    >
      <h1 className="text-white mb-5 text-2xl font-bold">Browse all</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {title.map((titleName, index) => {
          const randomColor = getRandomColor();
          return (
            <div
              key={index}
              className={` rounded-xl aspect-squarerounded-lg p-5 cursor-pointer text-3xl  overflow-hidden md:text-4xl font-semibold lg:text-3xl`}
              style={{ backgroundColor: randomColor }}
            >
              {titleName.titolo}
              <img
                src={titleName.img}
                alt={titleName.titolo}
                className="transform rotate-45 scale-90 translate-x-1/3 translate-y-1/2 rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
