export default function Errorpage() {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center"
    style={{ backgroundColor: "rgba(18,18,18,255)" }}>
      <div className="">
        <img src="public/favicon.ico" alt="spotify" className="h-[100px]" />
      </div>
      <h1 className="text-[70px] font-bold">Page not found</h1>
      <h3 className="opacity-70 mb-10">We can't seem to find the page you are looking for.</h3>
      <button className="p-4 w-[100px] bg-white text-black rounded-3xl font-bold"><a href="/">Home</a></button>
      <button className="mt-10 w-[100px] rounded-3xl font-bold self-"><a href="/help">Help</a></button>
    </div>
  );
}
