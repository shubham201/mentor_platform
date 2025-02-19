import MentorButtons from "./MentorButtons";

export default function Mentors() {
  return (
    <div  id="mentors" className="px-4">
      <div className="text-2xl pt-3 font-bold text-center">Our Mentors</div>
      <div className="text-xl pt-3 font-medium text-center">Experts Who Guide Your Learning</div>
      
      <div className="px-10 flex flex-wrap justify-center md:justify-between">
        <div className="flex flex-col items-center m-4">
          <div className="bg-[#F2F4FC] rounded-full w-[200px] h-[200px] mt-8"></div>
          <div className="text-center pt-2 font-medium">Details S1</div>
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