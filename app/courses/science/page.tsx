import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";
import Head from "next/head";

export default function Science() {
    return (
        <div>
          <Head>
                <title>Science Course | Engaging Science Classes for KG to 10th</title>
                <meta
                    name="description"
                    content="Enroll in our interactive Science course designed for students from KG to Class 10. Hands-on learning, real-world applications, and expert guidance!"
                />
                <meta
                    name="keywords"
                    content="Science classes, online Science tutoring, KG to 10th Science, Science coaching, interactive Science learning, Science experiments, physics, chemistry, biology, competitive exam Science, foundational Science concepts"
                />
                <meta name="author" content="AtoInfinity Hub" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph (OG) Meta Tags for Social Media */}
                <meta property="og:title" content="Science Course | Engaging Science Classes for KG to 10th" />
                <meta
                    property="og:description"
                    content="Explore our engaging Science course with hands-on experiments and real-world applications. Designed for KG to 10th grade students."
                />
            </Head>
            <Navbar></Navbar>
            <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
                <h1 className="text-4xl font-bold">Science Course</h1>
                <p className="mt-4 text-lg">For Students from KG to 10th</p>
            </div>

            <div className="bg-[#f2f4fc] pb-14 px-8">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg mb-4">
                        Our Science course is thoughtfully designed to nurture curiosity, develop critical thinking, and foster a
                        deep understanding of the natural world for students from Kindergarten to Grade 10. Younger students explore
                        basic scientific concepts through interactive activities and experiments, making science fun and engaging.
                        As students advance, they delve into foundational concepts in biology, chemistry, and physics, learning how
                        the world works through real-life applications and hands-on experiments. The curriculum for older students
                        emphasizes advanced topics like genetics, chemical reactions, and the laws of motion, preparing them for
                        academic excellence and competitive exams. This comprehensive approach ensures students develop a strong
                        scientific foundation while fostering a lifelong love for discovery and exploration.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-8 pt-10 pb-14">
                <h2 className="text-4xl font-bold text-center mb-10">Key Points</h2>

                <div className="flex justify-center flex-wrap gap-10">
                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
                        <h3 className="text-xl font-semibold text-[#43438b] mb-4">Hands-On Learning</h3>
                        <p className="text-lg text-gray-700">
                            Our curriculum emphasizes practical experiments and interactive activities to make science engaging and easy to understand.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
                        <h3 className="text-xl font-semibold text-[#43438b] mb-4">Foundational Concepts</h3>
                        <p className="text-lg text-gray-700">
                            Designed to build a strong foundation in biology, chemistry, and physics, preparing students for advanced learning.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
                        <h3 className="text-xl font-semibold text-[#43438b] mb-4">Real-World Applications</h3>
                        <p className="text-lg text-gray-700">
                            Explore science through real-life applications, helping students understand how science impacts everyday life.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
                        <h3 className="text-xl font-semibold text-[#43438b] mb-4">Exam-Ready Curriculum</h3>
                        <p className="text-lg text-gray-700">
                            Our course prepares students for competitive exams with a focus on advanced scientific concepts and problem-solving.
                        </p>
                    </div>
                </div>
                <p className="mt-10 text-lg text-center text-gray-700">
                    If you&apos;re a student from KG to 10th grade eager to explore the wonders of science, AtoInfinity Hub is here to guide you.
                    Start your journey with us today and unlock a world of discovery and innovation!
                </p>
            </div>

            <div className="bg-yellow-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">Affordable Science Learning for Students</h1>

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
  

            {/* Enroll Now form */}
            <EnrollNow></EnrollNow>
        </div>
    );
}
