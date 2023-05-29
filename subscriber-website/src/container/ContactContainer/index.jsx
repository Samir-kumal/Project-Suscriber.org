import React, { useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactusImage from "../../Images/ContactusImage.png";
import MapImage from "../../Images/mapImage.png";
import "./index.css";
import { NavLink } from "react-router-dom";
import Service from "../../service/contact";
import Map from "../../components/Map";
import Facebook from "../../assets/elements/Facebook";
import Instagram from "../../assets/elements/Instagram";
import LinkedIn from "../../assets/elements/LinkedIn";
import Youtube from "../../assets/elements/Youtube";
import Twitter from "../../assets/elements/Twitter";
import { ContactUs } from "../FormContainer";
import Footer2 from "../../components/Footer2";
const ContactContainer = () => {
  let FacebookLink = "https://www.facebook.com/";
  let TwitterLink = "https://twitter.com/";
  let InstagramLink = "https://www.instagram.com/samer_kumal/";
  let LinkedInLink = "https://www.linkedin.com/";
  let YoutubeLink = "https://www.youtube.com/";
  // console.log(formData.name, formData.email,formData.phoneno,formData.subject, formData.message);

  return (
    <>
      <Header />
      <div className="w-screen bg-black">
        <div className="ContactUs_section w-full lg:h-[600px] h-[600px] flex flex-col-reverse lg:flex-row ">
          <div className="flex flex-col  w-full lg:w-[50%]">
            <div className=" w-full  h-[300px] lg:h-fit  lg:translate-y-16">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_xt3zjwah.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
          </div>
          <div className=" w-full  lg:w-[50%] lg:translate-y-0  lg:translate-x-2  lg:flex items-end justify-center  ">
            <div className="h-[120px]  lg:static  left-[15%] right-[15%]  -bottom-10  -translate-y-[3rem] flex items-center lg:translate-x-6 lg:translate-y-[-4rem] flex-col ">
              <h2 className="text-white  text-4xl lg:text-6xl  font-bold text-center">
                Let's Connect
              </h2>

              <p className=" text-white text-lg lg:text-xl text-center">
                Please feel free to reach out. <br /> We'll try our best to
                satisfy your needs
              </p>
              <div>
                <div className="flex translate-y-2  gap-6 ">              
                  <a href={FacebookLink}>
                   <Facebook/>
                  </a>
                
                <div>
                  <a href={TwitterLink}>
                    <Twitter/>
                  </a>
                </div>
                <div>
                  <a href={InstagramLink}>
                    <Instagram/>
                  </a>
                </div>
                <div>
                  
                  <a href={LinkedInLink}>
                    <LinkedIn/>
                  </a>
                </div>
                <div>
                  <a href={YoutubeLink} className = "cursor-pointer"  >
                   <Youtube/>
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit Main-body-contact">
        <div className=" h-fit  py-6">
          <div className="m-auto flex   lg:w-[1250px]">
            <div className=" w-[50%] h-24 lg:h-[400px] flex justify-center   flex-col ">
              <div className="translate-y-12 lg:-translate-y-20 lg:translate-x-10">
                <h1 className="font-bold text-2xl w-screen lg:text-3xl mt-5">
                  We Would Love To Hear From You
                </h1>
                <p className="w-screen  text-lg lg:text-lg py-1">
                  {" "}
                  Phone no : +977 <a href='tel:9815904119'>9815904119</a>
                </p>
                <p className="w-screen text-lg lg:text-lg py-1">
                  {" "}
                  Telephone no: <a href='tel:01-521345'>01-521345</a>
                </p>
                <p className="w-screen text-lg lg:text-lg py-1">
                  {" "}
                  Email : kumalsameer124@gmail.com
                </p>
              </div>
            </div>

            <div className=" flex h-[300px] lg:-translate-y-16  justify-center w-[50%]">
              <img
                className="translate-y-12 lg:static lg:top-[690px] right-0 -z-10 lg:z-0 lg:h-[400px] md:h-[400px] h-[200px] absolute "
                src={ContactusImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[1250px] h-fit lg:h-[650px] flex flex-col lg:flex-row   m-auto">
          <div className="location-map relative lg:-translate-y-24   lg:w-[50%]">
            <div className=" w-full  lg:translate-x-2   lg:translate-y-8">
              <h1 className=" text-xl lg:text-3xl font-bold">Contact us</h1>
              <p className=" text-lg lg:text-xl">
                Want to get in touch? We'd love to hear from you.
              </p>
            </div>
            <div className="flex lg:w-full  w-screen items-end  h-[90%] ">
              <div  className=" h-[80%] -translate-y-16  border-[2px] ml-2 w-[95%] rounded-lg border-red-400 flex">
                <Map/>
              </div>
              
            </div>
          </div>
          <div className="w-[50%] ">
           <ContactUs/>
          </div>
        </div>
        {/* <div className=" translate-y-16 bg-black h-20 p-4 w-10 m-auto"></div> */}
      </div>
      <Footer2 />
    </>
  );
};

export default ContactContainer;
