import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Rent</span>
            <span className="text-slate-700">-a-Car</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center w-52 sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <form>
          <ul className="flex gap-4">
            <Link to={"/"}>
              <li className="hidden sm:inline-block text-slate-700 hover:text-slate-500 cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"about"}>
              <li className="hidden sm:inline-block text-slate-700 hover:text-slate-500 cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"sign-in"}>
              <li className=" text-slate-700 hover:text-slate-500 cursor-pointer">
                Sign in
              </li>
            </Link>
          </ul>
        </form>
      </div>
    </header>
  );
}
