import Navbar from "@/app/components/navbar"
import EnrollNow from "@/app/components/enroll_now"

export default function CTETPreparation() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
        <h1 className="text-4xl font-bold">CTET Preparation Course</h1>
        <p className="mt-4 text-lg">Comprehensive Guidance for Aspiring Teachers</p>
      </div>

      <div className="bg-[#f2f4fc] pb-14 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-4">
            Our CTET Preparation Course is meticulously designed to help aspiring teachers excel in the Central Teacher Eligibility Test (CTET). This course covers all essential topics, including Child Development and Pedagogy, Language Proficiency, Mathematics, Environmental Studies, and Subject-Specific Pedagogy. With an emphasis on conceptual clarity, mock tests, and time management strategies, we ensure that students are fully prepared to succeed. By focusing on the latest syllabus and exam patterns, we aim to make learning effective and streamlined for prospective educators.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pt-10 pb-14">
        <h2 className="text-4xl font-bold text-center mb-10">Key Points</h2>

        <div className="flex justify-center flex-wrap gap-10">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Focused Curriculum</h3>
            <p className="text-lg text-gray-700">
              Our course is aligned with the latest CTET syllabus, focusing on all key areas including Pedagogy, Languages, Mathematics, and Environmental Studies.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Mock Tests & Analysis</h3>
            <p className="text-lg text-gray-700">
              We provide regular mock tests to help students practice effectively, along with detailed analysis to identify strengths and areas for improvement.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Expert Guidance</h3>
            <p className="text-lg text-gray-700">
              Learn from experienced educators who provide personalized guidance and tips to tackle the CTET with confidence and clarity.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full lg:w-[360px]">
            <h3 className="text-xl font-semibold text-[#43438b] mb-4">Effective Time Management</h3>
            <p className="text-lg text-gray-700">
              Our course equips students with strategies to manage their time effectively during the exam, ensuring they can answer all sections within the allotted time.
            </p>
          </div>
        </div>

        <p className="mt-10 text-lg text-center text-gray-700">
          Join our CTET Preparation Course at AtoInfinity Hub and take the first step towards a rewarding teaching career. Let us help you ace the CTET and achieve your dreams!
        </p>
      </div>

      <div className="bg-yellow-400 py-12">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-3xl font-bold text-black mb-6">
      Affordable CTET Coaching for Aspiring Teachers
    </h1>
    <div className="flex justify-center">
      {/* CTET Basic Plan Card */}
      <div className="max-w-xs  bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">CTET Basic</h2>
          <span className="text-green-500 text-sm">15% OFF</span>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          ₹600/class <span className="line-through text-gray-500">₹705</span>
        </p>
        <p className="text-gray-700 text-sm mb-4">
          ₹580/class for 12 months (96 classes)
        </p>
        <p className="text-sm text-gray-600">6 months, 48 classes</p>
      </div>
    </div>

    <div className="flex justify-center mt-8 space-x-6">
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
          🗓️
        </div>
        <p className="text-sm text-gray-700 font-semibold">Flexible Schedules</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
          🕒
        </div>
        <p className="text-sm text-gray-700 font-semibold">Weekend Batches Available</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
          🔄
        </div>
        <p className="text-sm text-gray-700 font-semibold">Easy Refund Policy</p>
      </div>
    </div>
  </div>
</div>
      {/* Enroll Now form */}
      <EnrollNow></EnrollNow>
    </div>
  )
}
