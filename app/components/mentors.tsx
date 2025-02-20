import MentorButtons from "./MentorButtons";
import Image from "next/image";
import Link from "next/link";

export default function Mentors() {
  return (
    <div  id="mentors" className="px-4">
      <div className="text-2xl pt-3 font-bold text-center">Our Mentors</div>
      <div className="text-xl pt-3 font-medium text-center">Experts Who Guide Your Learning</div>
      
      <div className="px-10 flex flex-wrap justify-center md:justify-between">
      <div className="flex flex-col items-center mt-16 mx-10 bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
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
    className="mt-3 px-4 py-2 bg-[#facc15] rounded-lg text-sm font-semibold shadow-md hover:bg-yellow-500 transition"
  >
    Connect on LinkedIn
  </Link>
</div>


        <div className="flex flex-col items-center m-4">
          <div className="bg-[#F2F4FC] rounded-full w-[200px] h-[200px] mt-8"></div>
          <div className="text-center pt-2 font-medium">Details S2</div>
        </div>
        <div className="flex flex-col items-center m-4">
          <div className="bg-[#F2F4FC] rounded-full w-[200px] h-[200px] mt-8"></div>
          <div className="text-center pt-2 font-medium">Details S3</div>
        </div>
        <div className="flex flex-col items-center m-4">
          <div className="bg-[#F2F4FC] rounded-full w-[200px] h-[200px] mt-8"></div>
          <div className="text-center pt-2 font-medium">Details S4</div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <MentorButtons />
      </div>
    </div>
  );
}