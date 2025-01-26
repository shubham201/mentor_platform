"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Slide1, Slide2, Slide3,Slide4, Slide5 } from "./slide_content";

export default function AboutUs() {
  const slidesArray=[<Slide1 key="1" />,
                      <Slide2 key="2" />,
                      <Slide3 key="3"/>,
                      <Slide4 key="4" />,
                      <Slide5 key="5"/>
  ]

  return (
        <div id="courses-overview" className="bg-[#e8edfb]">
           <Swiper
                               modules={[Navigation, Pagination]}
                               navigation
                               pagination={{ clickable: true }}
                               loop={false}
                               centeredSlides={false}
                               slidesPerView={1}
                               className="swiper-container" 
                               >
                                {slidesArray.map((slide, index) => (
                                   <SwiperSlide key={index}>
                                      {slide}
                                   </SwiperSlide>
                               ))}
                           </Swiper>
           
        </div>
  );
}