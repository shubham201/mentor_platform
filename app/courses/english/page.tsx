import Navbar from "@/app/components/navbar"
import EnrollNow from "@/app/components/enroll_now"
export default function English() {
    return (
      <div>
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
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
            Key Points
          </h2>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-[320px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Foundations in Language
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                We believe a strong foundation in English opens doors to academic
                and personal success. Our course emphasizes clarity, comprehension,
                and communication.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-[320px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Engaging Learning Experiences
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our curriculum is designed to make learning enjoyable through
                interactive activities, storytelling, and real-world applications
                of English skills.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-[320px]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#43438b] mb-2">
                Age-Appropriate Methods
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Tailored for students from KG to Grade 10, we adapt teaching
                methods to suit each age group, ensuring optimal learning at every
                stage.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-[320px]">
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
        <div className="bg-yellow-400 py-10 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-xl sm:text-3xl font-bold text-black mb-6">
              Affordable English Tutoring for Your Child
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-left">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold">
                    KG to Class 5
                  </h2>
                  <span className="text-green-500 text-sm">13.5% OFF</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-2">
                  ₹541/class <span className="line-through">₹626</span>
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  ₹525/class for 12 months (96 classes)
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  6 months, 48 classes
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-left">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold">
                    Class 6 to Class 10
                  </h2>
                  <span className="text-green-500 text-sm">5% OFF</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-2">
                  ₹788/class <span className="line-through">₹829</span>
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  ₹750/class for 12 months (96 classes)
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  6 months, 48 classes
                </p>
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
  