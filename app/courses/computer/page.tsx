import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";
import Head from "next/head";
export default function Computer() {
  return (
    <div>
      <Head>
        <title>Computer Course | AtoInfinity Hub</title>
        <meta name="description" content="Learn Computer skills for students from KG to 10th grade. Our structured curriculum ensures foundational to advanced learning." />
        <meta name="keywords" content="Computer Course, KG to 10th Computer Learning, Programming, Basics of Computers, AtoInfinity Hub" />
        <meta name="author" content="AtoInfinity Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Computer Course</h1>
        <p className="mt-4 text-base md:text-lg">For Students of KG to 10th Grade</p>
      </div>

      {/* Course Introduction */}
      <div className="bg-[#f2f4fc] pb-14 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg mb-4">
            Our Computer Course is designed to build a strong foundation in computer literacy, coding, and digital skills for students from KG to 10th grade. Covering topics such as fundamental computer operations, programming basics, and essential digital tools, we ensure that students gain both theoretical and practical knowledge. Our structured approach prepares students for future academic and professional opportunities in technology.
          </p>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Key Points</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Fundamental & Advanced Learning</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Covers basic computer operations, MS Office, programming logic, and problem-solving techniques.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Hands-on Practical Training</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Regular practice sessions, interactive exercises, and real-life project applications.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Coding & Logical Thinking</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Learn basics of programming, algorithms, and coding logic using beginner-friendly languages.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Expert Guidance</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Experienced instructors provide personalized mentoring, helping students build confidence in technology.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm md:text-lg text-center text-gray-700">
          Get started with our Computer Course at AtoInfinity Hub and gain essential digital and coding skills from an early age!
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Affordable Computer Learning for Students</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KG to 5th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">KG to 5th</h2>
              <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹3500/month</p>
              <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5000/month</p>
              <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹7500/month</p>
            </div>

            {/* 6th to 10th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">6th to 10th</h2>
              <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹4000/month</p>
              <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5500/month</p>
              <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹8000/month</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">🗓️</div>
              <p className="text-sm text-gray-700 font-semibold">Flexible Schedules</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">🕒</div>
              <p className="text-sm text-gray-700 font-semibold">Weekend Batches Available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">🔄</div>
              <p className="text-sm text-gray-700 font-semibold">Easy Refund Policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Now Form */}
      <EnrollNow />
    </div>
  );
}
