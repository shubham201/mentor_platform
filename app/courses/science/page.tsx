import Navbar from "@/app/components/navbar";
import EnrollNow from "@/app/components/enroll_now";

export default function Science() {
    return (
        <div>
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

            <div className="bg-yellow-400 py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black mb-6">
                        Affordable Science Tutoring for Your Child
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">KG to Class 5</h2>
                                <span className="text-green-500 text-sm">10% OFF</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                ₹500/class <span className="line-through text-gray-500">₹556</span>
                            </p>
                            <p className="text-gray-700 text-sm">
                                ₹480/class for 12 months (96 classes)
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm text-gray-600">6 months, 48 classes</span>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">Class 6 to Class 10</h2>
                                <span className="text-green-500 text-sm">8% OFF</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                ₹760/class <span className="line-through text-gray-500">₹700</span>
                            </p>
                            <p className="text-gray-700 text-sm">
                                ₹680/class for 12 months (96 classes)
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm text-gray-600">6 months, 48 classes</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 space-x-6">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                                🗓️
                            </div>
                            <p className="text-sm text-gray-700 font-semibold">Flexible Leaves</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                                🕒
                            </div>
                            <p className="text-sm text-gray-700 font-semibold">Adjustable Schedule</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                                🔄
                            </div>
                            <p className="text-sm text-gray-700 font-semibold">Easy Refunds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enroll Now form */}
            <EnrollNow></EnrollNow>
        </div>
    );
}
