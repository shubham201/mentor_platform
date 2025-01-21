import Image from "next/image";
import Buttons from "./buttons";

export default function Slide2(){
    return (
        <div className="bg-[#e8edfb] ">
          <div className="flex justify-between items-center px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Comprehensive English Program
              </div>
              <div className="text-xl py-4 font-medium">For Students from KG to 10th Grade
              </div>
              <div className="max-w-[600px]">
                Our English program is designed to nurture language skills and foster continuous growth for students from kindergarten 
                to 10th grade. Starting with the alphabet, phonics, and simple vocabulary, it gradually advances to complex grammar,
                creative writing, and literature analysis. With engaging lessons, practical exercises, and real-world applications,
                    students develop strong communication skills, creativity, and a love for language. The program equips them with the 
                    tools to express themselves effectively, think critically, and thrive academically and beyond.             
            </div>
              <Buttons navigate="english" ></Buttons>
            </div>
             <Image 
                                            src="/static/english.png"
                                            alt="Expert Tutors"
                                            width={500} // Adjust width
                                            height={300}// Adjust height
                                            className="rounded-md mt-5"
            />
          </div>
        </div>
    )
}