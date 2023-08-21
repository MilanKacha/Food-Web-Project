import React, { useRef } from "react";
import Slider from "react-slick";

import "../style/slidercommon.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Button from "../ui/Button";

const SliderComponent = (props) => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderClasses = props.className
    ? props.className + " " + "slider-content"
    : "slider-content" + " " + props.title + "-slider";
  return (
    <div>
      <div className="container">
        <div className={sliderClasses}>
          <h2 style={{ color: "black" }}> {props.title} </h2>
          <div className="slider-button" style={{ display: "flex" }}>
            <div>
              <BsFillArrowLeftCircleFill
                style={{ width: 20, height: 20 }}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              />
            </div>
            <div>
              <BsFillArrowRightCircleFill
                style={{ width: 20, height: 20 }}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              />
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {props.slide.map((slide, index) => (
            <div key={index}>
              <div className="card">
                <div className="slider-img">
                  <img src={slide.imageSrc} alt={`Slide ${index}`} />
                </div>
                <div className="slider-info">
                  <h2 style={{ color: "black" }}>
                    {slide.heading ? `${slide.heading}` : "Gujarati thali"}
                  </h2>
                  <h3 style={{ color: "black" }}>
                    {slide.description
                      ? `${slide.description}`
                      : "Get Up To 40% off"}
                  </h3>
                  <Button>
                    {slide.button ? `${slide.button}` : "View More"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
