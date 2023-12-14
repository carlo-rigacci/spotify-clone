
export default function Sidebar() {
  return (
    <>
      <nav className=" bg-black flex flex-col h-screen">
        <div className=" flex flex-col w-[250px]">
          <div className=" bg-slate-800 flex flex-col ">
            <div>
              <a href="" target="_blank" className="text-white">
                <i className="fa-solid fa-house "></i> Spotify
              </a>
            </div>
            <a href="" className=" text-slate-300">
              Home
            </a>
            <a href="" className=" text-slate-300">
              Search
            </a>
          </div>
          <div className=" bg-green-700 ">
            <div className="">
              <img src="" alt="" />
              <h1>Your Library</h1>
              <button>+</button>
            </div>
            <div>
              <a href="">Legal information</a>
              <a href="">Privacy Center</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookie settings</a>
              <a href="">Announcement info</a>
              <a href="">Accessibility</a>
              <a href="">Cookie Policy</a>
            </div>
            <div>
              <button>English</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
