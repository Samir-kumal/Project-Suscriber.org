import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useRef, useEffect } from "react";
import Mission from "../../Images/Mission.png";
import Vision from "../../Images/Vision.png";
import RequirementGathering from "../../Images/RequirementGathering.png";
import DesignAndDevelopment from "../../Images/DesignandDevelopment.png";
import QualityAssurance from "../../Images/QualityAssurance.png";
import DeploymentAndMaintainance from "../../Images/DeploymentAndMaintainance.png";
const AboutUs_Layout = () => {
  return (
    <>
      <Header />
      <div className="AboutUs_section w-full h-[600px] lg:flex">
        <div className="flex flex-col   lg:w-[50%]">
         <div className = "lg:translate-y-0 translate-y-[10rem]">
         <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_xt3zjwah.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
         </div>
        </div>
        <div className=" lg:w-[50%] flex absolute lg:static top-32 items-center justify-center flex-col ">
          <div className="translate-y-6">
            <h2 className="About-us-title text-white text-2xl lg:text-4xl font-serif font-bold text-center">
              About Us
            </h2>
            <br />
            <h1 className="text-4xl lg:text-6xl text-white font-serif font-bold">
              Your Idea, Our Work
            </h1>
            <p className=" font-semibold text-md text-white lg:text-lg text-center">
              Suscriber.Org is a revenue-based project company specializing in
              the IT
            </p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full p-10  m-auto ">
        <div className="w-[85%] m-auto h-fit ">
          <div className="w-full h-20 flex justify-center items-center">
            <h1 className="Introduction-title text-center text-4xl font-bold">Introduction</h1>
          </div>
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className=" w-full lg:w-[50%]">
              <h1 className="text-5xl text-red-600 font-bold font-serif">
                Suscriber,
              </h1>
              <p className="font-semibold lg:text-xl lg:w-3/4 w-full pt-4">
                Initially started from 4 members in Propose to help many digital
                Companies to build their presence in the internet. we came in an
                idea to solve those problems through our means. We slowly build
                our team motivation to serve our lovely customers, to help our
                Nepal grow digitally
              </p>
            </div>
            <div className="  w-full lg:w-[50%]  lg:h-fit h-[250px]  flex items-start justify-center">
            <div className="lg:translate-y-0 translate-y-[-5rem]">
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_xt3zjwah.json"
                background="transparent"
                speed="1"
                style={{ width: "400px", height: "400px" }}
                loop
                autoplay
              />
            </div>
            </div>
          </div>
          <div className="lg:flex   w-full lg:h-[600px]">
            <div className=" w-full lg:w-[50%] items-center flex flex-col pr-10">
              <img className="" src={Mission} alt="" height={150} width = {150}  />
              <h1 className="font-bold text-4xl py-6">Our Mission</h1>
              <p className="lg:text-xl">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner so that there is a long-term relationship between
                clients, employees, and other stakeholders.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col items-center">
              <img src={Vision} alt="" height={150} width = {150}  />
              <h1 className="font-bold text-4xl py-6">Our Vision</h1>
              <p className="lg:text-xl">
                Our effort is endless to make Softbenz Infosys a systematic and
                qualitative company in the IT sector. Every business requires
                digital identification in today’s era. Digital marketing is not
                a luxury but a necessity for your brand identification. Website
                is the most reliable tool for digital marketing which is even
                suggested by legal authorities in the case of Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-slate-300 flex justify-center items-center">
        <h1 className="text-center  text-3xl font-bold">How we Work</h1>
      </div>
      <div className="Process-Steps px-10 h-fit w-full ">
        <div className="m-auto  flex flex-col items-center justify-center">
          <div>
            <div className="Steps-Image w-full lg:w-[50%] bg-slate-500">
             <div className="h-20 bg-blue-600 w-fit">
             <img className="first-img bg-black"
                src={RequirementGathering}
                alt="Image"
               
              />
             </div>
            </div>
            <div className="Steps-description ">
              <div>
              <h2>Step-1</h2>
              <h1 className="text-4xl font-bold">Requirement Gathering</h1>
              <p>
                In this step, we generate a list of requirements from our
                clients. The requirement could be functional or technical. It
                acts as a basis on what the project is and generates information
                on how it could be tackled. Requirement gathering is the most
                important step in our workflow. Here, clients must co-ordinate
                with our team members on time with clear and effective
                information.
              </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" Steps-description ">
             <div>
             <h2>Step-2</h2>
              <h1 className="text-4xl font-bold">Design & Development</h1>
              <p>
                In this step, we generate a list of requirements from our
                clients. The requirement could be functional or technical. It
                acts as a basis on what the project is and generates information
                on how it could be tackled. Requirement gathering is the most
                important step in our workflow. Here, clients must co-ordinate
                with our team members on time with clear and effective
                information.
              </p>
             </div>
            </div>
            <div className="Steps-Image">
              <img
                src={DesignAndDevelopment}
                alt="Image"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div>
            <div className="Steps-Image ">
              <img
                src={QualityAssurance}
                alt="Image"
                width={500}
                height={500}
              />
            </div>
            <div className=" Steps-description">
              <div>
              <h2>Step-3</h2>
              <h1 className="text-4xl font-bold">Quality Assurance</h1>
              <p>
                In this step, we generate a list of requirements from our
                clients. The requirement could be functional or technical. It
                acts as a basis on what the project is and generates information
                on how it could be tackled. Requirement gathering is the most
                important step in our workflow. Here, clients must co-ordinate
                with our team members on time with clear and effective
                information.
              </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" Steps-description">
             <div>
             <h2>Step-4</h2>
              <h1 className="text-4xl font-bold">Deployment & Maintenance</h1>
              <p>
                In this step, we generate a list of requirements from our
                clients. The requirement could be functional or technical. It
                acts as a basis on what the project is and generates information
                on how it could be tackled. Requirement gathering is the most
                important step in our workflow. Here, clients must co-ordinate
                with our team members on time with clear and effective
                information.
              </p>
             </div>
            </div>
            <div className="Steps-Image ">
              <img
                src={DeploymentAndMaintainance}
                alt="Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs_Layout;
