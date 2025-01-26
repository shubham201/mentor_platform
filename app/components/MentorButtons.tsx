"use client";
import { useState } from "react";
import Link from "next/link";

export default function MentorButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");

  function handlesubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    setEmail("");
    setName("");
    setContact("");
    setAddress("");
    setEducation("");
  }

  function closeform() {
    setEmail("");
    setName("");
    setContact("");
    setAddress("");
    setEducation("");
    setIsModalOpen(false);
  }

  return (
    <div>
      <div className="flex justify-center py-10 space-x-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center"
        >
          Become a Mentor
        </button>
        <Link
          href="/mentor"
          className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center"
        >
          Read More
        </Link>
      </div>

      {isModalOpen && (
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
            <h2 className="text-2xl font-bold text-center mb-4">Become a Mentor</h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in your details to become a mentor at AtoInfinity Hub!
            </p>
            <form className="space-y-4" onSubmit={handlesubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />

              {/* Contact Number */}
              <input
                type="text"
                placeholder="Your Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />

              {/* Address */}
              <input
                type="text"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />

              {/* Education Qualifications (Textarea) */}
              <textarea
                placeholder="Your Education Qualifications"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B] h-32"
              />

              {/* Submit Button */}
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
