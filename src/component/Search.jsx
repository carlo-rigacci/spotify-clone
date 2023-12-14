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
    <div className="min-h-screen flex flex-col p-7" style={{backgroundColor : "rgba(18,18,18,255)"}}>
      <h1 className="text-white mb-5 text-2xl font-bold">Browse all</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {title.map((titleName, index) => {
          const randomColor = getRandomColor();
          return (
            <div
              key={index}
              className={`aspect-square rounded-lg p-5 cursor-pointer text-2xl font-bold text-white`}
              style={{ backgroundColor: randomColor }}
            >
              {titleName.titolo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
