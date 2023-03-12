import React from "react";
import Tickmark from "../../assets/elements/Tickmark";
import Footer2 from "../../components/Footer2";
import Header from "../../components/Header";
import Spotify_logo from "../../assets/Pricing_packages_logo/Spotify.png";
import LinkedIn_logo from "../../assets/Pricing_packages_logo/Linkedin.png";
import Twitter_logo from "../../assets/Pricing_packages_logo/Twitter.png";
import Instagram_logo from "../../assets/Pricing_packages_logo/Instagram.png";
import Facebook_logo from "../../assets/Pricing_packages_logo/Facebook.png";
import Youtube_logo from "../../assets/Pricing_packages_logo/Youtube.png";
import "./index.css";
const PricingContainer = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="Services_section w-full h-[600px] flex flex-col-reverse lg:flex-row ">
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
              <h2 className="text-white font-bold lg:translate-y-0 md:translate-y-0 translate-y-32  text-6xl lg:text-[3.3rem]  text-center">
                Our Pricing
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-[#F1E9E9] Special_package_main_container   w-screen lg:h-[620px] h-fit">
          <div className="Special_package_sub_container">
            <div className="h-20 w-full flex  items-center justify-center">
              <h1 className="text-4xl font-bold">Special Package</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  m-auto w-fit gap-x-32">
              <div className="Special_pakage_card  ">
                <div className="bg-[#D15B5A]  flex items-center justify-center rounded-t-xl h-16">
                  <h1 className="text-center text-xl text-white">Normal</h1>
                </div>
                <div className="Special_package_price h-40 w-full text-xl  flex-col  flex items-center justify-center  bg-[#DEA7A6] ">
                  <h1 className="font-bold">Rs.20,000/mo</h1>
                  <h2 className="font-bold">Billed monthly</h2>
                </div>
                <div className="bg-white h-24 flex items-center justify-center">
                  <button className="px-8 text-white mt-6 py-3 rounded-xl bg-[#D15B5A]">
                    Get Started
                  </button>
                </div>
                <div className="  h-40 bg-white ">
                  <ul className="Special_package_subscription_list ">
                    <li>
                      <p className="flex">
                        <Tickmark /> 1000 Subscribers
                      </p>
                      <span></span>
                    </li>
                    <li>
                      <p className="flex">
                        <Tickmark /> 400 Watch hour
                      </p>
                      <span></span>
                    </li>
                    <li>
                      <p className="flex">
                        <Tickmark /> 1000 Instagram Followers
                      </p>
                      <span></span>
                    </li>
                    <li>
                      <p className="flex">
                        <Tickmark /> 1000 Facebook Followers
                      </p>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Special_pakage_card">
                <div className="bg-[#D15B5A] text-xl  flex items-center justify-center  rounded-t-xl h-16">
                  <h1 className="text-center text-white ">Normal</h1>
                </div>
                <div className="Special_package_price h-40 w-full text-xl  flex flex-col items-center justify-center  bg-[#DEA7A6] ">
                  <h1 className="font-bold">Rs.40,000/mo</h1>
                  <h2 className="font-bold">Billed monthly</h2>
                </div>
                <div className="bg-white h-24 flex items-center justify-center">
                  <button className="px-8 text-white mt-6 py-3 rounded-xl bg-[#D15B5A]">
                    Get Started
                  </button>
                </div>
                <div className=" flex items-center h-40 ">
                  <ul className="Special_package_subscription_list ">
                    <li>
                      <p className="flex">
                        <Tickmark />
                        10,000 Facebook followers
                      </p>
                      <span></span>
                    </li>
                    <li>
                      <p className="flex">
                        <Tickmark /> 600,000 Watch hour
                      </p>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex flex-col  lg:h-[1100px] h-fit">
          <div className="text-center ">
            <h1 className="text-center text-4xl font-bold lg:py-2 py-8">
              Our Subscription Packages
            </h1>
          </div>
          <div className="grid w-fit m-auto gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">Spotify playlist Followers</h1>
              </div>
              <div className="flex justify-center mb-12 items-center my-2">
                <img src={Spotify_logo} alt="" height={88} width={88} />
              </div>
              <div className="Basic_packages_card flex">
                <div className="card_item_1 item_correction">
                  <h1>Price Rs.</h1>
                  <ul>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1200</p>
                    </li>
                    <li>
                      <p>1500</p>
                    </li>
                    <li>
                      <p>1800</p>
                    </li>
                    <li>
                      <p>2100</p>
                    </li>
                    <li>
                      <p>2400</p>
                    </li>
                    <li>
                      <p>2700</p>
                    </li>
                    <li>
                      <p>3000</p>
                    </li>
                  </ul>
                </div>
                <div className="card_item_2">
                  <h1 className=" text-center">Spotify Playlist followers </h1>
                  <ul>
                    <li>
                      <p>100</p>
                    </li>
                    <li>
                      <p>200</p>
                    </li>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>400</p>
                    </li>
                    <li>
                      <p>500</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>700</p>
                    </li>
                    <li>
                      <p>800</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">LinkedIn Followers</h1>
              </div>
              <div className="flex justify-center mb-12 items-center">
                <img src={LinkedIn_logo} alt="" />
              </div>
              <div className="Basic_packages_card flex">
                <div className="card_item_1">
                  <h1>Price Rs.</h1>

                  <ul>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1200</p>
                    </li>
                    <li>
                      <p>1500</p>
                    </li>
                    <li>
                      <p>1800</p>
                    </li>
                    <li>
                      <p>2100</p>
                    </li>
                    <li>
                      <p>2400</p>
                    </li>
                    <li>
                      <p>2700</p>
                    </li>
                    <li>
                      <p>3000</p>
                    </li>
                  </ul>
                </div>
                <div className="card_item_2">
                  <h1>LinkedIn followers </h1>
                  <ul>
                    <li>
                      <p>100</p>
                    </li>
                    <li>
                      <p>200</p>
                    </li>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>400</p>
                    </li>
                    <li>
                      <p>500</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>700</p>
                    </li>
                    <li>
                      <p>800</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">Twitter Followers</h1>
              </div>
              <div className="flex justify-center mb-12 items-center">
                <img src={Twitter_logo} alt="" />
              </div>
              <div className="Basic_packages_card flex">
                <div className="card_item_1">
                  <h1>Price Rs.</h1>

                  <ul>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1200</p>
                    </li>
                    <li>
                      <p>1500</p>
                    </li>
                    <li>
                      <p>1800</p>
                    </li>
                    <li>
                      <p>2100</p>
                    </li>
                    <li>
                      <p>2400</p>
                    </li>
                    <li>
                      <p>2700</p>
                    </li>
                    <li>
                      <p>3000</p>
                    </li>
                  </ul>
                </div>
                <div className="card_item_2">
                  <h1>Twitter followers </h1>
                  <ul>
                    <li>
                      <p>100</p>
                    </li>
                    <li>
                      <p>200</p>
                    </li>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>400</p>
                    </li>
                    <li>
                      <p>500</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>700</p>
                    </li>
                    <li>
                      <p>800</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">Instagram Followers</h1>
                <div className="flex justify-center mb-12 items-center">
                  <img src={Instagram_logo} alt="" height={96} width={96} />
                </div>
                <div className="Basic_packages_card  flex">
                  <div className="card_item_1 ">
                    <h1>Price Rs.</h1>

                    <ul>
                      <li>
                        <p>300</p>
                      </li>
                      <li>
                        <p>600</p>
                      </li>
                      <li>
                        <p>900</p>
                      </li>
                      <li>
                        <p>1200</p>
                      </li>
                      <li>
                        <p>1500</p>
                      </li>
                      <li>
                        <p>1800</p>
                      </li>
                      <li>
                        <p>2100</p>
                      </li>
                      <li>
                        <p>2400</p>
                      </li>
                      <li>
                        <p>2700</p>
                      </li>
                      <li>
                        <p>3000</p>
                      </li>
                    </ul>
                  </div>
                  <div className="card_item_2">
                    <h1>Instagram followers </h1>
                    <ul>
                      <li>
                        <p>100</p>
                      </li>
                      <li>
                        <p>200</p>
                      </li>
                      <li>
                        <p>300</p>
                      </li>
                      <li>
                        <p>400</p>
                      </li>
                      <li>
                        <p>500</p>
                      </li>
                      <li>
                        <p>600</p>
                      </li>
                      <li>
                        <p>700</p>
                      </li>
                      <li>
                        <p>800</p>
                      </li>
                      <li>
                        <p>900</p>
                      </li>
                      <li>
                        <p>1000</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">Facebook Page Followers</h1>
              </div>
              <div className="flex justify-center mb-12 items-center">
                <img src={Facebook_logo} alt="" />
              </div>
              <div className="Basic_packages_card flex">
                <div className="card_item_1 item_correction">
                  <h1>Price Rs.</h1>

                  <ul>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1200</p>
                    </li>
                    <li>
                      <p>1500</p>
                    </li>
                    <li>
                      <p>1800</p>
                    </li>
                    <li>
                      <p>2100</p>
                    </li>
                    <li>
                      <p>2400</p>
                    </li>
                    <li>
                      <p>2700</p>
                    </li>
                    <li>
                      <p>3000</p>
                    </li>
                  </ul>
                </div>
                <div className="card_item_2">
                  <h1 className="text-center">Facebook Page followers </h1>
                  <ul>
                    <li>
                      <p>100</p>
                    </li>
                    <li>
                      <p>200</p>
                    </li>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>400</p>
                    </li>
                    <li>
                      <p>500</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>700</p>
                    </li>
                    <li>
                      <p>800</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card_packages">
              <div>
                <h1 className="text-center pt-2">Youtube subscription</h1>
              </div>
              <div className="flex justify-center mb-12 items-center">
                <img src={Youtube_logo} alt="" />
              </div>
              <div className="Basic_packages_card flex">
                <div className="card_item_1 item_correction">
                  <h1>Price Rs.</h1>

                  <ul>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1200</p>
                    </li>
                    <li>
                      <p>1500</p>
                    </li>
                    <li>
                      <p>1800</p>
                    </li>
                    <li>
                      <p>2100</p>
                    </li>
                    <li>
                      <p>2400</p>
                    </li>
                    <li>
                      <p>2700</p>
                    </li>
                    <li>
                      <p>3000</p>
                    </li>
                  </ul>
                </div>
                <div className="card_item_2">
                  <h1 className="text-center">Youtube video watch hours </h1>
                  <ul>
                    <li>
                      <p>100</p>
                    </li>
                    <li>
                      <p>200</p>
                    </li>
                    <li>
                      <p>300</p>
                    </li>
                    <li>
                      <p>400</p>
                    </li>
                    <li>
                      <p>500</p>
                    </li>
                    <li>
                      <p>600</p>
                    </li>
                    <li>
                      <p>700</p>
                    </li>
                    <li>
                      <p>800</p>
                    </li>
                    <li>
                      <p>900</p>
                    </li>
                    <li>
                      <p>1000</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default PricingContainer;
