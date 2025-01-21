import Image from "next/image";
import Buttons from "./buttons";

export default function Slide3(){
    return (
        <div className="">
          <div className="flex justify-between items-center px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Comprehensive CTET Preparation Program</div>
              <div className="text-xl py-4 font-medium">For Aspiring Teachers</div>
              <div className="max-w-[600px]">
              Our CTET Preparation Program is meticulously designed to help aspiring teachers build a strong foundation and excel in
               the Central Teacher Eligibility Test (CTET). The course covers all essential topics, including child pedagogy, teaching
                methodologies, subject-specific content, and assessment strategies. With detailed study material, interactive sessions,
                 practice tests, and real-world teaching scenarios, candidates develop the confidence, expertise, and critical understanding 
                 required to succeed in the exam and embark on a rewarding teaching career.
              </div>
             <Buttons navigate="ctet" ></Buttons>
            </div>

            <Image 
                        src="/static/ctet.svg"
                        alt=""
                        width={500} // Adjust width
                        height={300}// Adjust height
                        className="rounded-md mt-5"
              />            

            {/* <div className="bg-[#F2F4FC] mt-5 w-[700px] h-[300px]"></div> */}
          </div>
        </div>
    )
}