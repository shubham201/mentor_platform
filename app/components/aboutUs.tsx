"use client"
import { useState } from "react";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import SLide3 from "./slide3"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slide3 from "./slide3";

export default function AboutUs() {
  const slidesArray=[<Slide1 key="1" />,
                      <Slide2 key="2" />,
                      <SLide3 key="3"/>
  ]
  const [index,setIndex]=useState(0);

  function handleNext(){      
    if(index==slidesArray.length -1){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  function handlePrev(){
    if(index==0){
      setIndex(slidesArray.length -1);
    }else{
      setIndex(index-1);
    }
  }

  return (
        <div className="bg-[#e8edfb]">
            <div className="flex justify-between items-center ">
              {/* left arrow */}
              <IoIosArrowBack onClick={handlePrev} className="size-16 text-[#D9D9D9] "/>
                      {slidesArray[index]}

              {/* right arrow */}
              <IoIosArrowForward onClick={handleNext} className="size-16 text-[#D9D9D9] "/>
            </div>
            
            <div className="flex justify-center space-x-5 pb-5" >
              
              {slidesArray.map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i === index ? "bg-[#858585]" : "bg-[#D9D9D9]"
                  }`}
                ></div>
              ))}
            </div>
           
        </div>
  );
}