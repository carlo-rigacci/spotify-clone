import { Link } from "react-router-dom";

export default function Secondcontainer() {
  const sleepList = [
    {
      img: "https://i1.sndcdn.com/artworks-jmeJsEx2mt5gRcmt-GQ1y5w-t500x500.jpg",
      title: "Tranquil Serenity",
      description:
        "A soothing instrumental track with gentle melodies, perfect for relaxation and meditation.",
    },
    {
      img: "https://www.healingwavess.com/cdn/shop/articles/Sefy_Soothe_Your_Mind__Body_586f2d47-dd2c-4d2e-ae1d-8c89537552d1.png?v=1686665424&width=1100",
      title: "Nature's Harmony",
      description:
        "Immerse yourself in the calming sounds of nature blended with serene music, creating a peaceful atmosphere.",
    },
  ];

  const listItems = sleepList.map((song, i) => (
    <div key={i} className="max-w-sm w-[300px] ml-2 rounded overflow-hidden shadow-lg flex-col justify-center items-center hover:bg-slate-950">
      <img
        className="w-[300px] h-[150px] bg-bottom"
        src={song.img}
        alt="Sunset in the mountains"
      />
      <div className="px-3 py-2">
        <div className="font-bold text-white text-lg mb-2">
          {song.title}
        </div>
        <p className="text-white text-[13px]">{song.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="font-bold text-3xl p-3 text-white text-mono hover:underline">
        Sleep
      </h1>

      <Link to="/playlistpage">
        <div className="flex">{listItems}</div>
      </Link>
    </div>
  );
}