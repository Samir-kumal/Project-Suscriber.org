import React, { useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactusImage from "../../Images/ContactusImage.png";
import MapImage from "../../Images/mapImage.png";
import "./index.css";
import { NavLink } from "react-router-dom";
import Service from "../../service/contact";
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
              <h2 className="text-white  text-4xl lg:text-6xl  font-bold text-center">
                Let's Connect
              </h2>

              <p className=" text-white  text-lg lg:text-xl text-center">
                Please feel free to reach out. <br /> We'll try our best to
                satisfy your needs
              </p>
              <div className="flex gap-6 z-10 py-5">              
                  <a href={FacebookLink}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_279_1016)">
                        <path
                          d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1016">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                
                <div>
                  <a href={TwitterLink}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.095 43.5013C33.2083 43.5013 43.1155 28.4946 43.1155 15.4808C43.1155 15.0546 43.1155 14.6302 43.0867 14.2078C45.0141 12.8137 46.6778 11.0876 48 9.11024C46.2028 9.90704 44.2961 10.4293 42.3437 10.6597C44.3996 9.42905 45.9383 7.49324 46.6733 5.21264C44.7402 6.35985 42.6253 7.16829 40.4198 7.60304C38.935 6.02419 36.9712 4.97872 34.8324 4.6284C32.6935 4.27809 30.4988 4.64247 28.5879 5.66514C26.677 6.68782 25.1564 8.31178 24.2615 10.2857C23.3665 12.2597 23.1471 14.4736 23.6371 16.5848C19.7218 16.3884 15.8915 15.3709 12.3949 13.5982C8.89831 11.8256 5.81353 9.33756 3.3408 6.29552C2.08146 8.46351 1.69574 11.03 2.2622 13.4724C2.82865 15.9147 4.30468 18.0494 6.38976 19.4418C4.82246 19.3958 3.2893 18.973 1.92 18.2091V18.3339C1.92062 20.6076 2.7077 22.8111 4.14774 24.5707C5.58778 26.3302 7.59212 27.5375 9.8208 27.9877C8.37096 28.3831 6.84975 28.441 5.37408 28.1566C6.00363 30.1133 7.22886 31.8243 8.87848 33.0505C10.5281 34.2767 12.5197 34.9568 14.5747 34.9957C12.5329 36.6006 10.1946 37.7873 7.69375 38.4877C5.19287 39.1881 2.57843 39.3886 0 39.0776C4.50367 41.9676 9.74385 43.5006 15.095 43.4936"
                        fill="#1DA1F2"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={InstagramLink}>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_279_1014)">
                        <path
                          d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                          fill="#000100"
                        />
                        <path
                          d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                          fill="#000100"
                        />
                        <path
                          d="M39.6937 11.1845C39.6937 12.7783 38.4 14.0627 36.8156 14.0627C35.2219 14.0627 33.9375 12.7689 33.9375 11.1845C33.9375 9.59077 35.2313 8.3064 36.8156 8.3064C38.4 8.3064 39.6937 9.60015 39.6937 11.1845Z"
                          fill="#000100"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1014">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={LinkedInLink}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_279_1013)">
                        <path
                          d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                          fill="#0A66C2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1013">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href={YoutubeLink}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_279_1012)">
                        <path
                          d="M47.0442 12.3708C46.7728 11.3496 46.238 10.4177 45.4933 9.66813C44.7485 8.9186 43.82 8.37782 42.8006 8.09991C39.0479 7.09082 24.0479 7.09082 24.0479 7.09082C24.0479 7.09082 9.04785 7.09082 5.29512 8.09991C4.27571 8.37782 3.34717 8.9186 2.60243 9.66813C1.85768 10.4177 1.32286 11.3496 1.05149 12.3708C0.0478517 16.1399 0.0478516 23.9999 0.0478516 23.9999C0.0478516 23.9999 0.0478517 31.8599 1.05149 35.629C1.32286 36.6502 1.85768 37.5822 2.60243 38.3317C3.34717 39.0812 4.27571 39.622 5.29512 39.8999C9.04785 40.909 24.0479 40.909 24.0479 40.909C24.0479 40.909 39.0479 40.909 42.8006 39.8999C43.82 39.622 44.7485 39.0812 45.4933 38.3317C46.238 37.5822 46.7728 36.6502 47.0442 35.629C48.0479 31.8599 48.0479 23.9999 48.0479 23.9999C48.0479 23.9999 48.0479 16.1399 47.0442 12.3708Z"
                          fill="#FF0302"
                        />
                        <path
                          d="M19.1387 31.1373V16.8628L31.6841 24.0001L19.1387 31.1373Z"
                          fill="#FEFEFE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_1012">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit Main-body-contact">
        <div className=" h-fit  py-4">
          <div className="m-auto flex w-[1250px]">
            <div className=" w-[50%] h-24 lg:h-[400px] flex justify-center   flex-col ">
              <div className="translate-y-12 lg:-translate-y-20 lg:translate-x-10">
                <h1 className="font-bold text-2xl w-screen lg:text-3xl mb-5">
                  We Would Love To Hear From You
                </h1>
                <p className="w-screen text-lg lg:text-lg py-1">
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
                className="translate-y-12 lg:static top-[690px] right-0 -z-10 lg:z-0 absolute "
                src={ContactusImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[1250px] h-fit lg:h-[550px] flex flex-col lg:flex-row   m-auto">
          <div className="location-map relative    w-[50%]">
            <div className="absolute  translate-y-[-5rem] lg:translate-x-2   lg:-translate-y-4">
              <h1 className=" text-xl lg:text-3xl font-bold">Contact us</h1>
              <p className=" text-lg lg:text-xl">
                Want to get in touch? We'd love to hear from you.
              </p>
            </div>
            <div className="flex lg:w-full  w-screen items-end  h-[90%] ">
              <img
                className=" h-[88%]  border-[3px] ml-2 w-[95%] rounded-lg border-red-400 flex"
                src={MapImage}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] ">
            <form onSubmit={handleFormSubmit}>
              <h1 className="m-4 translate-x-12 text-2xl font-bold"></h1>
              <div className="form-fillup w-full lg:w-[600px]  m-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-screen lg:w-[95%]">
                  <input
                    className="w-[95%]"
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
                  className="inputField mx-4 my-6 text-xl font-bold hover:bg-red-600 transition duration-200  bg-red-400 py-4 px-10 text-white rounded-xl w-[95%]"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className=" translate-y-16 h-20 p-4 w-[1150px] m-auto"></div>
      </div>
      <Footer />
    </>
  );
};

export default ContactContainer;
