/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
import { List, InstagramLogo, TelegramLogo} from "@phosphor-icons/react";
import Logo from '../../assets/zamon.svg'
import { useTranslation } from 'react-i18next';
 

 

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const handlechange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage)
  }
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState("Home");

  const showNav = () => {
    setToggle(!toggle);
  };

  const Datas = [
    {
      title: `${t(`1hom`)}`,
      href: "/",
      cname:
        "border-t font-bold w-full  flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto"
    },
    {
      title: `${t(`1abo`)}`,
      href: "#about",
      cname:
        "border-t font-bold w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
    },
    {
      title: `${t(`1tou`)}`,
      href: "#tours",
      cname:
        "border-t font-bold w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
    },
    {
      title: `${t(`1cont`)}`,
      href: "#contact",
      cname:
        "border-t border-b font-bold w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
    }
  ]

  // start mobile first plus facile
  return (
    <nav className=" top-0 w-full px-0 md:px-2 xl:px-56 lg:px-24  bg-slate-400 items-center flex p-4">
      <div className="flex justify-between items-center md:mx-auto md:w-full w-full flex-wrap md:flex-nowrap">
        <img src={Logo} className="text-xl text-white font-bold cursor-pointer"/>

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
          {Datas.map((link, index) => {
            return (
              <li key={index} className={link.cname}>   
                  <a href={link.href}                  
                  className={`hover:text-sky-500 ${menu == link.title ? "underline  underline-offset-8":""}`}
                  to={link.href}
                  onClick={showNav}
                  onClick={()=> setMenu(link.title)}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
          <li className="2xl:pl-32  lg:pl-0">
          <select
          className={`${
            toggle ? " flex" : " hidden"
          } text-black hover:bg-gray-300 mx-auto border-none hover:text-sky-500  md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-slate-400 px-1 p-2 rounded-lg mt-4 w-16`}
          name='Lng' id='lng' onChange={handlechange}
        >
               <option selected>{t("1ti")}</option>
                <option value="uz">UZ</option>
                <option value="en">ENG</option>
                <option value="ru">RU</option>
        </select>
          </li>
          <li className="border-t border-b font-bold w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <a href="https://t.me/zamonbiznestour"><TelegramLogo size={18} /></a>
          </li>
          <li className="border-t border-b font-bold w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto">
            <a href="https://www.instagram.com/zamontour/"><InstagramLogo size={18} /></a>
          </li>
        </ul>
       
      

        
      </div>
    </nav>
  );
}
