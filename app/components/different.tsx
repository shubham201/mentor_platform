import Image from "next/image";

export default function Different() {
    return (
        <div className="px-6 sm:px-12 lg:px-20 pt-20 pb-20 space-y-12">
            <div className="text-center text-3xl font-roboto font-extrabold ">
                Why AtoInfinity Hub?
            </div>

            <div className="flex flex-wrap gap-10 justify-center">
                {/* Expert Tutors */}
                <div className="bg-gradient-to-tr from-blue-200 to-white  p-8 w-[550px] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/static/online-teaching.png" alt="Expert Tutors" width={100} height={100} />
                        <h3 className="text-2xl font-bold text-gray-900">Expert Tutors</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                        <li className="flex items-center gap-2"><span className="text-blue-600 font-extrabold">✓</span> Tailored to every student’s unique learning goals</li>
                        <li className="flex items-center gap-2"><span className="text-blue-600 font-extrabold">✓</span> Proven success with engaging teaching methods</li>
                        <li className="flex items-center gap-2"><span className="text-blue-600 font-extrabold">✓</span> Covers CBSE, ICSE, State Boards, and International Curricula</li>
                    </ul>
                </div>

                {/* English & Maths Courses */}
                <div className="bg-gradient-to-tr from-green-200 to-white p-8 w-[550px] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/static/elearning.png" alt="English & Maths Courses" width={100} height={100} />
                        <h3 className="text-2xl font-bold text-gray-900">English & Maths Courses</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                        <li className="flex items-center gap-2"><span className="text-green-600 font-extrabold">✓</span> KG to Grade 5: English and Maths</li>
                        <li className="flex items-center gap-2"><span className="text-green-600 font-extrabold">✓</span> Grade 5 to 12: Comprehensive English programs</li>
                        <li className="flex items-center gap-2"><span className="text-green-600 font-extrabold">✓</span> Grade 6 to 10: Advanced Maths support</li>
                        <li className="flex items-center gap-2"><span className="text-green-600 font-extrabold">✓</span> Personalized learning paths to ensure academic success</li>
                    </ul>
                </div>

                {/* Competitive Exam Prep */}
                <div className="bg-gradient-to-tr from-yellow-200 to-white p-8 w-[550px] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/static/test.png" alt="Competitive Exam Prep" width={100} height={100} />
                        <h3 className="text-2xl font-bold text-gray-900">Competitive Exam Prep</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                        <li className="flex items-center gap-2"><span className="text-yellow-600 font-extrabold">✓</span> CTET Preparation: Master the teaching certification exam</li>
                        <li className="flex items-center gap-2"><span className="text-yellow-600 font-extrabold">✓</span> Bank, Railways, SSC English Prep: Achieve your dream job with focused coaching</li>
                    </ul>
                </div>

                {/* 1-to-1 Live Tutoring */}
                <div className="bg-gradient-to-tr from-purple-200 to-white p-8 w-[550px] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/static/ask.png" alt="1-to-1 Live Tutoring" width={100} height={100} />
                        <h3 className="text-2xl font-bold text-gray-900">1-to-1 Live Tutoring</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                        <li className="flex items-center gap-2"><span className="text-purple-600 font-extrabold">✓</span> Personalized attention with live instructors</li>
                        <li className="flex items-center gap-2"><span className="text-purple-600 font-extrabold">✓</span> Real-time doubt resolution for clarity</li>
                        <li className="flex items-center gap-2"><span className="text-purple-600 font-extrabold">✓</span> 100% interactive sessions - no recorded videos</li>
                    </ul>
                </div>

                {/* Interactive Practice Sessions */}
                <div className="bg-gradient-to-tr from-pink-200 to-white p-8 w-[550px] rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
                    <div className="flex flex-col items-center space-y-4">
                        <Image src="/static/quiz.png" alt="Interactive Practice Sessions" width={100} height={100} />
                        <h3 className="text-2xl font-bold text-gray-900">Interactive Practice Sessions</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-lg text-gray-800">
                        <li className="flex items-center gap-2"><span className="text-pink-600 font-extrabold">✓</span> Hands-on learning through quizzes and worksheets</li>
                        <li className="flex items-center gap-2"><span className="text-pink-600 font-extrabold">✓</span> Instant feedback to track progress</li>
                        <li className="flex items-center gap-2"><span className="text-pink-600 font-extrabold">✓</span> Builds problem-solving and critical thinking skills</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
