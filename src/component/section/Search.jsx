import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Container from "../container/Container";

export default function Search() {
  const [title, setTitle] = useState([]);
  const [keys, setKeys] = useState([]);
  let endpoint = "src/component/common/generi.json";
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
            <Link key={index} to={`/playlistpage`}>
              <div
                className={`rounded-xl aspect-square p-3 cursor-pointer text-xl md:text-xl lg:text3xl font-semibold overflow-hidden flex flex-col items-left`}
                style={{ backgroundColor: randomColor }}
              >
                <p className=" self-auto">{titleName.titolo}</p>
                <img
                  src={titleName.img}
                  alt={titleName.titolo}
                  className="transform rotate-45 scale-90 translate-x-1/3 translate-y-1/2 rounded-xl"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
