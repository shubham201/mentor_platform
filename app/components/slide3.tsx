export default function Slide3(){
    return (
        <div className="bg-[#e8edfb]">
          <div className="flex justify-between px-44 py-14 space-x-48">
            <div>
              <div className="text-2xl font-bold">Sample Heading 3</div>
              <div className="text-xl py-4 font-medium">Sub-Title 3</div>
              <div className="max-w-[600px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </div>
              <div className="flex py-3 space-x-7">
                <button className="bg-[#43438B] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Book a Demo Class
                </button>
                <button className="bg-[#43438B] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="bg-[#F2F4FC] mt-5 w-[700px] h-[300px]"></div>
          </div>
        </div>
    )
}