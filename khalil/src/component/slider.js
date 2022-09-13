import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image1 from '../img1.jpg';
import Image2 from '../img2.jpg';
import Image3 from '../img3.jpg';
const Slider = () => {
  return (
  
  <AwesomeSlider>
    <div style={{backgroundImage : `url("${Image1}")` , backgroundSize : "cover"}}>

    </div>
    <div style={{backgroundImage : `url("${Image2}")` , backgroundSize : "cover"}}>
    </div>
    <div style={{backgroundImage : `url("${Image3}")` , backgroundSize : "cover"}}>
      
    </div>
  </AwesomeSlider>

  )
}

export default Slider
