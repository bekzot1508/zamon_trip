// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false)
    const SendMessage = (event) => {
        setLoading(true)                  
        event.preventDefault();
        const token = "6705312033:AAHVpwuQ0eDEM3QfkFvqjRHDMwUDQXcC97Q";
        const chat_id =1660712160;
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById("Input1").value
        const phoneNumber = document.getElementById("Input2").value
        const guestCount = document.getElementById("Input3").value
        const reservationDate = document.getElementById("Input4").value
        const destination = document.getElementById("Input5").value
        const country = document.getElementById("Input6").value


        const messageContent = `Ismi: ${name} \nPhoneNumber: ${phoneNumber} \nGuestCount: ${guestCount} \nReservationDate: ${reservationDate} \nDestination: ${destination} \nCountry: ${country}`
        
        axios({
            url: url,
            method: "POST",
            data:{
              "chat_id": chat_id,
              "text": messageContent,
            }
        }).then((res) => {
            document.getElementById("myForm").reset()
            alert("Muvaffaqiyatli Yuborildi")
        }).catch((error) => {
            console.log("Yuborishda xatolik", error);
        }).finally(()=> {
            setLoading(false)
        })
    }
  return (
    <div className='mb-8 sm:w-5/6 mx-auto bg-gray-200 py-16'  id='contact'>
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-16 mx-auto px-4 md:px-16">
        {t("8h")}
      </h1>
        <div className="w-3/4 mx-auto">
            <form id='myForm' onSubmit={SendMessage}>
                <div className="lg:flex lg:flex-row  justify-around gap-8">
                    <div className="w-full"> 
                      <label htmlFor="name" className="font-[600] text-base text-slate-600 mb-8">{t("8n")}</label>
                      <input className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" type="text" id='Input1' placeholder='Ex. John Smithee' required/>
                    </div>
                    <div className="w-full mt-8 lg:mt-0">
                      <label htmlFor="" className="font-[600] text-base text-slate-600 mb-8">{t("ph")}</label>
                      <input className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" type="text" id='Input2' placeholder='Ex. +998 99 n328 08 42' required/>
                    </div>
                </div>

                <div className="lg:flex lg:flex-row  justify-around gap-8 mt-8">
                    <div className="flex flex-col w-full mt-8 lg:mt-0">
                      <label htmlFor=""  className="font-[600] text-base text-slate-600 ">{t("8ng")}</label>
                      <select className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" name="guest" id="Input3" required>
                        <option selected> Ex. 3 or 4 or 5</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4+">4+</option>
                      </select>
                    </div>
                    <div  className="w-full mt-8 lg:mt-0">
                      <label htmlFor=""  className="font-[600] text-base text-slate-600 ">{t("8cd")}</label>
                      <input className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" type="date" id='Input4' placeholder='' required/>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-8">
                      <label htmlFor="Input5"  className="font-[600] text-base text-slate-600 ">{t("8cyd")}</label>
                      <select className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" name="guest" id="Input5" required>
                          <option value="Antalya">Antalya</option>
                          <option value="Dubai">Dubai</option>
                          <option value="London">London</option>
                          <option value="Istanbul">Istanbul</option>
                          <option value="Tokio">Tokio</option>
                          <option value="California">California</option>
                          <option value="Paris">Paris</option>
                      </select>
                  </div>

                  <div className="flex flex-col w-full mt-8">
                      <label htmlFor="Input6"  className="font-[600] text-base text-slate-600 ">{t("8cyvd")}</label>
                      <select className="w-full py-3 px-6 mt-4 rounded-full hover:border-lime-800 hover:border-solid hover:border-2" name="guest" id="Input6" required="true" >
                        <option selected>Country</option>
                          <option value="USA">USA</option>
                          <option value="England">England</option>
                          <option value="UAE">UAE</option>
                          <option value="French">French</option>
                          <option value="Turkey">Turkey</option>
                          <option value="China">China</option>
                      </select>
                    </div>
                    <button type='submit' className="rounded-full bg-cyan-600 hover:bg-cyan-400 px-8 py-4 w-full mt-8 text-white hover:text-black font-medium tracking-widest" loading={loading}> {loading ? "Sending..." : `${t(`8myrn`)}`}</button>
            </form>
        </div>
    </div>
  )
}

export default Form