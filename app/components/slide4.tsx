import Image from "next/image";
import Buttons from "./buttons";

export default function Slide4(){
    return (
        <div className="">
          <div className="flex justify-between items-center px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Comprehensive English Preparation Program</div>
              <div className="text-xl py-4 font-medium">For Bank, Railways, and SSC Exams</div>
              <div className="max-w-[600px]">
              Our English Preparation Program for Bank, Railways, and SSC exams is expertly crafted to equip aspirants with the language 
              skills and strategies needed to excel in competitive exams. The course covers key areas, including grammar, vocabulary, 
              reading comprehension, verbal ability, and error detection, tailored to exam-specific requirements. With interactive lessons,
               practice exercises, mock tests, and time-management tips, candidates gain the confidence and proficiency to tackle the English
                section effectively and achieve their career aspirations.
              </div>
              <Buttons navigate="banks-railways-ssc" ></Buttons>
            </div>

            <Image 
                                    src="/static/ssc1.svg"
                                    alt=""
                                    width={350} // Adjust width
                                    height={300}// Adjust height
                                    className="rounded-md mt-5"
             />   

            {/* <div className="bg-[#F2F4FC] mt-5 w-[700px] h-[300px]"></div> */}
          </div>
        </div>
    )
}