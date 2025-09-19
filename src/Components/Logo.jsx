import React from 'react';
import BlogImage from './Blogbg.png'; // Ensure the path to your image is correct

function Logo() {
  return (
    <img
      src={BlogImage}
      alt="Logo"
      className="h-13 w-40 "
     
    />
   
  );
}

export default Logo;
