/* eslint-disable react/jsx-key */
// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { UsersThree, Car, Airplane, BuildingOffice} from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

function Responsive() {
    const { t, i18n } = useTranslation();
 
    //  CAROUSEL DATA -- Best Weekly Offers In Each City -- CAROUSEL DATA
    const datas = [
        {
            img: "https://zamontour.uz/assets/images/offers-02.jpg",
            title: "Dubai",
            price: 999,
            checkins: 300,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 1
        },
        {
            img: "https://zamontour.uz/assets/images/deals-01.jpg",
            title: "Antalya",
            price: 999,
            checkins: 300,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 2
        },
        {
            img: "https://zamontour.uz/assets/images/deals-02.jpg",
            title: "England",
            price: 999,
            checkins: 234,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 3
        },
        {
            img: "https://zamontour.uz/assets/images/offers-01.jpg",
            title: "Sharm El-Sheikh",
            price: 800,
            checkins: 200,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 4
        },
        {
            img: "https://zamontour.uz/assets/images/deals-04.jpg",
            title: "Istanbul",
            price: 420,
            checkins: 243,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 5
        },
        {
            img: "https://zamontour.uz/assets/images/cand.jpg",
            title: "Canada",
            price: 750,
            checkins: 245,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 6
        },
        {
            img: "https://zamontour.uz/assets/images/usa1.jpg",
            title: "USA",
            price: 985,
            checkins: 450,
            checkinsp: "check ins",
            person : "person",
            deal: "Deal inclueds",
            dealt: "5 days Trip -> Hotel Included",
            deala: "Airplane Bill Included",
            deald: "Daily Place Visit",
            button: "Make A Reservation",
            id: 7
        },
    ]

    //  CAROUSEL DATA -- visa suppost
    const visaDatas = [
        {
            img: "https://zamontour.uz/assets/images/japan.jpg",
            title: "Japan",
            price: '',
            checkins: 243,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 1
        },
        {
            img: "https://zamontour.uz/assets/images/saudi.jpg",
            title: "Saudi Arabia",
            price: '',
            checkins: 290,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 2
        },
        {
            img: "https://zamontour.uz/assets/images/oman.jpg",
            title: "Oman",
            price: '',
            checkins: 278,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 3
        },
        {
            img: "https://zamontour.uz/assets/images/china.jpg",
            title: "China",
            price: '',
            checkins: 378,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 4
        },
        {
            img: "https://zamontour.uz/assets/images/hongkong.jpg",
            title: "Hong Kong",
            price: '',
            checkins: 308,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 5
        },
        {
            img: "https://zamontour.uz/assets/images/europe.jpeg",
            title: "Europe",
            price: '',
            checkins: 348,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 6
        },
        {
            img: "https://zamontour.uz/assets/images/india.jpg",
            title: "India",
            price: '',
            checkins: 378,
            checkinsp: "check ins",
            person : "",
            deal: "Benifits or Visa Support service",
            dealt: "Best Prices",
            deala: "Short Processing Time",
            deald: "Trustworthy Assistance",
            button: "Make A Reservation",
            id: 7
        },
    ]
  

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="slider-container lg:w-11/12 sm:w-10/12 w-10/12 mx-auto mt-32 ">
            {/*  Best Weekly Offers In Each City */}
       <div>
                <div className="my-16 flex flex-col items-center xl:w-2/5 lg:w-3/5 md:4/5  mx-auto"> 
                    <h1 className="font-bold text-3xl text-center my-8">
                        {t("2t")}
                    </h1>
                    <p className="text-gray-400 text-center">
                    {t("2p")}
                    </p>
                </div>
            <Slider {...settings}>
                
                {
                    datas.map(item => (
                        <div className="relative h-96" key={item.id} >
                            <img className="w-7/12 sm:w-8/12  md:w-7/12  lg:w-6/12 2xl:h-96 lg:h-64 md:h-64 sm:h-full h-56 object-cover rounded-l-[20px] md:rounded-r-none sm:rounded-[20px]" src={item.img} alt="" />
                            <div className="absolute top-5 xl:top-20 2xl:top-12 lg:left-8 xl:left-16 2xl:left-28 md:left-12 sm:left-40 left-1 bg-white rounded-[20px] p-4 mx-4 shadow-lg">
                                <div>
                                    <div className="flex font-extrabold text-xl">
                                        <h3 className="mr-auto">{item.title}</h3>
                                      
                                    </div>
                                    <div className="flex  text-gray-400 items-center mb-2">
                                    <UsersThree size={32} />
                                        <h6> {item.checkins}</h6>
                                        <h6 className="mr-auto">{t("2ci")}</h6>
                                        <h6>/ {t("2o")}</h6>
                                    </div>
                                    <hr />
                                    <div className="mt-4 mb-2">
                                        <h4 className="font-medium">{item.deal}:</h4>
                                        <h4 className="mt-2 md:font-semibold flex lg:items-center gap-1 text-gray-400"><Car size={18} /> {t("2d")}</h4>
                                        <h4 className="my-1 md:font-semibold flex items-center gap-1 text-gray-400"><Airplane size={17} /> {t("2pl")}</h4>
                                        <h4 className="my-1 md:font-semibold flex items-center gap-1 text-gray-400"><BuildingOffice size={16} /> {t("2dp")}</h4>
                                        <h4 className="my-3 md:font-semibold rounded-full py-2 mx-auto text-center bg-zinc-500 hover:bg-zinc-400"> {t("2mr")}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
      </div>


      {/* Visa Support */}
        <div>
                <div className="my-16 flex flex-col items-center xl:w-2/5 lg:w-3/5 md:4/5  mx-auto mt-32" id="tours"> 
                    <h1 className="font-bold text-3xl text-center my-8">
                      {t("3h")}
                    </h1>
                    <p className="text-gray-400 text-center">
                       {t("3p")}ey.
                    </p>
                </div>
            <Slider {...settings}>
                
                {
                    visaDatas.map(item => (
                        <div className="relative h-96 mx-8" key={item.id}>
                            <img className="w-7/12 sm:w-8/12  md:w-7/12  lg:w-6/12 2xl:h-96 lg:h-64 md:h-64 sm:h-full h-56 object-cover rounded-l-[20px] md:rounded-r-none sm:rounded-[20px]" src={item.img} alt="" />
                            <div className="absolute top-8 xl:top-20 2xl:top-12 lg:left-8 xl:left-16 2xl:left-28 md:left-12 sm:left-40  left-0 bg-white rounded-[20px] p-4 mx-4 shadow-lg">
                                <div>
                                    <div className="flex font-extrabold text-xl">
                                        <h3 className="mr-auto">{item.title}</h3>
                                        <h3 className="ml-auto">{item.price}</h3>
                                    </div>
                                    <div className="flex  sm:font-medium text-gray-400 items-center mb-2">
                                    <UsersThree size={21} />
                                        <h6>{item.checkins}</h6>
                                        <h6 className="mr-auto">{t("3ci")}</h6>
                                        <h6></h6>
                                    </div>
                                    <hr />
                                    <div className="mt-6 mb-2">
                                        <h4 className="font-bold">{t("3be")}:</h4>
                                        <h4 className="mt-2 md:font-semibold flex items-center gap-1 text-gray-400"><Car size={16} />{t("3prce")}</h4>
                                        <h4 className="my-1 md:font-semibold flex items-center gap-1 text-gray-400"><Airplane size={17} />{t("3tme")}</h4>
                                        <h4 className="my-1 md:font-semibold flex items-center gap-1 text-gray-400"><BuildingOffice size={16} />{t("3tras")}</h4>
                                        <h4 className="my-3 md:font-semibold rounded-full py-2 mx-auto text-center bg-zinc-500 hover:bg-zinc-400">{t("2mr")}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
      </div>
    </div>
  );
}

export default Responsive;
