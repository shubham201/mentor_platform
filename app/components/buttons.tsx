"use client"

import Link from "next/link";
import { use, useState } from "react"

interface ButtonsProps {
    navigate: string;  
  }

export default function Buttons({ navigate }: ButtonsProps){

    const [isModalOpen,setIsModalOpen]=useState(false);
    const courses=["English","Maths","CTET","Banks,Railways,SSC"];
    const grades = ["KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]; 
    const [selectedCourse,setSelectedCourse]=useState("");
    const [selectedGrade,setSelectedGrade]=useState("");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handlesubmit(){
        setSelectedCourse("");
        setSelectedGrade("");
        setEmail("");
        setName("");
    }

    function closeform(){
        setSelectedCourse("");
        setSelectedGrade("");
        setEmail("");
        setName("");
        setIsModalOpen(false);
    }

    return (
        <div>
            <div className="flex py-6 space-x-7">
                <button  onClick={()=>setIsModalOpen(true)} className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Book a Demo Class
                </button>
                <Link href={`/courses/${navigate}`} className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Enroll Now
                </Link>
              </div>

            {
                isModalOpen ? (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
                        {/* Close Button */}
                        <button
                        onClick={closeform}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                        &#x2715;
                        </button>
                        {/* Modal Content */}
                        <h2 className="text-2xl font-bold text-center mb-4">
                        Book a Demo Class
                        </h2>
                        <p className="text-center text-gray-600 mb-6">
                        Fill in your details to schedule a demo class with us.
                        </p>
                        <form className="space-y-4" onSubmit={handlesubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
                        />
                        {/* select a course */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Select a Course:</h3>
                            <div className=" flex items-center space-x-2">
                            {courses.map((course) => (
                                <label
                                key={course}
                                className="flex items-center space-x-2 cursor-pointer"
                                >
                                <input
                                    type="radio"
                                    name="course"
                                    value={course}
                                    checked={selectedCourse === course}
                                    onChange={() => setSelectedCourse(course)}
                                    required
                                    className="w-4 h-4 text-[#43438B] focus:ring-[#7070c5]"
                                />
                                <span className="text-gray-700">{course}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        {/* select grade */}
                        {selectedCourse === "English" || selectedCourse === "Maths" ? (
                        <div>
                        <h3 className="text-lg font-medium mb-2">Select a Grade:</h3>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
                            value={selectedGrade}
                            required
                            onChange={(e) => setSelectedGrade(e.target.value)}
                        >
                            <option value="" disabled>
                            Select Grade
                            </option>
                            {grades.map((grade) => (
                            <option key={grade} value={grade}>
                                {grade}
                            </option>
                            ))}
                        </select>
                        </div>
                    ) : null}

                        <button
                            type="submit"
                            className="w-full bg-[#43438B] hover:bg-[#7070c5] text-white py-2 rounded-md font-medium"
                            disabled={isSubmitting}
                        >
                             {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                        </form>
                    </div>
                </div>
                ) : <div></div>
            }
        </div>
    )
}