import Image from "next/image";

export default function Different() {
    return (
        <div className=" px-20 pt-20 pb-20 space-y-20">
        {/* Heading */}
        <div className="text-center text-3xl font-extrabold">Why AtoInfinity Hub?</div>

        {/* First Row */}
        <div className="flex justify-center space-x-20">
            {/* Expert Tutors */}
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full ">
            <div className="flex  items-center space-x-4">
            <Image
                            src="/static/online-teaching.png"
                            alt="Expert Tutors"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="rounded-md"
                />
                <h3 className="text-2xl font-bold mb-4">Expert Tutors</h3>
            </div>
                <ul className="space-y-3 list-disc list-inside text-lg">
                    <li>Tailored to every student&apos;s unique learning goals</li>
                    <li>Proven success with engaging teaching methods</li>
                    <li>Covers CBSE, ICSE, State Boards, and International Curricula</li>
                </ul>
            </div>

            {/* English & Maths Courses */}
            <div className="bg-green-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="flex  items-center space-x-4">
                    <Image
                                src="/static/elearning.png"
                                alt="Expert Tutors"
                                width={100} // Adjust width
                                height={100} // Adjust height
                                className="rounded-md"
                    />
                <h3 className="text-2xl font-bold mb-4">English & Maths Courses</h3>
                </div>
                <ul className="space-y-3 list-disc list-inside text-lg">
                    <li>KG to Grade 5: English and Maths</li>
                    <li>Grade 5 to 12: Comprehensive English programs</li>
                    <li>Grade 6 to 10: Advanced Maths support</li>
                    <li>Personalized learning paths to ensure academic success</li>
                </ul>
            </div>

            {/* Competitive Exam Prep */}
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="flex  items-center space-x-4" >
                    <Image
                                    src="/static/test.png"
                                    alt="Expert Tutors"
                                    width={100} // Adjust width
                                    height={100} // Adjust height
                                    className="rounded-md"
                    />
                    <h3 className="text-2xl font-bold mb-4">Competitive Exam Prep</h3>
                </div>
                
                <ul className="space-y-3 list-disc list-inside text-lg">
                    <li>CTET Preparation: Master the teaching certification exam</li>
                    <li>Bank, Railways, SSC English Prep: Achieve your dream job with focused coaching</li>
                </ul>
            </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center space-x-20">
            {/* 1-to-1 Live Tutoring */}
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="flex  items-center space-x-4" >
                <Image
                            src="/static/ask.png"
                            alt="Expert Tutors"
                            width={100} // Adjust width
                            height={100} // Adjust height
                            className="rounded-md"
                />
                <h3 className="text-2xl font-bold mb-4">1-to-1 Live Tutoring</h3>
                </div>
                <ul className="space-y-3 list-disc list-inside text-lg">
                    <li>Personalized attention with live instructors</li>
                    <li>Real-time doubt resolution for clarity</li>
                    <li>100% interactive sessions - no recorded videos</li>
                </ul>
            </div>

            {/* Interactive Practice Sessions */}
            <div className="bg-pink-100 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                <div className="flex  items-center space-x-4">
                    <Image
                                src="/static/quiz.png"
                                alt="Expert Tutors"
                                width={100} // Adjust width
                                height={100} // Adjust height
                                className="rounded-md"
                    />
                    <h3 className="text-2xl font-bold mb-4">Interactive Practice Sessions</h3>
                </div>
                <ul className="space-y-3 list-disc list-inside text-lg">
                    <li>Hands-on learning through quizzes and worksheets</li>
                    <li>Instant feedback to track progress</li>
                    <li>Builds problem-solving and critical thinking skills</li>
                </ul>
            </div>
        </div>
    </div>
    );
}