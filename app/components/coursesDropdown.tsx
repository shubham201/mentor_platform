"use client";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function CoursesDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const courses = ["English", "Maths", "Science", "CTET", "Banks, Railways, SSC"];

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <span>Courses</span>

          {/* Increase the size of the dropdown and dropup icons */}
          {isDropdownOpen ? (
            <RiArrowDropUpLine className="text-2xl" /> // Larger icon
          ) : (
            <RiArrowDropDownLine className="text-2xl" /> // Larger icon
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50"
          style={{
            top: "100%", // Ensures the dropdown appears directly below the button
            left: 0,
          }}
        >
          <ul className="space-y-2 p-4">
            {courses.map((course, index) => (
              <li key={index}>
                <Link
                  href={`/courses/${course.toLowerCase().replace(/[\s,]+/g, '-')}`}
                  className="block px-4 py-2 hover:bg-[#43438b] hover:text-white rounded-md"
                >
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
