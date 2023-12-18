import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
export default function NavwithSearch() {
  return (
    <div className="sticky  top-0 z-50">
      <nav className="flex justify-between items-center top-0 bg-black opacity-95">
        {/*pulsanti frecce */}
        <div className="flex p-3">
          <div className="flex p-3 gap-1">
            <button className="arrow1">
              <IoIosArrowBack />
            </button>
            <button className="arrow2">
              <IoIosArrowForward />
            </button>
          </div>
          {/*search bar*/}
          <div className="flex relative">
            <input
              className="search p-1 pl-8 text-white rounded-3xl"
              placeholder="Search..."
            />
            <i className="absolute top-2 left-2 text-2xl text-white">
              <CiSearch />
            </i>
          </div>
        </div>

        {/*pulsanti di accesso */}
        <div className="btnContainer flex items-center justify-center w-fit">
          <Link to={"/signuppage"}>
            <button className="btn1">Sign Up</button>
          </Link>
          <Link to={"/loginpage"}>
            <button className="btn2">Log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
