import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/ImageSlider.css";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const autoScroll = false;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrent(0);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    let slideInterval;
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current, autoScroll, intervalTime]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="image" src={slide.image} alt="swapi" />
            )}
          </div>
        );
      })}
    </section>
  );
}
