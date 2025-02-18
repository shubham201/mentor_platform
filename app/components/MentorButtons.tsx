"use client";
import { useState } from "react";

export default function MentorButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [isSubmitted,setIsSubmitted]=useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
    console.log("Sending...");

    const data = {
        name,
        email,
        contact,
        address,
        education,
    };

    try {
        const res = await fetch("/api/mentor", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            console.log("Email sent successfully");
            setEducation("");
            setEmail("");
            setName("");
            setContact("");
            setAddress("");
            setIsModalOpen(false);
            setIsSubmitted(false);
        } else {
            console.log("Failed to send email");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

  function closeform() {
    setEmail("");
    setName("");
    setContact("");
    setAddress("");
    setEducation("");
    setIsModalOpen(false);
    setIsSubmitted(false);
  }

  return (
    <div>
        <div className="flex  justify-center py-10 gap-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#43438B] text-white font-medium rounded-lg px-6 py-3 shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#43438B] w-full sm:w-auto flex items-center justify-center"
        >
          Become a Mentor
        </button>

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
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                disabled={isSubmitted}
                className={`w-full py-2 rounded-md font-medium text-white transition-all ${
                  isSubmitted
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#43438B] hover:bg-[#7070c5] cursor-pointer" 
                }`}
              >
                {isSubmitted ? "Submitting Form..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

