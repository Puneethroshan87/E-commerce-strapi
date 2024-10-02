


import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import React, { useState } from 'react'
import "./Slider.scss"

const Slider = () => {

    const [currentSlide,serCurrentSlide]=useState(0)

    const data=[
       "https://images.pexels.com/photos/5709643/pexels-photo-5709643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "https://images.pexels.com/photos/28522221/pexels-photo-28522221/free-photo-of-elegant-woman-in-traditional-blue-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide=()=>{
serCurrentSlide(currentSlide ===0 ? 2 : (prev)=>prev - 1)
    }

    const nextSlide=()=>{
serCurrentSlide(currentSlide === 2 ? 0 : (prev)=>prev + 1)
    }
  return (
    <div className='slider'>
        <div className="container"  style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon"   onClick={prevSlide}>
                <ArrowBackIosOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowForwardIosOutlinedIcon/>
            </div>
        </div>
        </div>
  )
}

export default Slider