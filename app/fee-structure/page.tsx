"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Buttons from "../components/buttons";
import Head from "next/head";

type CourseType = "English" | "Maths" | "Science" | "Computer" | "CTET";

export default function FeeStructure() {
  const [course, setCourse] = useState<CourseType>("English");

  const feeData: Record<
    CourseType,
    { title: string; price: string; originalPrice:string; discount:string;duration: string; category: "KG to Class 5" | "Class 6th to Class 10th" }[]
  > = {
    English: [
      { title: "2 Days/Week", price: "₹3500/month", originalPrice:"₹4000/month",discount:"12.5%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "3 Days/Week", price: "₹5000/month",   originalPrice:"₹6000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "5 Days/Week", price: "₹7500/month",  originalPrice:"₹9000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "2 Days/Week", price: "₹4000/month",  originalPrice:"₹5000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "3 Days/Week", price: "₹5500/month",  originalPrice:"₹7000/month",discount:"21.4%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "5 Days/Week", price: "₹8000/month",  originalPrice:"₹10000/month",discount:"20%",duration: "Ongoing", category: "Class 6th to Class 10th" },
    ],
    Maths: [ { title: "2 Days/Week", price: "₹3500/month",  originalPrice:"₹4000/month",discount:"12.5%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "3 Days/Week", price: "₹5000/month",  originalPrice:"₹6000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "5 Days/Week", price: "₹7500/month",  originalPrice:"₹9000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "2 Days/Week", price: "₹4000/month",  originalPrice:"₹5000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "3 Days/Week", price: "₹5500/month",  originalPrice:"₹7000/month",discount:"21.4%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "5 Days/Week", price: "₹8000/month",  originalPrice:"₹10000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },],
    Science: [ { title: "2 Days/Week", price: "₹3500/month",  originalPrice:"₹4000/month",discount:"12.5%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "3 Days/Week", price: "₹5000/month",  originalPrice:"₹6000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "5 Days/Week", price: "₹7500/month",  originalPrice:"₹9000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "2 Days/Week", price: "₹4000/month",  originalPrice:"₹5000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "3 Days/Week", price: "₹5500/month",  originalPrice:"₹7000/month",discount:"21.4%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "5 Days/Week", price: "₹8000/month",  originalPrice:"₹10000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },],
    Computer: [ { title: "2 Days/Week", price: "₹3500/month",  originalPrice:"₹4000/month",discount:"12.5%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "3 Days/Week", price: "₹5000/month",  originalPrice:"₹6000/month",discount:"16.7%", duration: "Ongoing", category: "KG to Class 5" },
      { title: "5 Days/Week", price: "₹7500/month",  originalPrice:"₹9000/month",discount:"16.7% ", duration: "Ongoing", category: "KG to Class 5" },
      { title: "2 Days/Week", price: "₹4000/month",  originalPrice:"₹5000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "3 Days/Week", price: "₹5500/month",  originalPrice:"₹7000/month",discount:"21.4%", duration: "Ongoing", category: "Class 6th to Class 10th" },
      { title: "5 Days/Week", price: "₹8000/month",  originalPrice:"₹10000/month",discount:"20%", duration: "Ongoing", category: "Class 6th to Class 10th" },],
    CTET: [
      { title: "Group Batch (15 Students)", price: "₹800/month", originalPrice:"₹1000/month", discount:"20%",duration: "6 months", category: "KG to Class 5" },
    ],
  };

  return (
    <div id="fee_structure" className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-100 to-blue-200">
      <Head>
        <title>Affordable {course} Tutoring | Fee Structure & Discounts</title>
        <meta name="description" content={`Explore our affordable ${course} tutoring services with flexible learning plans.`} />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <h1 className="text-4xl font-bold  mb-8 text-center">Affordable {course} Tutoring</h1>

        <div className="flex justify-center space-x-4 mb-10 flex-wrap">
          {(Object.keys(feeData) as CourseType[]).map((item) => (
            <button
              key={item}
              onClick={() => setCourse(item)}
              className={`px-6 py-3 my-3 font-semibold rounded-full transition-all duration-300 shadow-md hover:scale-105 hover:bg-black hover:text-white ${
                course === item ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {course !== "CTET" && (
          <div className="flex flex-wrap justify-center gap-12 w-full max-w-5xl">
            {["KG to Class 5", "Class 6th to Class 10th"].map((category) => (
              <div key={category} className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold  px-4 py-2  mb-4">{category}</h2>
                <div className="flex flex-col gap-4">
                  {feeData[course].filter(fee => fee.category === category).map((fee, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 w-80  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      <span className="absolute top-2 right-2 text-green-500 font-bold px-2 py-1 text-sm rounded-full">{fee.discount}</span>
                      <h3 className="text-lg font-bold text-gray-900">{fee.title}</h3>
                      <p className="text-gray-700 font-semibold">{fee.price}</p>
                      <p className="text-gray-700 line-through">{fee.originalPrice}</p>
                      <p className="text-sm text-gray-600">{fee.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {course === "CTET" && (
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-gray-900">{feeData[course][0].title}</h3>
              <p className="text-gray-700 font-semibold">{feeData[course][0].price}</p>
              <p className="text-gray-700 line-through">{feeData[course][0].originalPrice}</p>
              <span className="absolute top-2 right-2 text-green-500 px-2 py-1  font-bold text-sm rounded-full">{feeData[course][0].discount}</span>
              <p className="text-sm text-gray-600">{feeData[course][0].duration}</p>
            </div>
          </div>
        )}

        <Buttons navigate={`${course.replace(/,/g, "-").toLowerCase()}`} />
      </div>
    </div>
  );
}