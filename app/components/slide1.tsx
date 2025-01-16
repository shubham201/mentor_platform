import Image from "next/image";

export default function Slide1(){
  function democlass(){
      alert("hello")
  }
    return (
        <div className="bg-[#e8edfb] ">
          <div className="flex justify-between items-center px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Comprehensive English and Math Program
              </div>
              <div className="text-xl py-4 font-medium">For Students from KG to 10th Grade
              </div>
              <div className="max-w-[600px]">
              Our English and Math program is designed to provide a strong foundation and continuous growth for students from 
              kindergarten to 10th grade. The course focuses on age-appropriate skills, from learning alphabets and basic numbers 
              to mastering advanced grammar, literature, and mathematical concepts. With interactive lessons, practical exercises, 
              and real-life problem-solving, students develop confidence, creativity, and critical thinking to excel academically and 
              beyond.
              </div>
              <div className="flex py-6 space-x-7">
                <button onClick={democlass} className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Book a Demo Class
                </button>
                <button className="bg-[#43438B] hover:bg-[#7070c5] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Enroll Now
                </button>
              </div>
            </div>
             <Image 
                                            src="/static/colourful-math-numbers-letters-top-view.jpg"
                                            alt="Expert Tutors"
                                            width={500} // Adjust width
                                            height={300}// Adjust height
                                            className="rounded-md mt-5"
            />
            {/* <div className="bg-[#F2F4FC] mt-5 w-[700px] h-[300px]"></div> */}
          </div>
        </div>
    )
}