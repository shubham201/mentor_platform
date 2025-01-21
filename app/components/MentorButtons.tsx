"use client"
import {useState } from "react"
import Link from "next/link";
export default function MentorButtons(){
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");

    function handlesubmit(){
        setEmail("");
        setName("");
    }

    function closeform(){
        setEmail("");
        setName("");
        setIsModalOpen(false);
    }

   
        return (
            <div>
                <div className="flex justify-center py-10 space-x-10">
                        <button  onClick={()=>setIsModalOpen(true)}  className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">Become a Mentor</button>
                        <Link href="/mentor" className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">Read More</Link>
            </div>
                
    
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
                       // Close the modal if clicked outside
                    >
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
                                    onChange={(e) => setName(e.target.value)}
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
                                <button
                                    type="submit"
                                    className="w-full bg-[#43438B] hover:bg-[#7070c5] text-white py-2 rounded-md font-medium"
                                    
                                >
                                   Submit
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
}