/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { User, Globe, House, ArrowRight} from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

const ExploreAndVist = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
      <div className="slider-container lg:w-7/12 sm:w-10/12 mx-6  sm:mx-auto mt-32" id="about">
        <hr />
        {/* Explore Destinations With Ease -- -- HEADING  */}
          <div className="my-16 flex flex-col items-center xl:w-2/5 lg:w-3/5 md:4/5  mx-auto"> 
                    <h1 className="font-bold text-3xl text-center my-8">
                     {t("4t")}
                    </h1>
                    <p className="text-gray-400 text-center">
                    {t("4p")}
                    </p>
          </div>

         <div>
                {/* Cheap Railway Tickets With Us */}
                <div className="md:flex md:gap-8 mb-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/afr.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">{t("4h2")}</h1>
                                <h6 className="font-medium  text-gray-400">{t("4cp")}</h6>
                            </div >
                            <button className="font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-1 font-normal flex items-center text-gray-400 leading-relaxed">
                        {t("4cpt")}.
                        </p>
                    </div>
                </div>


                    <hr />
                {/* Discover Exciting Air Travel Deals */}
                <div className="md:flex md:gap-8 my-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/airplane.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">
                                {t("4h2")}
                                </h1>
                                <h6 className="font-medium  text-gray-400">{t("4cp2")}</h6>
                            </div >
                            <button className="font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-1 font-normal flex items-center text-gray-400 leading-relaxed">
                          {t("4cpt2")}
                        </p>
                    </div>
                </div>
         </div> 




         <hr />    
        {/* Visit One Of Our Countries Now-- -- HEADING  */}
          <div className="my-16 flex flex-col items-center xl:w-2/5 lg:w-3/5 md:4/5  mx-auto"> 
                    <h1 className="font-bold text-3xl text-center my-8">
                    {t("5t")}
                    </h1>
                    <p className="text-gray-400 text-center">
                    {t("5p")} 
                    </p>
          </div>

         <div>
                {/* dubai */}
                <div className="md:flex md:gap-8 mb-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/dubai2.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">Dubai</h1>
                                <h6 className="font-medium  text-gray-400">{t("5cp2")}</h6>
                            </div >
                            <button className="my-3 font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-5 font-normal flex items-center text-gray-400 leading-relaxed">
                        {t("5cpt")}
                        </p >
                        <hr />
                        <div className="flex justify-between py-4 text-gray-400">
                            <p className="flex items-center gap-2 ps-1"><User size={17} />8.66 Mil people</p>
                            <p className="flex items-center gap-2"><Globe size={17} />41.290.km2</p>
                            <p className="flex items-center gap-2 pe-1"><House size={17} />$1.100.200</p>
                        </div>
                        <hr />
                        <div>
                          <a href="#" className="flex items-center gap-3 ">{t("a")} ?  <ArrowRight className="hover:scale-x-[1.7]" size={16} /></a>
                        </div>
                    </div>
                </div>


                    <hr />
                {/* antaliya */}
                <div className="md:flex md:gap-8 mb-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/country-02.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">Antalya</h1>
                                <h6 className="font-medium  text-gray-400">{t("5he")}</h6>
                            </div >
                            <button className="my-3 font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-5 font-normal flex items-center text-gray-400 leading-relaxed">
                          {t("5cpt2")}
                        </p >
                        <hr />
                        <div className="flex justify-between py-4 text-gray-400">
                            <p className="flex items-center gap-2 ps-1"><User size={17} />44.48 Mil people</p>
                            <p className="flex items-center gap-2"><Globe size={17} />275.400.km2</p>
                            <p className="flex items-center gap-2 pe-1"><House size={17} />$946.200</p>
                        </div>
                        <hr />
                        <div>
                          <a href="#" className="flex items-center gap-3 ">{t("a")}?  <ArrowRight className="hover:scale-x-[1.7]" size={16} /></a>
                        </div>
                    </div>
                </div>


                {/* Sharm El-Sheikh */}
                <div className="md:flex md:gap-8 mb-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/sharm2.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">Sharm El-Sheikh</h1>
                                <h6 className="font-medium  text-gray-400">{t("5he2")}</h6>
                            </div >
                            <button className="my-3 font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-5 font-normal flex items-center text-gray-400 leading-relaxed">
                          {t("5cpt3")}
                        </p >
                        <hr />
                        <div className="flex justify-between py-4 text-gray-400">
                            <p className="flex items-center gap-2 ps-1"><User size={17} /> 67.41 Mil People</p>
                            <p className="flex items-center gap-2"><Globe size={17} /> 551.500 km2</p>
                            <p className="flex items-center gap-2 pe-1"><House size={17} />$551.500 km2</p>
                        </div>
                        <hr />
                        <div>
                          <a href="#" className="flex items-center gap-3 ">{t("a")} ?  <ArrowRight className="hover:scale-x-[1.7]" size={16} /></a>
                        </div>
                    </div>
                </div>


                {/* Istanbul*/}
                <div className="md:flex md:gap-8 mb-8"> 
                    {/* image */}
                    <div className="mt-8 md:w-[400px]">
                        <img className="  rounded-2xl" src="https://zamontour.uz/assets/images/istanbul3.jpg" alt="" />
                    </div>

                    {/* info */}
                    <div className=" sm:w-4/5 mt-4">
                        <div className="sm:flex sm:flex-row sm:items-center flex-col">
                            <div className="mr-auto">
                                <h1 className="font-bold text-2xl">Istanbul</h1>
                                <h6 className="font-medium  text-gray-400">{t("5he")}</h6>
                            </div >
                            <button className="my-3 font-semibold rounded-full py-2 px-6 text-center bg-zinc-500 hover:bg-zinc-400">{t("b")}</button>
                        </div>
                        <p className="mt-8 my-5 font-normal flex items-center text-gray-400 leading-relaxed">
                         {t("5cpt4")}
                        </p >
                        <hr />
                        <div className="flex justify-between py-4 text-gray-400">
                            <p className="flex sm:items-center gap-2  "><User size={17} />67.41 Mil People</p>
                            <p className="flex sm:items-center gap-2"><Globe size={17} />551.500 km2</p>
                            <p className="flex sm:items-center gap-2"><House size={17} />$425.600</p>
                        </div>
                        <hr />
                        <div>
                          <a href="#" className="flex items-center gap-3 ">{t("a")}?  <ArrowRight className="hover:scale-x-[1.7]" size={16} /></a>
                        </div>
                    </div>
                </div>
         </div>     
       </div>

     
    </>
  )
}

export default ExploreAndVist