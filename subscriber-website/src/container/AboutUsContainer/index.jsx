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
          <div className="lg:translate-y-16  translate-y-[18rem]">
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
          <div className="translate-y-24">
            <h1 className="text-4xl text-center lg:translate-x-0   translate-x-4 lg:text-6xl text-white font-semibold">
              Your Idea, Our Work
            </h1>
          </div>
        </div>
      </div>
      <div className="h-fit w-full lg:px-10 py-6  m-auto ">
        <div className="lg:w-[95%] w-full bg-white p-8 rounded-xl m-auto h-fit ">
          <div className="w-full h-20 flex justify-center items-center">
            <h1 className="Introduction-title text-center text-4xl font-bold">
              Introduction
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className=" w-full lg:w-[50%] lg:pr-10 lg:translate-x-16">
              <h1 className="text-5xl text-red-600 font-bold font-serif">
                Suscriber,
              </h1>
              <p className=" Paragraph-justification lg:text-md lg:w-3/4 w-full pt-4">
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
          <div className="lg:flex    w-full lg:h-[420px]">
            <div className=" w-full lg:w-[50%] pt-12 lg:pt-0 items-center flex flex-col lg:pr-10">
              <img className="lg:h-[120px] h-[100px] lg:w-[120px]" src={Mission} alt="" />
              <h1 className="font-bold lg:text-4xl text-2xl py-6   ">Our Mission</h1>
              <p  className="Paragraph-justification lg:text-md lg:w-3/4">
                We directly approach our goal and prove to be best with our
                clients by evaluating their resources in the best possible way.
                We are in the developing stage but never showcase it as our
                limitations. Our business empowers you and your company in the
                right manner so that there is a long-term relationship between
                clients, employees, and other stakeholders.
              </p>
            </div>
            <div className="w-full lg:w-[50%] pt-12 lg:pt-0 flex flex-col items-center">
              <img className="lg:h-[110px] h-[100px]  lg:w-[110px]" src={Vision} alt=""  />
              <h1 className="font-bold text-4xl py-6">Our Vision</h1>
              <p className= "Paragraph-justification lg:text-md lg:w-3/4">
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
      <div className="h-20 bg-slate-100 flex justify-center items-center"></div>
      <div className="flex bg-slate-100 Process-Steps lg:px-10  h-fit w-full ">
        <div className="m-auto bg-white lg:w-[95%] w-full pt-10  rounded-xl flex flex-col items-center justify-center">
          <h1 className="How-we-work  text-center text-4xl font-bold pb-10">
            How we Work
          </h1>

          <div className="lg:flex-row  flex flex-col">
            <div className="Steps-Image w-full lg:w-[50%]  flex justify-center ">
              <div className="h-[300px] flex justify-center  w-fit">
                <img
                  className="first-img "
                  src={RequirementGathering}
                  alt="Image"
                />
              </div>
            </div>
            <div className="Steps-description  lg:translate-x-12  lg:w-[50%] w-full  flex justify-center ">
              <div className="w-full">
                <h2 className="text-slate-500 text-sm">Step-1</h2>
                <h1 className="text-3xl font-bold mb-3">
                  Requirement Gathering
                </h1>
                <p className="Paragraph-justification">
                  In this step, we generate a list of requirements from our
                  clients. The requirement could be functional or technical. It
                  acts as a basis on what the project is and generates
                  information on how it could be tackled. Requirement gathering
                  is the most important step in our workflow. Here, clients must
                  co-ordinate with our team members on time with clear and
                  effective information.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col-reverse">
            <div className=" Steps-description lg:translate-x-16 lg:w-[50%] w-full   flex justify-center ">
              <div className="Steps-info  w-[600px]">
                <h2 className="text-slate-500 text-sm">Step-2</h2>
                <h1 className="text-3xl font-bold mb-3">Design & Development</h1>
                <p className="Paragraph-justification">
                  In this step, we generate a list of requirements from our
                  clients. The requirement could be functional or technical. It
                  acts as a basis on what the project is and generates
                  information on how it could be tackled. Requirement gathering
                  is the most important step in our workflow. Here, clients must
                  co-ordinate with our team members on time with clear and
                  effective information.
                </p>
              </div>
            </div>
            <div className="Steps-Image w-full lg:w-[50%] flex justify-center ">
              <div className="h-[300px] flex justify-center  w-fit">
                <img
                  className="first-img "
                  src={DesignAndDevelopment}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col">
            <div className="Steps-Image  w-full lg:w-[50%] flex justify-center">
              <div className="h-[300px] flex justify-center  w-fit">
                <img
                  className="first-img "
                  src={QualityAssurance}
                  alt="Image"
                />
              </div>
            </div>
            <div className=" Steps-description lg:translate-x-12 lg:w-[50%] w-full  flex justify-center">
              <div>
                <h2 className="text-slate-500 text-sm">Step-3</h2>
                <h1 className="text-3xl font-bold mb-3">Quality Assurance</h1>
                <p className="Paragraph-justification">
                  In this step, we generate a list of requirements from our
                  clients. The requirement could be functional or technical. It
                  acts as a basis on what the project is and generates
                  information on how it could be tackled. Requirement gathering
                  is the most important step in our workflow. Here, clients must
                  co-ordinate with our team members on time with clear and
                  effective information.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col-reverse">
            <div className=" Steps-description lg:translate-x-16 lg:w-[50%] w-full  flex justify-center">
              <div>
                <h2 className="text-slate-500 text-sm">Step-4</h2>
                <h1 className="text-3xl font-bold mb-3">Deployment & Maintenance</h1>
                <p className="Paragraph-justification">
                  In this step, we generate a list of requirements from our
                  clients. The requirement could be functional or technical. It
                  acts as a basis on what the project is and generates
                  information on how it could be tackled. Requirement gathering
                  is the most important step in our workflow. Here, clients must
                  co-ordinate with our team members on time with clear and
                  effective information.
                </p>
              </div>
            </div>
            <div className="Steps-Image w-full lg:w-[50%]   flex justify-center">
              <div className="h-[300px] flex justify-center  w-fit">
                <img
                  className="first-img "
                  src={DeploymentAndMaintainance}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs_Layout;
