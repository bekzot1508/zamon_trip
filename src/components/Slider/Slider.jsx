 import './style.css'
 import { useEffect, useState } from 'react';
 import { useTranslation } from 'react-i18next';

function AutoPlay() {
  const { t, i18n } = useTranslation();
  const [currentstata, setCurrentstata] = useState(0)
  const datas = [
    {
      text: "Take a Glimpse Into The Beautiful City Of:",
      title: "Dubai",
      img: "https://images.wallpaperscraft.com/image/single/dubai_united_arab_emirates_skyscrapers_117933_1920x1080.jpg",
      id: 1
    },
    {
      text: "Take a Glimpse Into The Beautiful City Of:",
      title: "Antalya",
      img: "https://c0.wallpaperflare.com/preview/696/177/130/antalya-castle-date-turkey.jpg",
      id: 3
    },
    {
      text: "Take a Glimpse Into The Beautiful City Of:",
      title: "Sharm El-shekh",
      img: "https://w0.peakpx.com/wallpaper/205/76/HD-wallpaper-jefaira-beach-mediterranean-sea-northern-coast-egypt-africa.jpg",
      id: 2
    },
    {
      text: "Take a Glimpse Into The Beautiful City Of:",
      title: "Istanbul",
      img: "https://plus.unsplash.com/premium_photo-1681929370653-08c8fc54274f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXN0YW5idWx8ZW58MHx8MHx8fDA%3D",
      id: 4
    },
    {
      text: "Take a Glimpse Into The Beautiful City Of:",
      title: "Sharm El-shekh",
      img: "https://images.pexels.com/photos/18886592/pexels-photo-18886592.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-18886592.jpg&fm=jpg",
      id: 4
    },
  ]



  useEffect(()=> {
    const timer = setTimeout(() => {
      if (currentstata===4) {
        setCurrentstata(0)
      } else {
        setCurrentstata(currentstata+1)
      }
    },3000)
      return ()=> clearTimeout(timer)
  }, [currentstata])

   const goToNext = (currentstata) => {
      setCurrentstata(currentstata+1)
    }

    const bgImageStyle = {
      backgroundImage: `url(${datas[currentstata].img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      height: '100%'
    }
   
  return (
    <div className="appp">
           <div className='container-style'>
             <div style={bgImageStyle}></div>
             <div className='transparent-background'></div>
             <div className="description">
              <div>
                <p>{t("subTitle")}</p>
                <h1>{datas[currentstata].title}</h1>
                <button className='rounded-3xl px-8 py-3 bg-gray-600 hover:bg-gray-400 my-8'>{t("1b")}</button>
              </div>
              <div className="carousel-boullt">
                {
                  datas.map((imagaSlide, currentstata) => (
                    <span key={currentstata} onClick={()=> goToNext(currentstata)}>.</span>
                  ))
                }
              </div>
             </div>
           </div>
    </div>
  );
}

export default AutoPlay;

