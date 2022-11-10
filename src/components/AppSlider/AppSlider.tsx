import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from "swiper"
import 'swiper/css'
import "./AppSlider.css"

import sliderImage1 from "../../assets/images/Slider Image (1).png"
import sliderImage2 from "../../assets/images/Slider Image (2).png"
import sliderImage3 from "../../assets/images/Slider Image (3).png"
import sliderImage4 from "../../assets/images/Slider Image (4).png"
import sliderImage5 from "../../assets/images/Slider Image (5).png"
import sliderImage6 from "../../assets/images/Slider Image (6).png"
import sliderImage7 from "../../assets/images/Slider Image (7).png"
import sliderImage8 from "../../assets/images/Slider Image (8).png"

const AppSlider = () => {
  return (
    <>
    <h1 className="slider-title">Lorem ipsumdolor sit amet</h1>
    <Swiper
        modules={[Mousewheel]}
        spaceBetween={50}
        slidesPerView={1.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
        mousewheel={{ releaseOnEdges: true, forceToAxis: true }}
      >
        <SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage1} alt="image"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage2} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage3} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage4} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage5} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage6} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage7} alt="image"/>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slider-div">
            <img src={sliderImage8} alt="image"/>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
  )
}
export default AppSlider