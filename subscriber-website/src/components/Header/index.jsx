import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Image from "../../assets/site-logo.png";
import { useRef } from "react";
import WebDevelopment from "../../assets/Header Logo Packages/web.png";
import Subscription from "../../assets/Header Logo Packages/subscription.png";
import Introduction from "../../assets/Header Logo Packages/handshake.png";
import Work from "../../assets/Header Logo Packages/workflow.png";
import Team from "../../assets/Header Logo Packages/man.png";
import { useState } from "react";
// import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
const Header = () => {
  const [Menu, setMenu] = useState(true);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const [subMenu3, setSubMenu3] = useState(false);
  const [Navbar, setNavbar] = useState(false);
  const location = useLocation();
  // const header = document.querySelector('header');
  let navbarStyle = {};

  const Toggle = () => {
    if (Menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const [isClicked, setClicked] = useState("none");
  const setInquiryContainer = () => {
    if (isClicked === "none") {
      return setClicked("block");
    } else {
      return setClicked("none");
    }
  };

  //   function handleHeaderColor() {
  //     if (menu) {
  //       header.style.backgroundColor = "white";
  //     } else {
  //       header.style.backgroundColor = "transparent";
  //     }
  //     if (window.scrollY > 80) {
  //       header.style.backgroundColor = "red";
  //     }
  //   }

  // let menu = false;
  // document.querySelector(".menu-button").addEventListener("click", () => {
  //   menu = !menu;
  //   handleHeaderColor();
  // });

  // window.addEventListener("scroll", handleHeaderColor);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const headerscroll = () => {
      if (window.scrollY >= 80) {
        if (window.innerWidth <= 1024 || window.innerWidth > 1024) {
          setNavbar(true);
        }
      } else {
        if (window.innerWidth <= 1024 || window.innerWidth > 1024) {
          setNavbar(false);
        }
      }
    };

    headerscroll();
    window.addEventListener("scroll", headerscroll);

    return () => {
      window.removeEventListener("scroll", headerscroll);
    };
  }, []);

  if (
    location.pathname === "/about" ||
    location.pathname === "/pricing" ||
    location.pathname === "/career" ||
    location.pathname === "/portfolio" ||
    location.pathname === "/contact" ||
    location.pathname === "/team"
  ) {
    navbarStyle = { backgroundColor: "transparent" };
  } else if (location.pathname === "/") {
    navbarStyle = { backgroundColor: "transparent" };
  } else if (location.pathname === "/PrivacyPolicy") {
    navbarStyle = { color: "#000" };
  } else if (location.pathname === "/Terms&condition") {
    navbarStyle = { color: "#000" };
  } else {
    navbarStyle = { backgroundColor: "#fff" };
  }

  const subMenu_mobile = () => {
    if (window.innerWidth >= 1024) {
      setSubMenu1(true);
      console.log("submenu changed");
    } else {
      setSubMenu1(false);
      console.log("submenu did changed");
    }
  };

  return (
    <header
      style={navbarStyle}
      className={
        Navbar
          ? "Navbar sticky text-black top-0  h-20 w-full  lg:flex items-center justify-between"
          : "Navbar fixed text-white top-0 z-10 h-20 w-full lg:flex items-center justify-between"
      }
    >
      <div className="logo translate-y-4 lg:translate-y-0 lg:translate-x-28">
        <NavLink to={"/"}>
          <img src={Image} alt="" height="90px" width="90px" />
        </NavLink>
      </div>
      {Menu && (
        <div className="lg:flex lg:w-[80%] w-screen  Navmenu  transition duration-200 ">
          <div className="menu flex   items-center   ">
            <ul className="menu-items lg:items-center lg:flex lg:translate-x-4  xl:gap-[2px] lg:gap-0">
              <li className="menu-home menu-item   main-home text-xl px-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() =>
                  window.innerWidth <= 1024 && !subMenu1
                    ? setSubMenu1(true)
                    : setSubMenu1(false)
                }
                // onClick={() =>
                //   !subMenu1 ? setSubMenu1(true) : setSubMenu1(false)
                // }
                // onMouseOver ={()=> window.innerWidth <1024 ? setSubMenu1(true)} onMouseLeave ={()=> setSubMenu1(false)}
                onMouseOver={() =>
                  window.innerWidth > 1024 && setSubMenu1(true)
                }
                onMouseLeave={() =>
                  window.innerWidth > 1024 && setSubMenu1(false)
                }
                className="menu-services menu-item  text-xl px-4"
              >
                <NavLink to="/career">Services</NavLink>
                {/* {subMenu1 && (
                  <div
                    className=" sub-menu z-10 bg-white  p-4 
                  shadow-xl lg:absolute lg:left-[-250px] transition duration-300  lg:h-fit pb-4 h-fit   lg:invisible lg:opacity-0 lg:translate-y-[2.5rem] "
                    onMouseOver={() =>
                      window.innerWidth > 1024 && setSubMenu1(true)
                    }
                    onMouseLeave={() =>
                      window.innerWidth > 1024 && setSubMenu1(false)
                    }
                  >
                    <div className="bg-white  w-[1200px]">
                      <hr className="p-1 border-t-2 " />
                      <ul className="pl-4  font-bold text-black text-lg lg:grid lg:grid-cols-4">
                        <li>
                          <a href="">Logo Designing</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>
                        <span className="h-40 opacity-10 rounded-xl w-[2px] mt-2 bg-black left-[26%] absolute"></span>

                        <li>
                          <a href="">Digital marketing</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>
                        <span className="h-40 opacity-10 rounded-xl w-[2px] mt-2 bg-black left-[50%] absolute"></span>

                        <li>
                          <a href="">Branding</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>
                        <span className="h-40 opacity-10 rounded-xl w-[2px] mt-2 bg-black left-[73.2%] absolute"></span>

                        <li>
                          <a href="">Web Designing</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>

                        <li>
                          <a href="">Online reception services</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>
                        <li>
                          <a href="">UI/UX</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )} */}
              </li>
              <li
                onClick={() =>
                  !subMenu2 ? setSubMenu2(true) : setSubMenu2(false)
                }
                onMouseOver={() =>
                  window.innerWidth > 1024 && setSubMenu2(true)
                }
                onMouseLeave={() =>
                  window.innerWidth > 1024 && setSubMenu2(false)
                }
                className="menu-pricing menu-item  text-xl px-4"
              >
                <NavLink to="/pricing">Pricing</NavLink>
                {subMenu2 && (
                  <div
                    onMouseOver={() => setSubMenu1(true)}
                    onMouseLeave={() => setSubMenu1(false)}
                    className=" sub-menu rounded z-10 
                  shadow-xl p-6  bg-white lg:rounded-xl  lg:absolute  lg:h-[390px] lg:left-[-300px] 
                   lg:invisible lg:opacity-0 lg:translate-y-[2.5rem]  "
                  >
                    <div className="w-[700px]">
                      <hr className="p-1 border-t-2 " />
                      <ul className="pl-4 font-bold text-black text-lg lg:grid gap-x-6 lg:grid-cols-2">
                        <li className="relative ">
                          <div className="mb-4">
                            <img
                              className="translate-x-8"
                              src={WebDevelopment}
                              alt=""
                              height={150}
                              width={150}
                            />
                          </div>
                          {/* <img src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-Web-Development-seo-and-marketing-vectorslab-flat-vectorslab.png"height={80} width = {80} /> */}
                          <NavLink to={"/pricing"}><p>Web Development pakages</p></NavLink>
                          <p className="text-sm font-light text-justify ">
                            Our packages are designed to provide end-to-end
                            solutions, from design and development to hosting
                            and maintenance, ensuring that your website stays
                            up-to-date and fully functional. So why wait? Choose
                            one of our web development packages today and take
                            your business to the next level!
                          </p>
                          <span className="h-[19rem] opacity-10 rounded-xl w-[2px] mt-2 bg-black top-0 -right-[0.7rem] absolute"></span>
                        </li>

                        {/* <li>
                          <a href="">Digital marketing pakages</a>
                          <p className="text-sm font-light ">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </li> */}
                        {/* <span className="h-40 opacity-10 rounded-xl w-[2px] mt-2 bg-black left-[65%] absolute"></span> */}

                        <li>
                          <div className=" mb-4">
                            <img
                              className="translate-x-8"
                              src={Subscription}
                              alt=""
                              height={150}
                              width={150}
                            />
                          </div>
                          <NavLink to={"/pricing"}><p>Subsription packages</p></NavLink>
                          <p className="text-sm font-light text-justify ">
                            Our packages are designed to provide end-to-end
                            solutions, from design and development to hosting
                            and maintenance, ensuring that your website stays
                            up-to-date and fully functional. So why wait? Choose
                            one of our web development packages today and take
                            your business to the next level!
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li className="menu-portfolio menu-item  text-xl px-4">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li
                onClick={() =>
                  !subMenu3 ? setSubMenu3(true) : setSubMenu3(false)
                }
                onMouseOver={() =>
                  window.innerWidth > 1024 && setSubMenu3(true)
                }
                onMouseLeave={() =>
                  window.innerWidth > 1024 && setSubMenu3(false)
                }
                className=" menu-about text-xl px-4"
              >
                <NavLink to="/about">About us</NavLink>
                {subMenu3 && (
                  <div
                    onMouseOver={() => setSubMenu1(true)}
                    onMouseLeave={() => setSubMenu1(false)}
                    className="sub-menu
                    shadow-xl lg:rounded-xl z-10  p-4 bg-white lg:absolute  lg:left-[-350px]  lg:h-[380px]  
                        lg:opacity-1 lg:translate-y-[2.5rem] "
                  >
                    <div className="w-[800px]">
                      <hr className="p-1 border-t-2 " />
                      <ul className="pl-4 font-bold text-lg text-black lg:grid lg:grid-cols-3 lg:gap-10">
                        <li className="relative">
                          {/* <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-bipartisan-politics-flaticons-lineal-color-flat-icons-2.png" height={80} width = {80} /> */}
                          <div className=" mb-4">
                            <img
                              src={Introduction}
                              alt=""
                              width={120}
                              height={120}
                            />
                          </div>
                          <NavLink to={"/about"}><p>Introduction</p></NavLink>
                          <p className="text-sm font-light text-justify ">
                            Welcome to Subscriber Tech, your one-stop-shop for
                            all your digital marketing needs! We are a leading
                            digital marketing company dedicated to helping
                            businesses of all sizes and industries succeed
                            online.
                          </p>
                          <span className="h-[19rem] opacity-10 rounded-xl w-[2px] mt-2 bg-black top-0 -right-4 absolute"></span>
                        </li>
                        <li className="relative">
                          {/* <img src="https://img.icons8.com/external-nawicon-flat-nawicon/64/null/external-Work-Process-business-management-nawicon-flat-nawicon.png" height={80} width = {80} />
                           */}
                          <div className=" mb-4">
                            <img src={Work} alt="" width={120} height={120} />
                          </div>
                          <NavLink to={"/about"}><p>How we work</p></NavLink>
                          <p className="text-sm font-light text-justify">
                            At Subscriber Tech, we follow a comprehensive
                            approach to deliver high-quality digital marketing
                            solutions to our clients.Our proven process ensures
                            that your solution is delivered on time, within
                            budget, and to your complete satisfaction.
                          </p>
                          <span className="h-[19rem] w-[2px] opacity-10 rounded-xl mt-2 bg-black top-0  -right-4 absolute"></span>
                        </li>

                        <li>
                          {/* <img src="https://img.icons8.com/office/64/null/conference-call.png" height={80} width = {80} /> */}
                          <div className=" mb-4">
                            <img src={Team} alt="" width={120} height={120} />
                          </div>
                          <NavLink to={"/team"}><p>Our Team</p></NavLink>
                          <p className="text-sm font-light text-justify ">
                            At Subscriber Tech, our team consists of a group of
                            highly skilled and experienced professionals who are
                            dedicated to providing our clients with the best
                            possible digital marketing solutions.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              {/* <li className="menu-careers menu-item  text-xl px-4">
                <NavLink to="/career">Careers</NavLink>
              </li> */}
              <li className="menu-contact menu-item  text-xl px-4">
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li className="menu-contact menu-item  text-xl px-4">
                <NavLink>Blogs</NavLink>
              </li>
              <li>
              <button
              onClick={setInquiryContainer}
              className="header-Btn lg:text-black  border-2 translate-y-0 translate-x-16  border-red-500 font-semibold text-white lg:bg-white lg:hover:bg-red-500 lg:hover:text-white transition duration-200 bg-red-600 px-4 py-3 rounded-3xl"
            >
              Join with us
            </button>
              </li>
            </ul>
          </div>
          <div className="wrapper" style={{ display: `${isClicked}` }}>
            {/* `${isClicked}` */}
            <div className="InquiryContainer">
              <div className="InquiryContainer-Header">
                <button className="CloseForm" onClick={setInquiryContainer}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="InquiryContainer-Body">
                <div className="Body-left ">
                  <div className="left-r-1">
                    <p className="p-1">We would love to hear from you</p>
                    <p className="p-2">Get in touch</p>
                  </div>
                  <div className="left-r-2">
                    <div className="left-col">
                      <div className="left-col-wrapper">
                        <div className="left-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="info">
                          <h1>Office Address</h1>
                          <p>Butwal-4, Anything you like</p>
                        </div>
                      </div>
                    </div>
                    <div className="left-col">
                      <div className="left-col-wrapper">
                        <div className="left-icon">
                          <i className="fa-solid fa-phone"></i>
                        </div>

                        <div className="info">
                          <h1>Our Phone Number</h1>
                          <p>
                            +977 <a href="tel:9815904119">9815904119</a>
                          </p>
                          <p>
                            +977 <a href="tel:9866615358">9866615358</a>
                          </p>
                          <p>
                            +977 <a href="tel:9806133772">9806133772</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="left-col">
                      <div className="left-col-wrapper">
                        <div className="left-icon">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="info">
                          <h1>Our Email</h1>
                          <p>info@subscriber.com</p>
                          <p>support@subscriber.com</p>
                          <p>contact@subscriber.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Body-right">
                  <div className="right-r-1">
                    <p className="p-1">Have a project in mind?</p>
                    <p className="p-2">Tell us a bit more</p>
                  </div>
                  <div className="right-r-2">
                    <form className="form-list">
                      <div className="form-r-1">
                        <input
                          type="text"
                          placeholder="Fullname *"
                          name="name"
                          required={true}
                        />
                        <input
                          type="email"
                          placeholder="Email *"
                          name="email"
                          required={true}
                        />
                      </div>
                      <div className="form-r-2">
                        <input
                          type="text"
                          placeholder="Phone no *"
                          name="phone"
                          required={true}
                        />
                        <input
                          type="email"
                          placeholder="Subject *"
                          name="subject"
                          required={true}
                        />
                      </div>
                      <div className="form-r-3">
                        <textarea placeholder="Message *" rows="30" />
                      </div>
                      <div className="form-r-4">
                        <input
                          className="form-submit rounded-xl hover:text-white "
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="InquiryContainer-Footer"></div>
            </div>
          </div>
          {/* <div className=" lg:translate-x-[-9rem] hidden lg:block   absolute md:-right-40 lg:-right-12   lg:top-2 md:left-90  translate-x-0 p-3">
            
          </div> */}
        </div>
      )}
      <div onClick={Toggle} className="lg:hidden absolute top-8 right-12   ">
        <svg
          className="Button_svg"
          width="40"
          height="30"
          viewBox="0 0 136 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.70332 0H58.2199C60.7934 0 63.2615 1.02231 65.0812 2.84204C66.9009 4.66176 67.9233 7.12984 67.9233 9.70332C67.9233 12.2768 66.9009 14.7449 65.0812 16.5646C63.2615 18.3843 60.7934 19.4066 58.2199 19.4066H9.70332C7.12984 19.4066 4.66176 18.3843 2.84204 16.5646C1.02231 14.7449 0 12.2768 0 9.70332C0 7.12984 1.02231 4.66176 2.84204 2.84204C4.66176 1.02231 7.12984 0 9.70332 0ZM77.6266 77.6266H126.143C128.717 77.6266 131.185 78.6489 133.004 80.4686C134.824 82.2883 135.847 84.7564 135.847 87.3299C135.847 89.9034 134.824 92.3714 133.004 94.1912C131.185 96.0109 128.717 97.0332 126.143 97.0332H77.6266C75.0531 97.0332 72.585 96.0109 70.7653 94.1912C68.9456 92.3714 67.9233 89.9034 67.9233 87.3299C67.9233 84.7564 68.9456 82.2883 70.7653 80.4686C72.585 78.6489 75.0531 77.6266 77.6266 77.6266ZM9.70332 38.8133H126.143C128.717 38.8133 131.185 39.8356 133.004 41.6553C134.824 43.4751 135.847 45.9431 135.847 48.5166C135.847 51.0901 134.824 53.5582 133.004 55.3779C131.185 57.1976 128.717 58.2199 126.143 58.2199H9.70332C7.12984 58.2199 4.66176 57.1976 2.84204 55.3779C1.02231 53.5582 0 51.0901 0 48.5166C0 45.9431 1.02231 43.4751 2.84204 41.6553C4.66176 39.8356 7.12984 38.8133 9.70332 38.8133Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
