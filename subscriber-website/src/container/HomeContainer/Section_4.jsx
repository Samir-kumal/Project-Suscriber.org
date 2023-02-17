import React, { useEffect, useRef,useState } from "react";
import Slider from "react-slick";
import KPoli from '/src/images/KP_ba.jpg';
import Prachanda from '/src/images/prachanda.jpg';
import Ravi from '/src/images/RAvi.jpg';
import Deuba from '/src/images/deuba.jpg';
// import "/src/App.css";

const Section_4 = () => {
  const sliderRef = useRef(null);
  const [slideToShow, setSlideToShow] = useState(3);

  useEffect(() => {
    let currentSlide = 0;
    const slider = sliderRef.current;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % 4; // assuming there are 3 slides

      
    }, 100);

    
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000 && window.innerWidth >= 500) {
        setSlideToShow(2);
      } else if (window.innerWidth < 500) {
        setSlideToShow(1);
      } else {
        setSlideToShow(3);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide:true,
    
  };


  return (
    <div data-aos = "fade-up" data-aos-duration="1000" className="testimonials  xs:w-[100%] md:w-[100%] xl:w-[80%]  h-[350px]  m-auto  ">
      <h2 className="font-serif font-bold text-black">Testimonials</h2>
      <p className="ml-4 font-semibold font-serif text-gray-700">What our client's say about us</p>
      <Slider  ref={sliderRef} {...settings}>
        
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials ">
          <img className="card-img-top" src={Ravi} alt="Person 1" />
          <br />
          <div className="card-body ">
            <h5>Ravi Lamichane<span>- Home Minister</span></h5>
            <p className="pt-2">Suscriber.org has a great sevice, i have been their customer and am planning to be in future too</p>
          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials">
          <img className="card-img-top" src={Prachanda} alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>Prachanda <span>- Prime Minister</span></h5>
            <p className="pt-2">Suscriber.org has a great sevice, i have been their customer and am planning to be in future too</p>

          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials ">
          <img className="card-img-top" src={Deuba} alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>Deuba<span>- EX- PM</span></h5>
            <p className="pt-2">Suscriber.org has a great sevice, i have been their customer and am planning to be in future too</p>

          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials">
          <img className="card-img-top" src={KPoli} alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>KP. Oli<span>- Guffadi Budo</span></h5>
            <p className="pt-2">Suscriber.org has a great sevice, i have been their customer and am planning to be in future too</p>

          </div>
        </div>
        </div>
       
       
      </Slider>
    </div>
  );
}

export default Section_4;