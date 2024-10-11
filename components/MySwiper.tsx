"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const slides = [
  { img: "slide-1-1920x724.jpg", heading: "ESSENTIAL OIL", description:"IS THE BEGINNING OF ALL", btnText:'View more' },
  { img: "slide-2-1920x724.jpg", heading: "FLORAL WATER", description:"FOR PEOPLE WORLDWIDE", btnText:'View more' },
  { img: "slide-3-1920x724.jpg", heading: "AROMATIC CHEMICALS", description:"IN ALL OUR SOLUTIONS", btnText:'View more' },
];



export default function MySwiper() {
  const [hasMounted, setHasMounted] = useState(false);

 
  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      if (window.innerWidth > 1190) {
        document.documentElement.classList.add("desktop");
      } else {
        document.documentElement.classList.remove("desktop");
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Run handleResize on mount to set initial state
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and unmount
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper swiper-slider-1 context-dark  text-center"
    >
      {
        slides.map((slide, index) =>{
          return (
            <SwiperSlide
            key={slide.heading}
            onChange={() => setHasMounted(true)} 
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-9">
                    <h1 className="oh fw-ubold text-spacing-500">
                      <span
                        className={`animate__animated animate__slideInUp ${
                          hasMounted ? 'animate__delay-.90s' : ''
                        }`}                     
                        style={{fontSize:"55px", letterSpacing:'0.2em'}}
                        
                      >
                        {slide.heading}
                      </span>
                    </h1>
    
                    <h4
                      className="fw-light text-spacing-180 animate__animated animate__fadeInLeft animate__delay-.40s"                                     
                    >
                     {slide.description}
                    </h4>
                    <a
                      className="button button-lg button-secondary button-winona button-shadow-2 animate__animated animate__fadeInUp animate__delay-.50s"
                      href="#"                     
                    >
                     {slide.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
        })
      }
      <div className="swiper-button-prev">
        <svg width="100%" height="100%" viewBox="0 0 78 78">
          <circle
            className="swiper-button-line"
            cx="39"
            cy="39"
            r="36"
          ></circle>

          <circle
            className="swiper-button-line-2"
            cx="39"
            cy="39"
            r="36"
          ></circle>
        </svg>
      </div>

      <div className="swiper-button-next">
        <svg width="100%" height="100%" viewBox="0 0 78 78">
          <circle
            className="swiper-button-line"
            cx="39"
            cy="39"
            r="36"
          ></circle>

          <circle
            className="swiper-button-line-2"
            cx="39"
            cy="39"
            r="36"
          ></circle>
        </svg>
      </div>
    </Swiper>
  );
}
