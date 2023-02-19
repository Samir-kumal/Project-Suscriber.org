import React, { useState, useEffect } from 'react';

const LottiePlayer = () => {
  const [width, setWidth] = useState(700);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1024 && window.innerWidth >= 720) {
             setWidth(300);

        } else if (window.innerWidth <= 720 ) {
            setWidth(200);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <lottie-player 
      src="https://assets2.lottiefiles.com/packages/lf20_xmdlmtgz.json"  
      background="transparent"  
      speed="1"  
      style={{width: `${width}px`, height: `${width}px`}}  
      loop  
      autoplay
    />
  );
};

export default LottiePlayer;