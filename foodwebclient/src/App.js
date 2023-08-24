import Navbar from "./features/Navbar/Navbar";
import Home from "../src/features/home/Home";
import HeroSlider from "./features/home/HeroSlider";
import SliderComponent from "./ui/SliderComponent";
import img1 from "../src/assests/hero-choice/club.jpg";
import img2 from "../src/assests/hero-choice/dining.avif";
import "./App.css";
import Footer from "./features/Navbar/Footer";
import Delivery from "./features/delivery/Delivery";
import RestorantDetails from "./features/restorantdetails/RestorantDetails";

function App() {
  const slides2 = [
    { imageSrc: img1, caption: "Slide 1" },
    { imageSrc: img1, caption: "Slide 2" },
    { imageSrc: img1, caption: "Slide 3" },
    { imageSrc: img1, caption: "Slide 4" },
    { imageSrc: img1, caption: "Slide 5" },
    { imageSrc: img1, caption: "Slide 6" },
    { imageSrc: img1, caption: "Slide 7" },
    { imageSrc: img1, caption: "Slide 8" },
  ];
  return (
    <>
      <div className="app">
        <RestorantDetails />
      </div>
    </>
  );
}

export default App;
