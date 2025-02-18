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
    { title: string; price: string; duration: string; category: "KG to 5" | "6 to 10" }[]
  > = {
    English: [
      { title: "2 Days/Week", price: "₹3500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "3 Days/Week", price: "₹5000/month", duration: "Ongoing", category: "KG to 5" },
      { title: "5 Days/Week", price: "₹7500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "2 Days/Week", price: "₹4000/month", duration: "Ongoing", category: "6 to 10" },
      { title: "3 Days/Week", price: "₹5500/month", duration: "Ongoing", category: "6 to 10" },
      { title: "5 Days/Week", price: "₹8000/month", duration: "Ongoing", category: "6 to 10" },
    ],
    Maths: [ { title: "2 Days/Week", price: "₹3500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "3 Days/Week", price: "₹5000/month", duration: "Ongoing", category: "KG to 5" },
      { title: "5 Days/Week", price: "₹7500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "2 Days/Week", price: "₹4000/month", duration: "Ongoing", category: "6 to 10" },
      { title: "3 Days/Week", price: "₹5500/month", duration: "Ongoing", category: "6 to 10" },
      { title: "5 Days/Week", price: "₹8000/month", duration: "Ongoing", category: "6 to 10" },],
    Science: [ { title: "2 Days/Week", price: "₹3500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "3 Days/Week", price: "₹5000/month", duration: "Ongoing", category: "KG to 5" },
      { title: "5 Days/Week", price: "₹7500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "2 Days/Week", price: "₹4000/month", duration: "Ongoing", category: "6 to 10" },
      { title: "3 Days/Week", price: "₹5500/month", duration: "Ongoing", category: "6 to 10" },
      { title: "5 Days/Week", price: "₹8000/month", duration: "Ongoing", category: "6 to 10" },],
    Computer: [ { title: "2 Days/Week", price: "₹3500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "3 Days/Week", price: "₹5000/month", duration: "Ongoing", category: "KG to 5" },
      { title: "5 Days/Week", price: "₹7500/month", duration: "Ongoing", category: "KG to 5" },
      { title: "2 Days/Week", price: "₹4000/month", duration: "Ongoing", category: "6 to 10" },
      { title: "3 Days/Week", price: "₹5500/month", duration: "Ongoing", category: "6 to 10" },
      { title: "5 Days/Week", price: "₹8000/month", duration: "Ongoing", category: "6 to 10" },],
    CTET: [
      { title: "Group Batch (15 Students)", price: "₹800/month", duration: "6 months", category: "KG to 5" },
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
            {["KG to 5", "6 to 10"].map((category) => (
              <div key={category} className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold  px-4 py-2  mb-4">{category}</h2>
                <div className="flex flex-col gap-4">
                  {feeData[course].filter(fee => fee.category === category).map((fee, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-lg font-bold text-gray-900">{fee.title}</h3>
                      <p className="text-gray-700 font-semibold">{fee.price}</p>
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
            <div className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-gray-900">{feeData[course][0].title}</h3>
              <p className="text-gray-700 font-semibold">{feeData[course][0].price}</p>
              <p className="text-sm text-gray-600">{feeData[course][0].duration}</p>
            </div>
          </div>
        )}

        <Buttons navigate={`${course.replace(/,/g, "-").toLowerCase()}`} />
      </div>
    </div>
  );
}