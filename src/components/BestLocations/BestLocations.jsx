// import React from 'react'
import './BestLocations.css'
import { Aperture} from "@phosphor-icons/react";
import { useTranslation } from 'react-i18next';

const BestLocations = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='wrapper '>
        <div className="my-16 flex flex-col items-center xl:w-2/5 lg:w-3/5 md:4/5  mx-auto"> 
                    <h1 className="font-bold text-3xl text-center my-8">
                    {t("6h")}
                    </h1>
                    <p className="text-gray-400 text-center">
                    {t("6p")}
                    </p>
          </div>
        <div className="container">

            <input type="radio" name='slide' id='c1' checked />
            <label htmlFor="c1" className='card' >
              <div className="row">
                <div className="icon"><Aperture size={18} /></div>
                <div className="description">
                    <h4>Dubai</h4>
                    <p>Population: 2M</p>
                </div>
              </div>
            </label>

            <input type="radio" name='slide' id='c2' checked />
            <label htmlFor="c2" className='card' >
              <div className="row">
                <div className="icon"><Aperture size={18} /></div>
                <div className="description1">
                    <h4>Antalya</h4>
                    <p>Population: 3.5M</p>
                </div>
              </div>
            </label>

            <input type="radio" name='slide' id='c3' checked />
            <label htmlFor="c3" className='card' >
              <div className="row">
                <div className="icon"><Aperture size={18} /></div>
                <div className="description1">
                    <h4>Istanbul</h4>
                    <p>Population: 4.1M</p>
                </div>
              </div>
            </label>

            <input type="radio" name='slide' id='c4' checked />
            <label htmlFor="c4" className='card card_d' >
              <div className="row">
                <div className="icon"><Aperture size={18} /></div>
                <div className="description1">
                    <h4>Paris</h4>
                    <p>Population: 7.5M</p>
                </div>
              </div>
            </label>

            <input type="radio" name='slide' id='c5' checked />
            <label htmlFor="c5" className='card card_d card_dd' >
              <div className="row">
                <div className="icon"><Aperture size={18} /></div>
                <div className="description1">
                    <h4>Japan</h4>
                    <p>Population: 52.1M</p>
                </div>
              </div>
            </label>
        </div>
    </div>
  )
}

export default BestLocations