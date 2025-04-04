import Navbar from "@/app/components/navbar"
import EnrollNow from "@/app/components/enroll_now"
import Head from "next/head";
export default function English() {
    return (
      <div>
        <Head>
                <title>English Course for KG to 10th | AtoInfinity Hub</title>
                <meta name="description" content="Boost your child's English skills with our structured course for KG to 10th grade. Engaging lessons, phonics, grammar, creative writing, and literature analysis at AtoInfinity Hub." />
                <meta name="keywords" content="English course, KG to 10th, grammar, reading comprehension, creative writing, literature analysis, interactive learning, AtoInfinity Hub" />
                <meta name="author" content="AtoInfinity Hub" />
                <meta property="og:title" content="English Course for KG to 10th | AtoInfinity Hub" />
                <meta property="og:description" content="Enroll in our comprehensive English course for KG to 10th grade. Strengthen language skills, develop confidence, and enhance communication abilities." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com/english" />
                <meta property="og:image" content="https://yourwebsite.com/images/english-course.jpg" />
                <meta name="robots" content="index, follow" />
            </Head>
        <Navbar />
        {/* Header Section */}
        <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">English Course</h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg">
            For Students from KG to 10th
          </p>
        </div>
  
        {/* Course Description */}
        <div className="bg-[#f2f4fc] pb-10 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-base sm:text-lg mb-6 text-justify sm:text-left">
              Our English course is designed to lay a solid foundation for
              students from Kindergarten to Grade 10, ensuring they develop strong
              language skills at every stage of their learning journey. The course
              starts with basic phonics, vocabulary, and simple sentence
              structures for younger students, making learning interactive and
              engaging through storytelling and songs. As students progress, they
              build on these skills, moving towards grammar, reading
              comprehension, and creative writing. In the upper grades, the focus
              shifts to more advanced concepts, such as essay writing, critical
              thinking, and literature analysis. This approach ensures students
              not only improve their language abilities but also become confident
              communicators, ready for academic success in higher grades.
            </p>
          </div>
        </div>
  
        {/* Key Points */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-14">
          <h2 className="text-4xl font-bold text-center mb-10">
            Key Points
          </h2>
          <div className="flex justify-center flex-wrap gap-10">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Foundations in Language
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                We believe a strong foundation in English opens doors to academic
                and personal success. Our course emphasizes clarity, comprehension,
                and communication.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Engaging Learning Experiences
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our curriculum is designed to make learning enjoyable through
                interactive activities, storytelling, and real-world applications
                of English skills.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Age-Appropriate Methods
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Tailored for students from KG to Grade 10, we adapt teaching
                methods to suit each age group, ensuring optimal learning at every
                stage.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Building Confidence
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our goal is to empower students to express themselves confidently
                in English, both in writing and speech, preparing them for academic
                and life success.
              </p>
            </div>
          </div>
        </div>
  
        {/* Fee Structure */}
        <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Affordable English Learning for Students</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KG to 5th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">KG to 5th</h2>
              <div className="flex justify-between" >
                <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹3500/month</p>
                <p className="text-gray-700 text-sm line-through">₹4000/month</p>
              </div>
              <div className="flex justify-between" >
                <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5000/month</p>
                <p className="text-gray-700 text-sm line-through">₹6000/month</p>
              </div>
              <div className="flex justify-between" >
              <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹7500/month</p>
              <p className="text-gray-700 text-sm line-through">₹9000/month</p>
              </div>
            </div>

            {/* 6th to 10th Fee Structure */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
              <h2 className="text-lg font-bold">6th to 10th</h2>
              <div className="flex justify-between">
                  <p className="text-gray-700 text-sm mb-4">2 Days/Week: ₹4000/month</p>
                  <p className="text-gray-700 text-sm line-through">₹5000/month</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 text-sm mb-4">3 Days/Week: ₹5500/month</p>
                <p className="text-gray-700 text-sm line-through">₹7000/month</p>
              </div>

             <div className="flex justify-between">
                <p className="text-gray-700 text-sm mb-4">5 Days/Week: ₹8000/month</p>
                <p className="text-gray-700 text-sm line-through">₹10000/month</p>
             </div > 
            </div>
          </div>
            <div className="flex justify-center mt-8 space-x-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🗓️
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Flexible Leaves
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🕒
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Adjustable Schedule
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                  🔄
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                  Easy Refunds
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Enroll Now */}
        <EnrollNow />
      </div>
    );
  }
  