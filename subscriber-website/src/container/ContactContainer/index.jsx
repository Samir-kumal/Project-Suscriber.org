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
const ContactContainer = () => {
  const [result, setResult] = useState({});
  const [isSending, setSending] = useState(false);
  const [isError, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    subject: "",
    message: "",
  });

  let FacebookLink = "https://www.facebook.com/suscribernepal";
  let TwitterLink = "https://twitter.com/";
  let InstagramLink = "https://www.instagram.com/samer_kumal/";
  let LinkedInLink = "https://www.linkedin.com/";
  let YoutubeLink = "https://www.youtube.com/";

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    const res = await Service.Contact(formData);
    const { data } = res;
    setResult(data);
  };
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
        <div className=" h-fit  py-4">
          <div className="m-auto flex   lg:w-[1250px]">
            <div className=" w-[50%] h-24 lg:h-[400px] flex justify-center   flex-col ">
              <div className="translate-y-12 lg:-translate-y-20 lg:translate-x-10">
                <h1 className="font-bold text-2xl w-screen lg:text-3xl mb-5">
                  We Would Love To Hear From You
                </h1>
                <p className="w-screen  text-lg lg:text-lg py-1">
                  {" "}
                  Phone no : +9779806133772
                </p>
                <p className="w-screen text-lg lg:text-lg py-1">
                  {" "}
                  Telephone no: 01-521345
                </p>
                <p className="w-screen text-lg lg:text-lg py-1">
                  {" "}
                  Email : suscriber@gmail.com
                </p>
              </div>
            </div>

            <div className=" flex h-[380px] lg:-translate-y-16  justify-center w-[50%]">
              <img
                className="translate-y-12 lg:static lg:top-[690px] right-0 -z-10 lg:z-0 h-[300px] absolute "
                src={ContactusImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[1250px] h-fit lg:h-[550px] flex flex-col lg:flex-row   m-auto">
          <div className="location-map relative lg:-translate-y-24   lg:w-[50%]">
            <div className=" w-full  lg:translate-x-2   lg:translate-y-8">
              <h1 className=" text-xl lg:text-3xl font-bold">Contact us</h1>
              <p className=" text-lg lg:text-xl">
                Want to get in touch? We'd love to hear from you.
              </p>
            </div>
            <div className="flex lg:w-full  w-screen items-end  h-[90%] ">
              <div  className=" h-[88%]  border-[2px] ml-2 w-[95%] rounded-lg border-red-400 flex">
                <Map/>
              </div>
              
            </div>
          </div>
          <div className="w-[50%] ">
            <form onSubmit={handleFormSubmit}>
              <h1 className="m-4 translate-x-12 text-2xl font-bold"></h1>
              <div className="form-fillup w-full lg:w-[600px]  m-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-screen lg:w-[95%]">
                  <input
                    className="w-[95%] "
                    type="text"
                    name="name"
                    required={true}
                    onChange={handleInputChange}
                    placeholder="Full name"
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  <input
                    className="w-[95%] "
                    type="email"
                    placeholder="Email"
                    name="email"
                    required={true}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  {" "}
                  <input
                    className="w-[95%] "
                    type="text"
                    placeholder="Phone"
                    name="phoneno"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  {" "}
                  <input
                    className="  w-[95%] "
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-screen lg:w-[95%]">
                <textarea
                  className="text-comment w-[95%] p-3 mx-4"
                  name="message"
                  placeholder="Write us a message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {isSending}
                <input
                  className="inputField mx-4
                   my-6 text-xl font-bold hover:bg-red-600
                    transition duration-200  bg-red-400 py-4
                     px-10 text-white rounded-xl w-[95%]"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        {/* <div className=" translate-y-16 bg-black h-20 p-4 w-10 m-auto"></div> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactContainer;
