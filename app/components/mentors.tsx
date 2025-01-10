export default function Mentors(){
    return (
        <div className="bg-[#e8edfb]">
             <div className="text-2xl pt-3  font-bold text-center" >Our Mentors</div>
             <div className="text-xl pt-3  font-medium text-center" >Subtitle </div>
             <div className="px-10 flex justify-between">
                <div>
                    <div className="bg-[#F2F4FC] rounded-full mt-8 w-[200px] h-[200px] " ></div>
                    <div className="text-center pt-2 font-medium" >Details S1</div>
                </div>

                <div>
                    <div className="bg-[#F2F4FC] rounded-full mt-8 w-[200px] h-[200px]" ></div>
                    <div className="text-center pt-2 font-medium" >Details S2</div>
                </div>

                <div>
                    <div  className="bg-[#F2F4FC] rounded-full mt-8 w-[200px] h-[200px]" ></div>
                    <div className="text-center pt-2 font-medium" >Details S3</div>
                </div>

                <div>
                    <div  className="bg-[#F2F4FC] mt-8 w-[200px] h-[200px] rounded-full"></div>
                    <div className="text-center pt-2 font-medium" >Details S4</div>
                </div>

                <div>
                    <div  className="bg-[#F2F4FC] mt-8 w-[200px] h-[200px] rounded-full"></div>
                    <div className="text-center pt-2 font-medium" >Details S5</div>
                </div>
            </div>

            <div className="flex justify-center py-10 space-x-10">
                        <button className="bg-[#43438B] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">Read More</button>
                        <button className="bg-[#43438B] px-4 py-2 text-white font-medium rounded-md flex-grow max-w-[200px] flex items-center justify-center">Become a Mentor</button>
            </div>
        </div>
    )
}