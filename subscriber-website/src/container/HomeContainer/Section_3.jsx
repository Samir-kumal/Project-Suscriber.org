import React from "react";

const Section_3 = () => {
  return (
    <div>
      <section className="aboutus_section lg:h-[780px] h-fit w-[100%]" style={{backgroundColor:"green"}}>
        <div className="third-section h-32 w-[90%]   flex justify-end items-center gap-2">
          <h1 className="font-serif font-bold text-3xl ">About Us</h1>
          <div className="breakline" style={{width:"10vw", height:"0.5vh", backgroundColor:"red", borderRadius:"5rem"}}>

          </div>
        </div>
        <div className="About-us lg:flex lg:items-center w-[80%] m-auto mt-0 px-5 gap-20 shadow-2xl p-0 lg:h-[600px] h-fit">
          <div>
          <lottie-player 
  src="https://assets2.lottiefiles.com/packages/lf20_xmdlmtgz.json"  
  background="transparent"  
  speed="1"  
  style={{width: '600px', height: '600px'}}  
  loop  
  autoplay>
</lottie-player>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold ">We are the Visionary Enthugiast</h1>
            <br />
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima explicabo eligendi quas distinctio et, architecto similique porro excepturi, sunt reiciendis commodi officia facere eveniet? Magni autem architecto animi provident.</p>
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex quaerat praesentium dolore et nesciunt rerum quibusdam. Labore, id ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_3;
