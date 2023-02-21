import React from "react";
import Header from "../../components/Header";

const CareerContainer = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="ContactUs_section w-full h-[600px] flex flex-col-reverse lg:flex-row ">
          <div className="flex flex-col  w-full lg:w-[50%]">
            <div className=" w-full  lg:translate-y-16">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_xt3zjwah.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
          </div>
          <div className=" w-full lg:w-[50%] lg:translate-y-0  lg:translate-x-2 translate-y-[730px] lg:flex items-end justify-center  ">
            <div className="h-[120px] lg:static  left-0  translate-y-[-26rem] flex items-center lg:translate-x-6 lg:translate-y-[-4rem] flex-col ">
              <h2 className="text-white  text-4xl lg:text-[2.3rem]  text-center">
                We Are Looking For A Self-Motivated <br /> And Unique
                Personality
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-300 h-fit">
        <div className="h-20 flex justify-center items-center w-full lg:w-[92%] m-auto bg-slate-500">
          <h1 className="text-4xl font-bold">Our Job Vacancy</h1>
        </div>
        <div className=" w-fit h-fit grid items-end m-auto bg-slate-800 ">
          <div className="grid px-28 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-[4rem] ">
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
                <div>
                    <img src="" alt="" />
                </div>
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Content Writer</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Laravel Developer</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Graphics Designer</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Logo Designing</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Web Designer</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
            <div className="h-[500px] w-[300px] rounded-xl bg-pink-300 flex items-end">
              <div className="h-[250px] w-[300px] rounded-xl bg-pink-500">
                <h1  className="Job-title font-bold text-2xl">Photographer</h1>
                <p>
                  Functional Title: Marketing member Corporate Title: Marketing
                  member No. of Vacancies: 1 Posted date : Feb 07, 2023 View
                  Detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContainer;
