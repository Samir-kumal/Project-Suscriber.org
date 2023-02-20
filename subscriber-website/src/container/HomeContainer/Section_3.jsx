import React from "react";
import LottiePlayer from "./LottiePlayer";

const Section_3 = () => {
  return (
    <div data-aos = "fade-up" data-aos-duration="1000">
      <section className="aboutus_section   pt-20 pb-12 lg:h-[900px] h-fit bg-white ">
        
        <div className="About-us lg:flex  lg:items-center w-[80%] m-auto mt-8 lg:px-10  gap-24 shadow-2xl p-4 lg:h-[700px] h-fit">
          <div className="m-auto  flex justify-center" style={{ maxWidth: "600px", width: "100%" }}>
            <LottiePlayer/>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold ">
              We are the Visionary Enthugiast
            </h1>
            <br />
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus minima explicabo eligendi quas distinctio et,
              architecto similique porro excepturi, sunt reiciendis commodi
              officia facere eveniet? Magni autem architecto animi provident.
            </p>
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda ex quaerat praesentium dolore et nesciunt rerum
              quibusdam. Labore, id ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_3;
