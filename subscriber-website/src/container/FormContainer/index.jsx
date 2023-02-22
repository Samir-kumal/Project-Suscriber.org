import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const [message,setMessage] = useState([]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0r8y555', 'template_004d889', form.current, '4o-pAqPSMxC0xUwtz')
      .then((result) => {
          console.log(result.text);
          setMessage(()=>{
            toast.success('Successfully sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
          e.target.reset();
          return message;
      }, (error) => {
          console.log(error.message);
      });
  };



  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
   <>
     <form ref={form} onSubmit={sendEmail} >
              <h1 className="m-4 translate-x-12 text-2xl font-bold"></h1>
              <div className="form-fillup w-full lg:w-[600px]  m-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-screen lg:w-[95%]">
                  <input
                    className="w-[95%] "
                    type="text"
                    name="user_name"
                    required={true}
                    // onChange={handleInputChange}
                    placeholder="Full name"
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  <input
                    className="w-[95%] "
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required={true}
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  {" "}
                  <input
                    className="w-[95%] "
                    type="text"
                    placeholder="Phone"
                    name="user_phone"
                    // onChange={handleInputChange}
                  />
                </div>
                <div className="w-screen lg:w-[95%]">
                  {" "}
                  <input
                    className="  w-[95%] "
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    // onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-screen lg:w-[95%]">
                <textarea
                  className="text-comment w-[95%] p-3 mx-4"
                  name="user_message"
                  placeholder="Write us a message"
                  
                  // onChange={handleInputChange}
                />
                
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
            <ToastContainer/>
   </>
    
  );
};

