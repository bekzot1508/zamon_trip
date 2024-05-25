import { useState } from "react";
import { navbarData } from "./navbarData.js";
import { List} from "@phosphor-icons/react";
import Logo from '../../assets/zamon.svg'
 

 

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="fixed top-0 w-full px-0 md:px-28 bg-slate-500 items-center flex p-4">
      <div className="flex justify-between items-center md:mx-auto md:w-full lg:w-10/12 w-full flex-wrap md:flex-nowrap">
        <img src={Logo} className="text-xl text-white font-bold cursor-pointer pl-6"/>

        <button
          className="flex justify-end mr-6 md:hidden ring-1 ring-black rounded"
          onClick={showNav}
        >
          {/* <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"></i> */}
          <List className="text-white w-9 h-9 flex justify-center items-center hover:text-black" /> 
        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center  w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>   
                  <a
                  className="hover:text-sky-500"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
       
        <select
          className={`${
            toggle ? " flex" : " hidden"
          } text-indigo-800 hover:bg-gray-300 mx- md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-28`}
        >
          <option selected>Language</option>
          <option value="1">UZ</option>
          <option value="1">ENG</option>
          <option value="1">RU</option>
        </select>
      </div>
    </nav>
  );
}
