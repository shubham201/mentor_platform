import Image from "next/image";

export default function Different() {
    return (
        <div className="px-6 sm:px-12 lg:px-20 pt-20 pb-20 space-y-12">
            {/* Heading */}
            <div className="text-center text-3xl font-extrabold">Why AtoInfinity Hub?</div>

            {/* Grid Layout */}
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* Expert Tutors */}
                <div className="bg-blue-100 p-8 rounded-lg shadow-lg flex flex-col justify-center hover:scale-105 hover:shadow-2xl transition-transform min-h-[300px]">
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/static/online-teaching.png"
                            alt="Expert Tutors"
                            width={100}
                            height={100}
                            className="rounded-md"
                        />
                        <h3 className="text-2xl font-bold">Expert Tutors</h3>
                    </div>
                    <ul className="mt-6 space-y-3 list-disc list-inside text-lg">
                        <li><span className="font-bold">Tailored</span> to every student&apos;s unique learning goals</li>
                        <li><span className="font-bold">Proven success</span> with engaging teaching methods</li>
                        <li><span className="font-bold">Covers</span> CBSE, ICSE, State Boards, and International Curricula</li>
                    </ul>
                </div>

                {/* English & Maths Courses */}
                <div className="bg-green-100 p-8 rounded-lg shadow-lg flex flex-col justify-center hover:scale-105 hover:shadow-2xl transition-transform min-h-[300px]">
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/static/elearning.png"
                            alt="English & Maths Courses"
                            width={100}
                            height={100}
                            className="rounded-md"
                        />
                        <h3 className="text-2xl font-bold">English & Maths Courses</h3>
                    </div>
                    <ul className="mt-6 space-y-3 list-disc list-inside text-lg">
                        <li><span className="font-semibold">KG to Grade 5:</span> English and Maths</li>
                        <li><span className="font-semibold">Grade 5 to 12:</span> Comprehensive English programs</li>
                        <li><span className="font-semibold">Grade 6 to 10:</span> Advanced Maths support</li>
                        <li><span className="font-semibold">Personalized</span> learning paths to ensure academic success</li>
                    </ul>
                </div>

                {/* Competitive Exam Prep */}
                <div className="bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col justify-center hover:scale-105 hover:shadow-2xl transition-transform min-h-[300px]">
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/static/test.png"
                            alt="Competitive Exam Prep"
                            width={100}
                            height={100}
                            className="rounded-md"
                        />
                        <h3 className="text-2xl font-bold">Competitive Exam Prep</h3>
                    </div>
                    <ul className="mt-6 space-y-3 list-disc list-inside text-lg">
                        <li><span className="font-semibold">CTET Preparation:</span> Master the teaching certification exam</li>
                        <li><span className="font-semibold">Bank, Railways, SSC English Prep:</span> Achieve your dream job with focused coaching</li>
                    </ul>
                </div>

                {/* Wrapper for the last two tiles */}
                <div className="lg:col-span-3 flex flex-col lg:flex-row lg:justify-center gap-10">
                    {/* 1-to-1 Live Tutoring */}
                    <div className="bg-purple-100 p-8 rounded-lg shadow-lg flex flex-col justify-center hover:scale-105 hover:shadow-2xl transition-transform min-h-[300px]">
                        <div className="flex flex-col items-center space-y-4">
                            <Image
                                src="/static/ask.png"
                                alt="1-to-1 Live Tutoring"
                                width={100}
                                height={100}
                                className="rounded-md"
                            />
                            <h3 className="text-2xl font-bold">1-to-1 Live Tutoring</h3>
                        </div>
                        <ul className="mt-6 space-y-3 list-disc list-inside text-lg">
                            <li><span className="font-semibold">Personalized attention</span> with live instructors</li>
                            <li><span className="font-semibold">Real-time</span> doubt resolution for clarity</li>
                            <li><span className="font-semibold">100% interactive</span> sessions - no recorded videos</li>
                        </ul>
                    </div>

                    {/* Interactive Practice Sessions */}
                    <div className="bg-pink-100 p-8 rounded-lg shadow-lg flex flex-col justify-center hover:scale-105 hover:shadow-2xl transition-transform min-h-[300px]">
                        <div className="flex flex-col items-center space-y-4">
                            <Image
                                src="/static/quiz.png"
                                alt="Interactive Practice Sessions"
                                width={100}
                                height={100}
                                className="rounded-md"
                            />
                            <h3 className="text-2xl font-bold">Interactive Practice Sessions</h3>
                        </div>
                        <ul className="mt-6 space-y-3 list-disc list-inside text-lg">
                            <li><span className="font-semibold">Hands-on learning</span> through quizzes and worksheets</li>
                            <li><span className="font-semibold">Instant feedback</span> to track progress</li>
                            <li><span className="font-semibold">Builds problem-solving</span> and critical thinking skills</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}




