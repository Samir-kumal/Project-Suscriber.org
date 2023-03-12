import React, { useEffect } from "react";
import Logo1 from "../../assets/Logo_services/logo-design.png";
// import Logo1 from "/src/assets/Branding-logo.png";
import Logo2 from "../../assets/Logo_services/Digital-Marketing.png";
// import Logo2 from "/src/assets/Digital-marketing-logo.png";
import Logo3 from "../../assets/Logo_services/Branding.png";
// import Logo3 from "/src/assets/Branding-logo.png";
import Logo4 from "../../assets/Logo_services/Web-Designing.png";
// import Logo4 from "/src/assets/Web-development-logo.png";
import Logo5 from "../../assets/Logo_services/Reception-service.png";
// import Logo5 from "/src/assets/Reception-logo.png";
import Logo6 from "../../assets/Logo_services/UI-UX-logo-color.png";
// import Logo6 from "/src/assets/UI-UX-logo.png";  
import Logo7 from "../../assets/Logo_services/photography.png";  
import Logo8 from "../../assets/Logo_services/subscribe-logo.png";  
import Logo9 from "../../assets/Logo_services/meme.png";  
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
                    "Create a unique and memorable logo with our professional design service. Let us help your business stand out."
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
                   "Boost your online presence with our expert digital marketing services. 
                   Let us help you reach your target audience and drive results."
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
                    "Craft a powerful and consistent brand image with our comprehensive branding services.
                     Let us help you connect with your audience and build brand loyalty."
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
                   "Elevate your online presence with our custom web design solutions. 
                   We'll create a stunning and user-friendly website that showcases your brand and drives results."
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
                    Online Reception
                  </h5>
                  <div className="logo-description">
                    <img src={Logo5} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                  "Enhance your customer experience with our reliable online reception services. 
                  Our friendly and professional receptionists will handle your calls, appointments, so you can focus on your business."
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
                    "Transform your digital products with our exceptional UI/UX design services. 
                    We'll create intuitive and engaging interfaces that delight your users and drive business growth."
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
                    Subscription
                  </h5>
                  <div className="logo-description">
                    <img src={Logo8} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                  "Expand your reach and engage your audience with our expert subscription services for Facebook, YouTube, and Twitter. Let us help you grow your brand!"


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
                    Photography
                  </h5>
                  <div className="logo-description">
                    <img src={Logo7} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                  "Capture your story with our expert photography services. From portraits to events, we bring your vision to life."
                   
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
                    Memes
                  </h5>
                  <div className="logo-description">
                    <img src={Logo9} alt="" height="80px" width="80px" />
                  </div>
                  <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                  <p className="text-gray-700 text-base mb-4">
                  "Make your brand stand out with our expert meme creation services. Because who said marketing can't be funny?"
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
