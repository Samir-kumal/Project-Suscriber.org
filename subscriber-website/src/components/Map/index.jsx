import React from 'react';

function Map() {
  return (
    <iframe  className='w-full h-[450px]'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.4277266586862!2d85.33864985742588!3d27.687555649704382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19940f75d179%3A0x2eeccbf52f6c8166!2sMinbhawan%20Bus%20Stand!5e0!3m2!1sen!2snp!4v1676986624594!5m2!1sen!2snp" 
    //   width="600" 
    //   height="450" 
    //   style={{border:0}} 
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default Map;