import React from "react";

import Slider from "react-slick";
import { Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";
import "./HeroSlider.css";
import BgVideo from "../../assets/all-images/HomePage/bgVideo.mp4";

const HeroSlider = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        marginTop: 60,
      }}
    />
  );

  return (
    <div className="bgContainer">
      <div className="overlay"></div>
      <div className="bgVideo-container">
        <video className="bgVideo" src={BgVideo} autoPlay loop muted />
      </div>
      <span className="glass-point">
        <div className="glass-point__inset"></div>
      </span>
      <div className="line">
        <ColoredLine color="#f4f4f4" />

      </div>
      <div className="hero-text">
        {/* <h5>Pollen Grains</h5> */}
        <h5>Pollen Grains</h5>
        {/* <h5>Pollen Grains</h5> */}
      </div>
    </div>
  );
};

export default HeroSlider;
