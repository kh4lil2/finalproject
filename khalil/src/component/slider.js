import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image1 from '../img1.jpg';
import Image2 from '../img2.jpg';
import Image3 from '../img3.jpg';
const Slider = () => {
  return (
    <div>
       <AwesomeSlider>
    <div data-src={Image1} />
    <div data-src={Image2} />
    <div data-src={Image3} />
  </AwesomeSlider>
    </div>
  )
}

export default Slider
