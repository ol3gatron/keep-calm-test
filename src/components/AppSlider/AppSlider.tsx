import { useState, useRef } from "react"
import Slider from "react-slick"
import "./AppSlider.css"
import { useScrollBlock } from "../../hooks/useScrollBlock"
import { useScrollDirection } from 'react-use-scroll-direction'


import sliderImage1 from "../../assets/images/Slider Image (1).png"
import sliderImage2 from "../../assets/images/Slider Image (2).png"
import sliderImage3 from "../../assets/images/Slider Image (3).png"
import sliderImage4 from "../../assets/images/Slider Image (4).png"
import sliderImage5 from "../../assets/images/Slider Image (5).png"
import sliderImage6 from "../../assets/images/Slider Image (6).png"
import sliderImage7 from "../../assets/images/Slider Image (7).png"
import sliderImage8 from "../../assets/images/Slider Image (8).png"


const AppSlider = () => {

  const [blockScroll, allowScroll] = useScrollBlock()

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1.5,
    swipeToSlide: true,
  }

  const sliderRef = useRef()

  const [isMouseOnSlider, setIsMouseOnSlider] = useState(false)

  const handleWheel = () => {
    sliderRef.current.slickNext()
  }

  const handleMouseEnter = () => {
    blockScroll()
  }

  const handleMouseLeave = () => {
    allowScroll()
  }

  return (
    <div
      className="slider-container"
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="slider-title">
        Lorem ipsumdolor sit amet
      </h1>
      <Slider {...settings} ref={sliderRef} >
          <div>
            <img src={sliderImage1} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage2} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage3} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage4} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage5} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage6} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage7} className="slider-image" alt="image" />
          </div>
          <div>
            <img src={sliderImage8} className="slider-image" alt="image" />
          </div>
        </Slider>
    </div>
  )
}
export default AppSlider