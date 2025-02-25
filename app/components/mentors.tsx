import MentorButtons from "./MentorButtons";
import Image from "next/image";
import Link from "next/link";

export default function Mentors() {
  return (
    <div id="mentors" className="px-4">
      <div className="text-2xl pt-3 font-bold text-center">Our Mentors</div>
      <div className="text-xl pt-3 font-medium text-center">Experts Who Guide Your Learning</div>

      <div className="px-10 flex flex-wrap justify-center md:justify-between">
        <div className="w-[400px] flex flex-col items-center mt-16  bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/static/shalini2.jpg"
              alt="mentor-Shalini Kumari"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4 text-2xl font-bold text-gray-800">Shalini Kumari</div>
          <div className="text-center mt-1 text-lg font-medium text-gray-600">
            Postgradute, Delhi University
          </div>
          <Link
            href="https://www.linkedin.com/in/shalini-roy-8142a4304/"
            target="_blank"
            className="mt-3 px-4 py-2 text-center bg-[#facc15] rounded-md text-sm font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Connect on LinkedIn
          </Link>
        </div>

        <div className="w-[400px] flex flex-col items-center mt-16  bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/static/shubham.jpeg"
              alt="mentor-Shubham Bharti"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4 text-2xl font-bold text-gray-800">Shubham Bharti</div>
          <div className="text-center mt-1 text-lg font-medium text-gray-600">
            Computer Science Alumni, IIT BHU
          </div>
          <Link
            href="https://www.linkedin.com/in/shubham-bharti-64aa55b6/"
            target="_blank"
            className="mt-3 px-4 py-2 text-center bg-[#facc15] rounded-md text-sm font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Connect on LinkedIn
          </Link>
        </div>

        <div className="w-[400px] flex flex-col items-center mt-16  bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/static/sagar.jpg"
              alt="mentor-Sagar Suman"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4 text-2xl font-bold text-gray-800">Sagar Suman</div>
          <div className="text-center mt-1 text-lg font-medium text-gray-600">
            M.Sc. Economics, IIT KGP
          </div>
          <Link
            href="https://www.linkedin.com/in/sagar-suman-66974b199/"
            target="_blank"
            className="mt-3 px-4 py-2 text-center bg-[#facc15] rounded-md text-sm font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <MentorButtons />
      </div>
    </div>
  );
}