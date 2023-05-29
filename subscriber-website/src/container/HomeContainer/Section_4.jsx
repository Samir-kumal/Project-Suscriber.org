import React, { useEffect, useRef,useState } from "react";
import Slider from "react-slick";

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
    <div data-aos = "fade-up" data-aos-duration="1000" className="testimonials  xs:w-[100%] md:w-[100%] xl:w-[80%]  h-[600px]  m-auto  ">
      <h2 className="font-serif font-bold text-black">Testimonials</h2>
      <p className="ml-4 font-semibold font-serif text-gray-700">What our client's say about us</p>
      <Slider  ref={sliderRef} {...settings}>
        
        <div className="p-4 h-[500px] w-[400px]" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials ">
          <img className="card-img-top" src="https://randomuser.me/api/portraits/men/49.jpg" alt="Person 1" />
          <br />
          <div className="card-body ">
            <h5>Customer 1<span>- </span></h5>
            <p className="pt-2">
            "I have been a loyal customer of this company for years and I can't recommend them enough! From their top-notch digital marketing services to their stunning photography and UI/UX design, they have helped me take my business to the next level.
              "
              </p>
          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials">
          <img className="card-img-top" src="https://randomuser.me/api/portraits/men/79.jpg" alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>Customer 2 <span>-</span></h5>
            <p className="pt-2">
            "I can't say enough good things about this company. Their branding and web design services helped me establish a strong online presence, while their subscription and digital marketing services allowed me to connect with my audience and grow my business.
             "
              </p>

          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials ">
          <img className="card-img-top" src= "https://randomuser.me/api/portraits/men/31.jpg" alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>Customer 3<span>-</span></h5>
            <p className="pt-2">
            "I've been a subscriber to this company's YouTube channel for a while now and I am blown away by the value they provide. Their subscription services are not only affordable, but also packed with exclusive content that has helped me take my business to the next level.
              </p>

          </div>
        </div>
        </div>
        <div className="p-4" style={{display:"flex", gap:"5rem"}}>
        <div className="card card_testimonials">
          <img className="card-img-top" src= "https://randomuser.me/api/portraits/men/62.jpg" alt="Person 2" />
          <br />
          <div className="card-body">
            <h5>Customer 4<span>- </span></h5> 
            <p className="pt-2">
            Their online reception services have also been a game changer for my business, allowing me to focus on what matters most. Overall, their services are top-notch and their team is a pleasure to work with. Highly recommended!" 
              </p>

          </div>
        </div>
        </div>
       
       
      </Slider>
    </div>
  );
}

export default Section_4;