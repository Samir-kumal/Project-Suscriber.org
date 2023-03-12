import React, { useState  } from "react";
import "tw-elements";
import "./Typewriter.css";
import Typewriter from "typewriter-effect";
import gif from "../../Images/135470-work-place-animation-unscreen.gif";

const Section_1 = () => {
 

  //Static type writer example--------------------------
  // const [text, setText] = useState('');
  // const [strings, setStrings] = useState([' Marketing Agency!', 'Web Development Agency!', 'Subscription Agency!']);

  // useEffect(() => {
  //   let i = 0;
  //   const intervalId = setInterval(() => {
  //     setText(strings[i]);
  //     i = (i + 1) % strings.length;
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [strings]);
  return (
    <div>
      <section className="relative h-fit w-screen  ">
        <div className="main-landing flex relative w-[108%] h-[750px] bg-white">
          <div className="absolute lg:w-[700px] md:w-[600px] right-10 bottom-0">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_k0sUtnckyH.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="page-main-content absolute top-[25%] lg:top-[35%] left-8 text-white">
          <h1 className="text-4xl  text-white pt-2">Create Your Brand  With Us!</h1>
          <h1 className="Main-heading lg:text-4xl  text-white text-4xl">
           We Provide you
          </h1>
          <h1 className="lg:text-6xl text-4xl font-bold pt-1">
          <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  " Best Web Designing!",
                  "Logo of Company!",
                  "Digital Marketing!",
                  "Content Writing!",
                ],
              }}
            />
          </h1>
          <br />
          {/* <p className="lg:visible text-white text font-semibold  lg:h-fit h-0  invisible lg:text-xl">
            Suscriber.org is a leading online company that provides a wide range <br />
            of digital marketing,
            web designing, and online reception services to <br /> help businesses of
            all sizes grow and succeed online.
          </p> */}
          <br />
          <br />
          <button
            className="GetStarted-btn w-[200px] h-14 absolute -bottom-[17rem]
             lg:top-[90%] lg:left-[0%]  rounded-3xl  px-12 py-4
            text-black font-semibold bg-slate-100 transition
              duration-200  border-2 hover:bg-red-500 hover:text-white"
          >
            <a href="/contact">Get Started</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section_1;
