import React from "react";
import Header from "../../components/Header";
import ContentWriter from "../../Images/Career Image/writer.png";
import LaravelDeveloper from "../../Images/Career Image/php.png";
import LogoDesigner from "../../Images/Career Image/logo-design.png";
import Photographer from "../../Images/Career Image/photographer.png";
import GraphicsDesigner from "../../Images/Career Image/graphic-designer.png";
import WebDeveloper from "../../Images/Career Image/designer.png";
import "./index.css"
import Footer from "../../components/Footer";
import Facebook from "../../assets/elements/Facebook";
import Twitter from "../../assets/elements/Twitter";
import Whatsapp from "../../assets/elements/Whatsapp";
const CareerContainer = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="ContactUs_section w-full h-[600px] flex flex-col-reverse lg:flex-row ">
          <div className="flex flex-col  w-full lg:w-[50%]">
            <div className=" w-full   lg:translate-y-16">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_xt3zjwah.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
          </div>
          <div className=" w-full lg:w-[50%] lg:translate-y-0  lg:translate-x-2  lg:flex items-end justify-center  ">
            <div className="h-[120px] lg:static   
             flex items-center lg:translate-x-6 lg:translate-y-[-4rem] flex-col ">
              <h2 className="text-white  text-4xl lg:text-[2.3rem]  text-center">
                We Are Looking For A Self-Motivated <br /> And Unique
                Personality
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   h-fit">
        <div className="h-20 flex justify-center items-center w-full lg:w-[92%] m-auto ">
          <h1 className="text-4xl font-bold">Our Job Vacancy</h1>
        </div>
        <div className=" w-fit h-fit grid items-end m-auto  ">
          <div className="grid lg:px-28 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-[4rem] ">
            <div className="h-[500px] w-[300px] rounded-xl grid bg-slate-400  items-end">
                <div className="flex justify-center items-center">
                    <img src={ContentWriter} className ="Career-images" alt="" />
                </div>
              <div className="h-[250px] w-[300px] Career-description   rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Content Writer</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-slate-400 grid items-end">
            <div className="flex justify-center items-center">
                    <img src={LaravelDeveloper} className ="Career-images" alt="" />
                </div>
              <div className="h-[250px] w-[300px] Career-description rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Laravel Developer</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-slate-400 grid items-end">
            <div className="flex justify-center items-center">
                    <img src={GraphicsDesigner} className ="Career-images" alt="" />
                </div>
              <div className="h-[250px] w-[300px] Career-description rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Graphics Designer</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-slate-400 grid items-end">
            <div className="flex justify-center items-center">
                    <img src={LogoDesigner} className ="Career-images" alt="" />
                </div>
              <div className="h-[250px] w-[300px] Career-description rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Logo Designing</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-slate-400 grid items-end">
            <div className="flex justify-center items-center">
                    <img src={WebDeveloper} className ="Career-images" alt="" />
                </div>
              <div className="h-[250px] w-[300px] Career-description rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Web Designer</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-slate-400 grid items-end">
            <div className="flex justify-center items-center">
                    <img src={Photographer} className ="Career-images" alt=""  />
                </div>
              <div className="h-[250px] w-[300px] Career-description rounded-xl bg-white">
                <h1  className="Job-title font-bold text-2xl">Photographer</h1>
                <p className="Career-paragraph">
                  <p>Functional Title: Marketing member </p>
                  <p>Corporate Title: Marketing</p>
                  <p>Member No. of Vacancies: 1</p>
                  <p>Posted date : Feb 07, 2023</p>
                   <p className="font-bold">Contact: <div className="flex justify-center gap-6"><a href=""><Facebook/></a> <a href=""><Whatsapp/></a></div></p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CareerContainer;
