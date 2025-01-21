import Image from "next/image";
import Buttons from "./buttons";

export default function Slide1(){
    return (
        <div className="bg-[#e8edfb] ">
          <div className="flex justify-between items-center px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Comprehensive Math Program
              </div>
              <div className="text-xl py-4 font-medium">For Students from KG to 10th Grade
              </div>
              <div className="max-w-[600px]">
              Our Math program is crafted to build a solid foundation and promote continuous growth for students from
               kindergarten to 10th grade. It begins with the basics of numbers, counting, and simple arithmetic and progresses to
               advanced concepts like algebra, geometry, and data analysis. Through interactive lessons, hands-on exercises, and 
               real-world problem-solving, students gain a deep understanding of mathematical principles. The program encourages 
               logical reasoning, critical thinking, and practical application, ensuring students excel academically and develop 
               the confidence to solve challenges in everyday life.
              </div>
              <Buttons navigate="maths" ></Buttons>
            </div>
             <Image 
                                            src="/static/colourful-math-numbers-letters-top-view.jpg"
                                            alt="Expert Tutors"
                                            width={500} // Adjust width
                                            height={300}// Adjust height
                                            className="rounded-md mt-5"
            />
          </div>
        </div>
    )
}