"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Feedback1 from './feedbackLayout';

const feedbackData = [
    {
      content: "Great school! My child has learned so much.",
      name: "John Doe",
      title: "Parent of a 5th Grader",
      rating: 3.5,
    },
    {
      content: "The teachers are very supportive and caring.",
      name: "Jane Smith",
      title: "Parent of a 7th Grader",
      rating: 4,
    },
    {
      content: "Wonderful experience. Highly recommend!",
      name: "Michael Brown",
      title: "Parent of a 3rd Grader",
      rating: 5,
    },
  ];



export default function Feedback() {
    return (
        <div id='feedback' className='bg-gradient-to-r from-blue-100 to-indigo-100 py-4' >
             <div className="text-2xl pt-3 font-bold text-center" >Feedback From Parents</div>
             <div className="text-xl pt-3  font-medium text-center" >Subtitle </div>
             
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={false}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    className="swiper-container" 
                    >
                     {feedbackData.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <Feedback1 feedback={feedback} />
                        </SwiperSlide>
                    ))}
                </Swiper>
              
        </div>
        
      );
}