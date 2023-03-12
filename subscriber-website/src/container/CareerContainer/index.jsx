import React from "react";
import Header from "../../components/Header";
import ContentWriter from "../../Images/Career Image/writer.png";
import LaravelDeveloper from "../../Images/Career Image/php.png";
import LogoDesigner from "../../Images/Career Image/logo-design.png";
import Photographer from "../../Images/Career Image/photographer.png";
import GraphicsDesigner from "../../Images/Career Image/graphic-designer.png";
import WebDeveloper from "../../Images/Career Image/designer.png";
import "./index.css";
import Footer from "../../components/Footer";
import Facebook from "../../assets/elements/Facebook";
import Twitter from "../../assets/elements/Twitter";
import Whatsapp from "../../assets/elements/Whatsapp";
import Footer2 from "../../components/Footer2";
import Subscription from "../../assets/Header Logo Packages/subscription.png";
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
            <div
              className="h-[120px] lg:static   
             flex items-center lg:translate-x-6 lg:translate-y-[-4rem] flex-col "
            >
              <h2 className="text-white  text-4xl lg:text-[2.3rem] lg:block md:block hidden  text-center">
                We Are Looking For A Self-Motivated <br /> And Unique
                Personality
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   h-fit">
        <div className="h-20 flex justify-center items-center w-full lg:w-[92%] m-auto ">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
        <div className=" w-fit h-fit grid items-end m-auto  ">
          <div className="grid lg:px-28 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-[4rem] ">
            <div className="h-[600px] w-[350px] rounded-xl grid bg-slate-400  items-end">
              <div className="flex justify-center items-center">
                <img src={ContentWriter} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description   rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">
                  Content Writing
                </h1>
                <p className="Career-paragraph">
                  At Subscriber Tech, we offer high-quality content writing
                  services to help businesses establish a strong online presence
                  and connect with their target audience. Our team of
                  experienced content writers understands the importance of
                  creating compelling, engaging content that resonates with your
                  audience and drives results.
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href="">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
            <div className="h-[600px] w-[350px] rounded-xl bg-slate-400 grid items-end">
              <div className="flex justify-center items-center">
                <img src={Subscription} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">
                  Subscription Services
                </h1>
                <p className="Career-paragraph">
                  At Subscriber Tech, we offer subscription services for social
                  media platforms such as YouTube, Facebook, and Twitter, to
                  help businesses grow their online presence and reach their
                  target audience. Our subscription services are designed to
                  help businesses increase their followers, engagement, and
                  conversions on these social media platforms.
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href=" https://wa.me/9815904119">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
            <div className="h-[600px] w-[350px] rounded-xl bg-slate-400 grid items-end">
              <div className="flex justify-center items-center">
                <img src={GraphicsDesigner} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">
                  Graphics Designing
                </h1>
                <p className="Career-paragraph">
                  At Subscriber Tech, we offer professional graphics designing
                  services to help businesses create visually appealing and
                  engaging graphics that resonate with their audience and drive
                  results. Our team of experienced designers understands the
                  importance of creating graphics that represent your brand
                  values and connect with your target audience.
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href="https://wa.me/9815904119">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
            <div className="h-[600px] w-[350px] rounded-xl bg-slate-400 grid items-end">
              <div className="flex justify-center items-center">
                <img src={LogoDesigner} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">Logo Designing</h1>
                <p className="Career-paragraph">
                  At Subscriber Tech, we offer professional logo designing
                  services to help businesses establish a strong and
                  recognizable brand identity. Our team of experienced designers
                  understands the importance of creating a unique and memorable
                  logo that represents your brand and connects with your target
                  audience.
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href="https://wa.me/9815904119">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
            <div className="h-[600px] w-[350px] rounded-xl bg-slate-400 grid items-end">
              <div className="flex justify-center items-center">
                <img src={WebDeveloper} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">Web Designing</h1>
                <p className="Career-paragraph">
                  <p>
                    we offer professional web design services to help businesses
                    establish a strong online presence and connect with their
                    target audience. Our team of experienced designers
                    understands the importance of creating a website that is
                    both visually appealing and user-friendly, while also
                    optimized for search engines and designed to drive results.
                  </p>
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href="https://wa.me/9815904119">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
            <div className="h-[600px] w-[350px] rounded-xl bg-slate-400 grid items-end">
              <div className="flex justify-center items-center">
                <img src={Photographer} className="Career-images" alt="" />
              </div>
              <div className="h-[350px] w-[350px] Career-description rounded-xl bg-white">
                <h1 className="Job-title font-bold text-2xl">Photography</h1>
                <p className="Career-paragraph">
                  At Subscriber Tech, we offer professional photography services
                  to help businesses create visually appealing and engaging
                  photos that resonate with their audience and drive results.
                  Our team of experienced photographers understands the
                  importance of creating high-quality images that represent your
                  brand values and connect with your target audience.
                  <p className="font-bold">
                    Contact:{" "}
                    <div className="flex justify-center gap-6">
                      <a href="">
                        <Facebook />
                      </a>{" "}
                      <a href="https://wa.me/9815904119">
                        <Whatsapp />
                      </a>
                    </div>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default CareerContainer;
