import React, { useState } from "react";
import HeroSlider from "./HeroSlider";
import "../../style/home.css";
import Navbar from "../Navbar/Navbar";
import HeroChoice from "./HeroChoice";
import OrderOnline from "../../assests/hero-choice/online.webp";
import Dining from "../../assests/hero-choice/dining.avif";
import Club from "../../assests/hero-choice/club.jpg";
import HeroLocation from "./HeroLocation";
import Button from "../../ui/Button";
import HeroDeal from "./HeroDeal";
import Burgur from "../../assests/hero-deal/burger1.jpg";
import Herofaq from "./Herofaq";
import HeroCollectionDetails from "./HeroCollectionDetails";
import Collection2 from "../../assests/hero-collec/collection2.avif";
import Collection1 from "../../assests/hero-collec/collection1.avif";
import Collection3 from "../../assests/hero-collec/collection3.avif";

const HeroChoiceData = [
  {
    id: 1,
    img: OrderOnline,
    heading: "Order Online",
    description: "Stay home and order to your doorstep",
  },
  {
    id: 2,
    img: Dining,
    heading: "Dining",
    description: "View the city's favourite dining venues",
  },
  {
    id: 3,
    img: Club,
    heading: "Nightlife and Clubs",
    description: "Explore the city’s top nightlife outlets",
  },
];

const Locations = [
  { id: 1, location: "Indiranagar", places: "495 places" },
  { id: 2, location: "Indiranagar", places: "495 places" },
  { id: 3, location: "Indiranagar", places: "495 places" },
  { id: 4, location: "Indiranagar", places: "495 places" },
  { id: 5, location: "Indiranagar", places: "495 places" },
  { id: 6, location: "Indiranagar", places: "495 places" },
  { id: 7, location: "Indiranagar", places: "495 places" },
  { id: 8, location: "Indiranagar", places: "495 places" },
  { id: 9, location: "Indiranagar", places: "495 places" },
  { id: 10, location: "Indiranagar", places: "495 places" },
  { id: 11, location: "Indiranagar", places: "495 places" },
  { id: 12, location: "Indiranagar", places: "495 places" },
];

const DealsData = [
  {
    id: 1,
    img: Burgur,
    heading: "Top Deals on Burger",
    description: `Get Free Classic Veg Cheese Burger with every Order  Minimum cart amount should be Rs. 299 Access this deal by using the given Promo code`,
  },
  {
    id: 1,
    img: Burgur,
    heading: "Top Deals on Burger",
    description: `Get Free Classic Veg Cheese Burger with every Order  Minimum cart amount should be Rs. 299 Access this deal by using the given Promo code`,
  },
  {
    id: 1,
    img: Burgur,
    heading: "Top Deals on Burger",
    description: `Get Free Classic Veg Cheese Burger with every Order  Minimum cart amount should be Rs. 299 Access this deal by using the given Promo code`,
  },
];

const FqaDetails = [
  {
    id: 1,
    question: "I don't remember my password?",
    answer:
      "You have already created an account but you can't remember your password? Click on 'Login/Sign Up' at the top of the page. Then click on 'Forgot Password?'. Fill out your phone number and a password recovery will be sent to you by phone.",
  },
  {
    id: 1,
    question: "What are your delivery hours?",
    answer: "Our delivery hour is from 10:00 AM to 08:00 PM.",
  },
  {
    id: 1,
    question: "How much time it takes to deliver the order?",
    answer:
      " Generally it takes between 45 minutes to 1 hour time to deliver the order. Due to long distance or heavy traffic, delivery might take few extra minutes.",
  },
  {
    id: 1,
    question: "Can I edit my order?",
    answer:
      "  Your order can be edited before it reaches the kitchen. You could contact the customer support team via a call to do so. Once an order is placed and the kitchen starts preparing your food, you may not edit its contents.",
  },
];

const CollectionDetails = [
  {
    id: 1,
    img: Collection1,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
  {
    id: 1,
    img: Collection2,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
  {
    id: 1,
    img: Collection3,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
];

const Home = () => {
  const [visible, setVisivle] = useState(6);

  const showMoreItems = () => {
    setVisivle((prevValue) => prevValue + 3);
  };
  const showLessItems = () => {
    setVisivle(3);
  };
  return (
    <>
      <main className="home">
        <section className="hero-section">
          <Navbar />
        </section>
        <section className="hero-choice-section">
          <div className="choice">
            {HeroChoiceData.map((item) => (
              <HeroChoice key={item.id} data={item} />
            ))}
          </div>
        </section>

        <section className="hero-collection-section">
          <h2 className="heading">
            Collections
            <div className="heading-text">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bengaluru, based on trends
            </div>
          </h2>

          <div className="hero-collection-container">
            {CollectionDetails.map((collction, index) => (
              <HeroCollectionDetails key={index} data={collction} />
            ))}
          </div>
        </section>
        <section className="hero-brands">
          <HeroSlider />
        </section>
        <section className="hero-deal-section">
          {DealsData.map((deal, index) => (
            <HeroDeal key={index} data={deal} index={index} />
          ))}
        </section>
        <section className="hero-location-section">
          <div className="hero-location-text">
            <h2>Popular localities in and around Bengaluru</h2>
          </div>
          <div className="location">
            {Locations.slice(0, visible).map((location) => (
              <HeroLocation key={location.id} data={location} />
            ))}
          </div>
          {visible !== Locations.length ? (
            <Button onClick={showMoreItems}>AddMore</Button>
          ) : (
            <Button onClick={showLessItems}>Addless</Button>
          )}
        </section>
        <section className="faq-section">
          <h2 className="heading">Frequently asked questions (FAQ)</h2>
          {FqaDetails.map((faq, index) => (
            <Herofaq key={index} data={faq} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
