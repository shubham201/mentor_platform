"use client";
import { useState } from "react";

export default function EnrollNow() {
  const courses = ["English", "Maths","Science", "CTET", "Banks, Railways, SSC"];
  const grades = ["KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Selected Courses:", selectedCourses);
    console.log("Selected Grade:", selectedGrade);
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Contact:", contact);
    console.log("Address:", address);

    // Clear all form data after submission
    setSelectedCourses([]);
    setSelectedGrade("");
    setEmail("");
    setName("");
    setContact("");
    setAddress("");
  }

  const toggleCourseSelection = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((item) => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="flex py-10 items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        <h2 className="text-2xl font-bold text-center mb-4">Join as a student now</h2>
        <p className="text-center text-gray-600 mb-6">
          Fill in your details to become a part of AtoInfinity Hub!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
          />

          {/* Contact Number Input */}
          <input
            type="text"
            placeholder="Your Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
          />

          {/* Address Input */}
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#43438B]"
          />

          {/* Select Courses */}
          <div>
            <h3 className="text-lg font-medium mb-2">Select Courses:</h3>
            <div className="flex items-center  overflow-x-auto space-x-6 whitespace-nowrap">
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

          {/* Select Grade */}
          {(selectedCourses.includes("English") ||
            selectedCourses.includes("Maths") ||
            selectedCourses.includes("Science")) && (
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
  );
}
