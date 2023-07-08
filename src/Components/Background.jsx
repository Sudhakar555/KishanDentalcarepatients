import React from 'react';
import  backgroundImage from '../assets/images/bg.jpg'
import Home from './Home';

const imgStyle  = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

function BackGround() {
    return ( 
        <div  style={imgStyle}>
          <Home />
      </div>
     );
}

export default BackGround;