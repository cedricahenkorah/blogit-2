import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <div className="bg-indigo-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-neutral-100">
          Trusted by the world’s most innovative teams
        </h2>
        <Slider {...settings} className="lg:mt-20 mt-10">
          <img
            className="max-h-12 object-contain"
            src="https://zesty-cajeta-af510d.netlify.app/Vector.svg"
            alt="Netflix"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 object-contain "
            src="https://zesty-cajeta-af510d.netlify.app/google-2015.svg"
            alt="Google"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain "
            src="https://zesty-cajeta-af510d.netlify.app/amazon.svg"
            alt="Amazon"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain "
            src="https://zesty-cajeta-af510d.netlify.app/airbnb.svg"
            alt="Air BNB"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain"
            src="https://zesty-cajeta-af510d.netlify.app/grab-logo.svg"
            alt="Grab"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain"
            src="https://zesty-cajeta-af510d.netlify.app/facebook.svg"
            alt="Facebook"
            width={158}
            height={48}
          />
        </Slider>
      </div>
    </div>
  );
}
