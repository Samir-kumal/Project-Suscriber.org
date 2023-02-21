import React, { useEffect } from "react";
import Logo1 from "/src/assets/Branding-logo.png";
import Logo2 from "/src/assets/Digital-marketing-logo.png";
import Logo3 from "/src/assets/Branding-logo.png";
import Logo4 from "/src/assets/Web-development-logo.png";
import Logo5 from "/src/assets/Reception-logo.png";
import Logo6 from "/src/assets/UI-UX-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section_2 = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="Section-2-main mb-16 h-fit  ">
        <div className="cards-section w-[80%] m-auto h-fit">
          <div className="desc h-32 flex justify-center items-center">
            <h1 className="text-3xl font-serif font-bold">
              We Provide The Best Service With Our Tools
            </h1>
          </div>
          <div data-aos="fade-up"
     data-aos-duration="4000">
            
            <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1  gap-12 justify-center">
             <div data-aos = "fade-up" data-aos-duration="4000">
             <div className="flex  justify-center transition duration-200 hover:scale-80">
                <div className="flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg transition duration-200 hover:scale-105 bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
                    Logo Designing
                  </h5>
                  <div className="logo-description">
                    <img src={Logo1} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
             </div>
              <div data-aos = "fade-up" data-aos-duration="5000">
              <div className="flex justify-center transition duration-200 hover:scale-105">
                <div className="flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg transition duration-200  bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
                    Digital Marketing
                  </h5>
                  <div className="logo-description">
                    <img src={Logo2} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
              </div>
              <div data-aos = "fade-up" data-aos-duration="6000">
              <div className="flex justify-center transition duration-200 hover:scale-105">
                <div className="flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
                    Branding
                  </h5>
                  <div className="logo-description">
                    <img src={Logo3} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
              </div>
                <div data-aos = "fade-up" data-aos-duration="7000">
                <div className="flex justify-center transition duration-200 hover:scale-105">
                <div className=" flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm ">
                  <h5 className="text-gray-900 px-4  text-xl leading-tight  font-bold mb-2">
                    Web Designing
                  </h5>
                  <div className="logo-description">
                    <img src={Logo4} alt=" " height="80px" width="80px" />
                  </div>

                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mt-4 mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
                </div>
              <div data-aos = "fade-up" data-aos-duration="8000">
              <div className="flex justify-center transition duration-200 hover:scale-105">
                <div className="flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
                    Online Reception Services
                  </h5>
                  <div className="logo-description">
                    <img src={Logo5} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
              </div>
              <div data-aos = "fade-up" data-aos-duration="9000">
              <div className="flex justify-center transition duration-200 hover:scale-105">
                <div className="flex w-[300px] h-[320px] flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">
                    UI/UX
                  </h5>
                  <div className="logo-description">
                    <img src={Logo6} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Readmore
                  </button> */}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_2;
