import BestLocations from "./components/BestLocations/BestLocations";
import Carousel from "./components/Carousel/Carousel";
import ExploreAndVist from "./components/ExploreAndVist/ExploreAndVist";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import MakeReservation from "./components/MakeReservation/MakeReservation";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Map from './components/Map/Map.jsx'



export default function App() {
  return (
    <>
       <Navbar/>
       <Slider/>
       <Carousel/>
       <ExploreAndVist/>
       <BestLocations/>
       <MakeReservation/>
       <Map/>
       <Form/>
       <Footer/>
       
    </>
    
  )
}