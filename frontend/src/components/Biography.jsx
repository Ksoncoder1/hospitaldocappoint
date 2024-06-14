import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At ZeeCare, we are dedicated to transforming the healthcare  experience through innovation
            and technology.
          </p>
          <p>ZeeCare System</p>
          <p>
            Our state-of-the-art doctor appointment system is designed to provide patients with 
            seamless, efficient, and user-friendly access to healthcare services. 
            Founded by a team of healthcare professionals and tech enthusiasts, our mission is to bridge 
            the gap between patients and healthcare providers ensuring quality care is just a few clicks away.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
