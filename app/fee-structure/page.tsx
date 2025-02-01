"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Buttons from "../components/buttons";

type CourseType = "English" | "Maths" | "Science" | "CTET" | "Banks,Railways,SSC";

export default function FeeStructure() {
  const [course, setCourse] = useState<CourseType>("English");

  const feeData: Record<
    CourseType,
    {
      title: string;
      discount: string;
      price: string;
      originalPrice: string;
      annualPrice: string;
      duration: string;
    }[]
  > = {
    English: [
      {
        title: "Kg to Class 5",
        discount: "13.5% OFF",
        price: "₹541/class",
        originalPrice: "₹626",
        annualPrice: "₹525/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
      {
        title: "Class 6 to Class 10",
        discount: "5% OFF",
        price: "₹788/class",
        originalPrice: "₹829",
        annualPrice: "₹750/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
    ],
    Maths: [
      {
        title: "Kg to Class 5",
        discount: "10% OFF",
        price: "₹500/class",
        originalPrice: "₹556",
        annualPrice: "₹480/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
      {
        title: "Class 6 to Class 10",
        discount: "8% OFF",
        price: "₹700/class",
        originalPrice: "₹760",
        annualPrice: "₹680/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
    ],
    Science: [
      {
        title: "Kg to Class 5",
        discount: "12% OFF",
        price: "₹530/class",
        originalPrice: "₹602",
        annualPrice: "₹510/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
      {
        title: "Class 6 to Class 10",
        discount: "7% OFF",
        price: "₹720/class",
        originalPrice: "₹774",
        annualPrice: "₹700/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
    ],
    CTET: [
      {
        title: "CTET Basic",
        discount: "15% OFF",
        price: "₹600/class",
        originalPrice: "₹705",
        annualPrice: "₹580/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
    ],
    "Banks,Railways,SSC": [
      {
        title: "Competitive Exams",
        discount: "20% OFF",
        price: "₹850/class",
        originalPrice: "₹1062",
        annualPrice: "₹800/class for 12 months (96 classes)",
        duration: "6 months, 48 classes",
      },
    ],
  };

  return (
    <div id="fee_structure" className="h-screen flex flex-col bg-gradient-to-r from-indigo-100 to-blue-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Affordable {course} Tutoring for Your Child
        </h1>
        <div className="flex justify-center space-x-4 mb-10 flex-wrap">
          {(Object.keys(feeData) as CourseType[]).map((item) => (
            <button
              key={item}
              onClick={() => setCourse(item)}
              className={`px-6 py-3 font-semibold rounded-full transition duration-200 ${
                course === item
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 sm:space-y-4 md:space-y-6">
          {feeData[course].map((fee, index) => (
            <div
              key={index}
              className="max-w-md w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">{fee.title}</h2>
                <span className="text-green-500 text-sm font-semibold">{fee.discount}</span>
              </div>
              <p className="text-gray-700 text-base mb-2">
                {fee.price}{" "}
                <span className="line-through text-gray-500">
                  {fee.originalPrice}
                </span>
              </p>
              <p className="text-gray-700 text-base mb-4">{fee.annualPrice}</p>
              <p className="text-sm text-gray-600">{fee.duration}</p>
            </div>
          ))}
        </div>
        
        <Buttons navigate={`${course.replace(/,/g, "-").toLowerCase()}`} ></Buttons>
        
        <div className="flex justify-center mt-16 space-x-10 flex-wrap">
          <div className="text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
              🗓️
            </div>
            <p className="text-sm text-gray-800 font-semibold">
              Flexible Leaves
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
              🕒
            </div>
            <p className="text-sm text-gray-800 font-semibold">
              Adjustable Schedule
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
              🔄
            </div>
            <p className="text-sm text-gray-800 font-semibold">Easy Refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

