import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";
import Head from "next/head";

export default function CTETPreparation() {
  return (
    <div>
      <Head>
        <title>CTET Preparation Course | AtoInfinity Hub</title>
        <meta name="description" content="Join our CTET Preparation Course and get expert guidance, mock tests, and time management strategies to ace the Central Teacher Eligibility Test (CTET)." />
        <meta name="keywords" content="CTET, CTET Preparation, Teacher Eligibility Test, Teaching Exam, CTET Coaching, Online CTET Course" />
        <meta name="author" content="AtoInfinity Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="CTET Preparation Course | AtoInfinity Hub" />
        <meta property="og:description" content="Comprehensive guidance for aspiring teachers preparing for the Central Teacher Eligibility Test (CTET)." />
        {/* <meta property="og:url" content="https://yourwebsite.com/ctet-preparation" />
        <meta property="og:type" content="website" /> */}
      </Head>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">CTET Preparation Course</h1>
        <p className="mt-4 text-base md:text-lg">Comprehensive Guidance for Aspiring Teachers</p>
      </div>

      {/* Course Introduction */}
      <div className="bg-[#f2f4fc] pb-14 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg mb-4">
            Our CTET Preparation Course is meticulously designed to help aspiring teachers excel in the Central Teacher Eligibility Test
            (CTET). This course covers all essential topics, including Child Development and Pedagogy, Language Proficiency, Mathematics,
            Environmental Studies, and Subject-Specific Pedagogy. With an emphasis on conceptual clarity, mock tests, and time management
            strategies, we ensure that students are fully prepared to succeed. By focusing on the latest syllabus and exam patterns, we
            aim to make learning effective and streamlined for prospective educators.
          </p>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Key Points</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Focused Curriculum</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Our course is aligned with the latest CTET syllabus, focusing on all key areas including Pedagogy, Languages, Mathematics,
              and Environmental Studies.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Mock Tests & Analysis</h3>
            <p className="text-sm md:text-lg text-gray-700">
              We provide regular mock tests to help students practice effectively, along with detailed analysis to identify strengths and
              areas for improvement.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Expert Guidance</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Learn from experienced educators who provide personalized guidance and tips to tackle the CTET with confidence and clarity.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]">
            <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Effective Time Management</h3>
            <p className="text-sm md:text-lg text-gray-700">
              Our course equips students with strategies to manage their time effectively during the exam, ensuring they can answer all
              sections within the allotted time.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm md:text-lg text-center text-gray-700">
          Join our CTET Preparation Course at AtoInfinity Hub and take the first step towards a rewarding teaching career. Let us help you
          ace the CTET and achieve your dreams!
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Affordable CTET Coaching for Aspiring Teachers
          </h1>
          <div className="flex justify-center">
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">Group Batch (15 Students)</h2>
            <p className="text-gray-700 text-sm mb-4">
              ₹800/month
            </p>
            <p className="text-sm text-gray-600">Duration: 6 months</p>
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

