import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// import "/src/App.css";

const Recent_projects = () => {
  const sliderRef = useRef(null);
  const [slideToShow, setSlideToShow] = useState(3);

  useEffect(() => {
    let currentSlide = 0;
    const slider = sliderRef.current;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % 4; // assuming there are 3 slides
    }, 100);
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1000 && window.innerWidth >= 500) {
  //       setSlideToShow(2);
  //     } else if (window.innerWidth < 500) {
  //       setSlideToShow(1);
  //     } else {
  //       setSlideToShow(3);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide: true,
  };

  return (
    <div data-aos = "fade-up" data-aos-duration="500" className="testimonials  rounded-xl pt-10 xs:w-[100%] md:w-[100%] xl:w-[80%] bg-white lg:h-[700px] h-[900px]  m-auto  ">
      <h2 className="font-serif font-bold text-black text-8xl">Our Recent Projects</h2>
      <Slider ref={sliderRef} {...settings}>
        <div className=" ">
          <div className="  card_Recent_projects lg:flex-row flex-col flex  ">
            <div className="">
              <img
                className=" recent_project_cards"
                src= "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80"
                alt="Person 1"
              />
            </div>
            <div className="lg:w-[50%] w-full py-4   px-6 ">
              <h1 className="text-center pt-2 w-full text-4xl font-bold">Project Name trial</h1>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum rem, vero numquam itaque sequi minima, sunt culpa reiciendis, modi voluptatibus. Nisi quo facere maiores, incidunt facilis magni deserunt culpa!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus nihil voluptate suscipit optio. Atque, consequuntur aliquid sapiente doloribus ea nesciunt reprehenderit. Voluptate, aliquam non? Explicabo nulla id expedita nesciunt laudantium, suscipit eos tempore perspiciatis quaerat quos veritatis nisi velit reprehenderit voluptatum atque totam official</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" card_Recent_projects lg:flex-row flex-col flex">
            <div>
              <img
                className=" recent_project_cards"
                src= "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                alt="Person 2"
              />
            </div>
            <div className="lg:w-[50%] w-full h-full px-6 pt-4 ">
              <h1 className="text-center text-4xl font-bold">Project Name Trial2</h1>
              
              <p className="text-[1px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum rem, vero numquam itaque sequi minima, sunt culpa reiciendis, modi voluptatibus. Nisi quo facere maiores, incidunt facilis magni deserunt culpa!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus nihil voluptate suscipit optio. Atque, consequuntur aliquid sapiente doloribus ea nesciunt reprehenderit. Voluptate, aliquam non? Explicabo nulla id expedita nesciunt laudantium, suscipit eos tempore perspiciatis quaerat quos veritatis nisi velit reprehenderit voluptatum atque totam official</p>
              
            </div>
          </div>
        </div>
        <div className="">
          <div className=" card_Recent_projects lg:flex-row flex-col flex ">
            <div>
            <img className=" recent_project_cards" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80" alt="Person 2" />

            </div>
            <div className="lg:w-[50%] w-full h-full px-6 pt-4 ">
              <h1 className="text-center text-4xl font-bold">Project Name Trial3</h1>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum rem, vero numquam itaque sequi minima, sunt culpa reiciendis, modi voluptatibus. Nisi quo facere maiores, incidunt facilis magni deserunt culpa!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus nihil voluptate suscipit optio. Atque, consequuntur aliquid sapiente doloribus ea nesciunt reprehenderit. Voluptate, aliquam non? Explicabo nulla id expedita nesciunt laudantium, suscipit eos tempore perspiciatis quaerat quos veritatis nisi velit reprehenderit voluptatum atque totam officia iste, cum qui odio nihil libero iure rem quibusdam? Ab officia ea esse beatae reiciendis.</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" card_Recent_projects lg:flex-row flex-col flex">
            <div>
            <img className="recent_project_cards" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Person 2" />

            </div>
            <div className="lg:w-[50%] w-full h-full px-6 pt-4 ">
              <h1 className="text-center text-4xl font-bold">Project Name</h1>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum rem, vero numquam itaque sequi minima, sunt culpa reiciendis, modi voluptatibus. Nisi quo facere maiores, incidunt facilis magni deserunt culpa!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus nihil voluptate suscipit optio. Atque, consequuntur aliquid sapiente doloribus ea nesciunt reprehenderit. Voluptate, aliquam non? Explicabo nulla id expedita nesciunt laudantium, suscipit eos tempore perspiciatis quaerat quos veritatis nisi velit reprehenderit voluptatum atque totam officia iste, cum qui odio nihil libero iure rem quibusdam? Ab officia ea esse beatae reiciendis.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Recent_projects;
