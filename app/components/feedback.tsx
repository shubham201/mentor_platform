"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Feedback1 from "./feedbackLayout";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbackData = [
  {
    content: "I've noticed a huge improvement in my math skills since I started taking classes with Shubham. He explains everything really well, and thanks to his help, I’m now faster and more accurate at solving problems, and my grades have improved too.",
    name: "Dhhakshit, USA",
    title: "6th grade",
    rating: 5,
    image: "feedback1.jpeg",
    videoUrl: "https://youtube.com/shorts/uzdX2g55pec?feature=share"
  },
  {
    content: "Ever since I started online classes with Shalini ma'am, I have improved so much in math and English! I solve math problems faster and write better stories with good grammar",
    name: "Dhhanvin Aleti, USA",
    title: "4th grade",
    rating: 5,
    image: "feedback2.jpeg",
    videoUrl: "https://youtube.com/shorts/pWQ4A3TRgXw"
  },
  {
    content: "Learning Social Sciences with Shalini Ma'am has been an amazing experience! History, Geography, and Polity used to feel overwhelming, but the way she explained concepts made everything so easy to understand. Highly recommended for anyone looking for a great tutor! 😊📚✨",
    name: "Shresth Anand, Patna",
    title: "10th Grader",
    rating: 5,
    image: "shresth.png",
    videoUrl: ""
  },
  {
    content: "It is now almost 20 months that I have been associated with A to Infinity Hub and during this while I have noticed a significant growth in the overall development of my ward who is in grade 4. Miss Shalini has always been cooperative since day 1 and always clarifies all the concepts in easy manner. My son now shows keen interest in Maths and Science.",
    name: "Kiaan's mom, Delhi",
    title: "4th Grader",
    rating: 5,
    image: "kiaan_mom.jpg",
    videoUrl: ""
  }
];

export default function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbackData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <div id="feedback" className="bg-gradient-to-r from-blue-100 to-indigo-100 py-6 relative w-screen overflow-x-hidden">
      <div className="text-2xl pt-3 font-bold text-center">Feedback</div>
      {/* <div className="text-xl pt-2 font-medium text-center">Subtitle</div> */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-[60%] transform -translate-y-1/2 bg-white text-blue-600 border border-blue-600 rounded-full shadow-lg z-50 flex items-center justify-center w-12 h-12 md:left-[50px] md:w-14 md:h-14 lg:left-[70px] lg:w-16 lg:h-16 hover:text-white hover:bg-blue-600 transition-all"
      >
        <ChevronLeft size={28} />
      </button>
      <div className="relative px-4 max-w-5xl mx-auto ">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop
          emulateTouch
          autoPlay
          interval={3000}
          stopOnHover
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          centerMode
          centerSlidePercentage={isMobile ? 100 : isTablet ? 60 : 47}
          renderIndicator={(onClickHandler, isSelected, index) => (
            <li
              className={`w-3 h-3 mx-1 rounded-full inline-block cursor-pointer ${isSelected ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={onClickHandler}
              key={index}
            />
          )}
        >
          {feedbackData.map((feedback, index) => (
            <motion.div
              key={index}
              className="p-6 transition-all duration-500 relative"
              initial={{ scale: index === currentSlide ? 1 : 0.85, opacity: index === currentSlide ? 1 : 0.6 }}
              animate={{ scale: index === currentSlide ? 1 : 0.85, opacity: index === currentSlide ? 1 : 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Feedback1 feedback={feedback} />
            </motion.div>
          ))}
        </Carousel>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-4 top-[60%] transform -translate-y-1/2 bg-white text-blue-600 border border-blue-600 rounded-full shadow-lg z-50 flex items-center justify-center w-12 h-12 md:right-[50px] md:w-14 md:h-14 lg:right-[70px] lg:w-16 lg:h-16 hover:text-white hover:bg-blue-600 transition-all"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
