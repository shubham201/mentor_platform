"use client";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function BookADemoClass(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const courses = ["English", "Maths", "Science", "Computer","CTET",];
    const grades = ["KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [selectedGrade, setSelectedGrade] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
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
            selectedCourses,
            selectedGrade,
        };
    
        try {
            const res = await fetch("/api/student", {
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (res.ok) {
                console.log("Email sent successfully");
                setSelectedCourses([]);
                setSelectedGrade("");
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

    function closeForm() {
        setSelectedCourses([]);
        setSelectedGrade("");
        setEmail("");
        setName("");
        setContact("");
        setAddress("");
        setIsModalOpen(false);
        setIsSubmitted(false);
      }
    
      const toggleCourseSelection = (course: string) => {
        if (selectedCourses.includes(course)) {
          setSelectedCourses(selectedCourses.filter((item) => item !== course));
        } else {
          setSelectedCourses([...selectedCourses, course]);
        }
      };

      const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg relative max-w-[500px] w-full">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &#x2715;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Book a Demo Class</h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in your details to schedule a demo class with us.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />
              <input
                placeholder="Your Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
              <input
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
              />
              <div>
                <h3 className="text-lg font-medium mb-2">Select Courses:</h3>
                <div className="flex items-center overflow-x-auto space-x-6 whitespace-nowrap">
                  {courses.map((course) => (
                    <label
                      key={course}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={course}
                        checked={selectedCourses.includes(course)}
                        onChange={() => toggleCourseSelection(course)}
                        className="w-4 h-4 text-[#43438B] focus:ring-[#7070c5]"
                      />
                      <span className="text-gray-700">{course}</span>
                    </label>
                  ))}
                </div>
              </div>
              {(selectedCourses.includes("English") ||
                selectedCourses.includes("Maths") ||
                selectedCourses.includes("Science") || 
                selectedCourses.includes("Computer")) && (
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
              )}
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
      );

      return(
            <div>
                  <button
                     onClick={() => setIsModalOpen(true)}  className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
                  >
                            Book Your Free Class Now
                    </button>
                    {isModalOpen && createPortal(modalContent, document.body)}
            </div>
      )
}