// import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg">
       <div>
            <div className="bg-neutral-600 flex flex-col px-8 md:flex md:flex-row md:justify-around items-center text-white py-16 ">
                <div>
                    <h1 className="font-bold text-2xl sm:text-4xl my-6"> {t("9h1")} ?</h1>
                    <h5 className="font-bold text-lg sm:text-xl">{t("9h4")}</h5>
                </div>
                <button className="px-6 py-3 rounded-3xl bg-neutral-400 mt-4">{t("9b")}</button>
            </div>
            <div className="bg-neutral-500 text-center py-8 px-2 font-bold text-white">
                <h2>Copyright © 2024 Zamon Business Tour. All rights reserved.</h2>
            </div>
       </div>
    </div>
  )
}

export default Footer