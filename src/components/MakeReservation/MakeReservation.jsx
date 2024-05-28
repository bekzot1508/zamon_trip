// import React from 'react'
import {PhoneCall, Envelope, MapPinLine} from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

const MakeReservation = () => {
  const { t, i18n } = useTranslation();
  return (

    <div className="relative">
        <div className="text-center left-6 sm:left-32 md:left-1/4 lg:left-1/3 top-32 mx-auto mb-[-20px] text-emerald-700  absolute">
            <h6 className="text-white font-bold text-2xl mt-8">{t("7h5")}</h6>
            <h1 className="text-white font-bold text-5xl mt-8">
            {t("8myrn")}
            </h1>
            <button className="font-bold text-lg px-6 py-3 mt-8 bg-white rounded-full hover:bg-green-400 text-black">
            {t("7b")}
            </button>
         </div>
         {/* photo */}
        <img className="object-fill w-full h-[700px]" src="https://images.unsplash.com/photo-1556695736-d287caebc48e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0cm8lMjBzdGF0aW9ufGVufDB8fDB8fHww" alt="" />
         {/* cards container */}
         <div className="mt-[-130px]   flex-col lg:flex lg:flex-row w-[300px] sm:w-[400px] md:w-[400px] lg:w-[900px]  xl:w-[1200px]  mx-auto flex gap-10 flex-wrap sm:flex-nowrap text-white">
                <div className="h-48 sm:w-96 lg:w-2/6 bg-white  flex flex-col items-center justify-center rounded-2xl shadow-xl">
                    <p className="text-black rounded-full bg-gray-300 p-3 my-1"><PhoneCall size={32} color="green" /></p>
                    <h2 className="text-black lg:text-lg lg:font-bold font-medium">{t("7pc")}</h2>
                    <a className="  text-blue-500 my-1">+998 99 299 99 96</a>
                </div>
                <div className="h-48 sm:w-96 lg:w-2/6 bg-white  flex flex-col items-center justify-center rounded-lg shadow-xl">
                    <p className="text-black rounded-full bg-gray-300 p-3 my-1"><Envelope size={32} color="green"/></p>
                    <h2 className="text-black lg:text-lg lg:font-bold font-medium px-4 text-center">{t("7pe")}</h2>
                    <a className="  text-blue-500">zamonbiznestour@mail.ru</a>
                </div>
                <div className="h-48 sm:w-96 lg:w-2/6 bg-white  flex flex-col items-center justify-center rounded-lg shadow-xl">
                    <p className="text-black rounded-full bg-gray-300 p-3 my-1"><MapPinLine size={32} color="green"/></p>
                    <h2 className="text-black lg:text-lg lg:font-bold font-medium">{t("7po")}</h2>
                    <a className="text-blue-500 my-1">15/25, Chilanzar - 9, Tashkent city</a>
                </div>
            </div>
    </div>
  )
}

export default MakeReservation