"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import CoursesDropdown from "./coursesDropdown"; // Dropdown component

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="navbar" className="bg-[#43438b]">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="bg-[#F2F4FC] w-12 h-12 rounded-full"></div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-14 text-white">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <CoursesDropdown />
          <Link href="/mentor" >Mentors</Link>
          <Link href="/fee-structure">Fee Structure</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#43438b] text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-64 z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold">Menu</div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 mt-6 px-6">
          <Link href="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link href="/about-us" onClick={toggleSidebar}>
            About Us
          </Link>
          <CoursesDropdown />
          <Link href="/mentor" onClick={toggleSidebar} >Mentors</Link>
          <Link href="/fee-structure" onClick={toggleSidebar}>
            Fee Structure
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
