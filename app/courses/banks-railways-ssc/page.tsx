import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";
import Head from "next/head";
export default function BanksRailwaysSSC() {
  return (
    <div>
      <Head>
        <title>English Preparation Course | AtoInfinity Hub</title>
        <meta name="description" content="Prepare for Bank, Railways, and SSC exams with our expert-led English Preparation Course. Improve your grammar, vocabulary, comprehension, and more." />
        <meta name="keywords" content="English Preparation, SSC English, Bank English, Railways English, Competitive Exam Preparation" />
        <meta name="author" content="AtoInfinity Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="English Preparation Course | AtoInfinity Hub" />
        <meta property="og:description" content="Boost your English skills for Bank, Railways, and SSC exams with structured modules, mock tests, and expert mentorship." />
        {/* <meta property="og:image" content="https://yourwebsite.com/path-to-course-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/english-preparation" />
        <meta property="og:type" content="website" /> */}
      </Head>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">English Preparation Course</h1>
        <p className="mt-4 text-base md:text-lg">For Bank, Railways, and SSC Exams</p>
      </div>

      {/* Course Introduction */}
      <div className="bg-[#f2f4fc] pb-14 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg mb-4">
            Our English Preparation Course is tailored to help aspirants excel in competitive exams like Bank, Railways, and SSC. The
            course focuses on all critical areas such as Grammar, Vocabulary, Reading Comprehension, Error Spotting, and Sentence
            Formation. With structured modules, mock tests, and time-bound practice sessions, we aim to enhance your accuracy and speed.
            Our approach ensures you are equipped to tackle every section of the English language in these exams with confidence and
            efficiency.
          </p>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Key Points</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Comprehensive Syllabus</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Covers all aspects of the English section, including grammar, vocabulary, comprehension, and writing skills, aligned with
              exam requirements.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Mock Tests & Analysis</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Gain exam-like experience with regular mock tests, coupled with detailed feedback to refine your strategies and improve
              performance.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Time Management Skills</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Learn techniques to manage time effectively during exams, ensuring that you can attempt all questions confidently.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Expert Mentors</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Our experienced instructors provide personalized guidance, helping you master difficult concepts and develop exam-ready
              skills.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm md:text-lg text-center text-gray-700">
          Prepare for the English section of competitive exams with AtoInfinity Hub. Join us today and take the first step towards
          achieving your career goals in Bank, Railways, and SSC!
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Affordable English Coaching for Competitive Exams
          </h1>
          <div className="flex justify-center">
            <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Competitive Exams</h2>
                <span className="text-green-500 text-sm">20% OFF</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                ₹850/class <span className="line-through text-gray-500">₹1062</span>
              </p>
              <p className="text-gray-700 text-sm mb-4">₹800/class for 12 months (96 classes)</p>
              <p className="text-sm text-gray-600">6 months, 48 classes</p>
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
