'use client';
import Slider from "react-slick";



const ImageCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000, // Adjust based on how fast you want auto-scroll
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="slider-container my-14">
    <Slider {...settings}>
      <div>
      <a className="clients-modern" href="#"><img src="iso01.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso02.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso03.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso04.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso05.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso06.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso07.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso08.png" alt="" width="212" height="130"/></a>
      </div>
      <div>
      <a className="clients-modern" href="#"><img src="iso09.png" alt="" width="212" height="130"/></a>
      </div>
    </Slider>
  </div>
  );
};

export default ImageCarousel;
