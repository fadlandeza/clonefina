import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../assets/img/slider1.png";
import slider2 from "../assets/img/slider2.jpeg";
import slider3 from "../assets/img/slider3.jpg";
import { easeIn } from "motion";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    ease :"power2.in",
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center items-center">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100"></div>
    ),
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {[slider1, slider2, slider3].map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>

      {/* Panah navigasi kustom */}
      <style>{`
        .slick-prev, .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 40px;
          color: white;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
