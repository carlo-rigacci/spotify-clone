import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Search() {
  const [title, setTitle] = useState([]);

  let endpoint = "src/component/generi.json";
  useEffect(() => {
    Axios.get(endpoint)
      .then((res) => {
        setTitle([...res.data.generi]);
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col p-7">
      <h1 className="text-white mb-5 text-2xl">Browse all</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {title.map((titleName, index) => {
          return (
            <div
              key={index}
              className="aspect-square bg-red-300 rounded-lg p-5"
            >
              {titleName.titolo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
