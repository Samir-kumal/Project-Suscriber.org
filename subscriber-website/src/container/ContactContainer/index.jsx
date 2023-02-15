import React, { useState } from "react";
import axios from "axios";
import register from "../../service/newsletter.js";
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import './index.css'
const ContactContainer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    
        axios
          .post("/api/submit-form", formData)
          .then((response) => {
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            alert("Form submitted successfully");
          })
          .catch((error) => {
            console.error(error);
            alert("An error occurred while submitting the form");
          });
      };
      console.log(formData.name,formData.email,formData.message);
    const [res,setRestult] = useState('');
     let data;
      const check = async()=>{
        data =  await register.register();
      
       setRestult(data.data.msg);
      }
    
      return (
        <>
          <Header />
          <div>
            <main className="translate-y-20 mb-20">
              <div
                style={{
                  width: "100%",
                  height: "90vh",
                  backgroundColor: "rgb(238 238 238)",
                }}
              >
                <div className="MainWrapperContainer">
                  <div className="titleInfo">
                    <h1>Contact us</h1>
                    <p>
                      Want to get in touch? We'd love to hear from you. Here's how
                      you can reach us..
                    </p>
                  </div>
                  <div
                    style={{
                      width: "75vw",
                      height: "55vh",
                      display: "flex",
                      justifyContent: "center",
                      gap: "3rem",
                      alignItems: "center",
                    }}
                  >
                    <div className="leftContainer">
                      <div>
                        <input type='button' style={{width:"10vw", height:"10vh", backgroundColor:"red"}}
                          value="check api"
                          onClick={check}
                        />
                        <p>
                          {res}
                        </p>
    
                       
                      </div>
                    </div>
                    <div className="InputWrapperContainer">
                      <div className="inputItems">
                        <h1>Send message</h1>
                        {/* <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us..</p> */}
                        <p>Drop us a line.</p>
                        <div className="FormContainer">
                          <form>
                            <div className="Items-r-1">
                              <input
                                className="inputField"
                                type="text"
                                required={true}
                                placeholder="Name*"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                              <input
                                className="inputField"
                                type="email"
                                required={true}
                                placeholder="Email*"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="Items-r2 ">
                              <textarea rows="3" placeholder="Message*" 
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                              />
                              <input
                                className="inputField"
                                type="submit"
                                value="Submit"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="infoWrapper">
                    <p className="message">Contact us now to start you campaign</p>
                    <span>
                      <i className="fa-solid fa-phone"></i>
                      <p>984534534535</p>
                    </span>
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                      <p>support@gmail.com</p>
                    </span>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      );
}

export default ContactContainer;