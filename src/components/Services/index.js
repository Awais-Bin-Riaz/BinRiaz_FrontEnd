import React from "react";
import "./style.css";
import img1 from "../../images/svg/services.jpg";
import img2 from "../../images/svg/quality.jpg";
import img3 from "../../images/svg/delivery.jpg";
import img4 from "../../images/svg/costumer.jpg";


const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          <span>Our</span> Services{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <span className="number">1</span>
            <img src={img1} alt="" />
            <h3>24/7 Services</h3>
            <p>Our 24/7 services are here to ensure yours' success</p>
          </div>

          <div className="box">
            <span className="number">2</span>
            <img src={img2} alt="" />
            <h3>Quality Product</h3>
            <p>
              Our 100% Pure Cow leather products are always satisfied our
              costumer
            </p>
          </div>

          <div className="box">
            <span className="number">3</span>
            <img src={img3} alt="" />
            <h3>Easy Delivery</h3>
            <p>You Just have to provide your Delivery Location</p>
          </div>

          <div className="box">
            <span className="number">4</span>
            <img src={img4} alt="" />
            <h3>Customer Satisfaction</h3>
            <p>By all mean, We always go for our customer Satisfaction</p>
          </div>
          {/* 
          <div className="box">
            <span className="number">5</span>
            <img src={img5} alt="" />
            <h3>SEO Marketing</h3>
            <p>optimize your website in google analytics (exclusive)</p>
          </div> */}

          {/* <div className="box">
            <span className="number">6</span>
            <img src={img6} alt="" />
            <h3>Data Analysis</h3>
            <p>
              Complete database manipulation and integration for Online store
              (exclusive)
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};
export default Services;