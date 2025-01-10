export default function Feedback(){
    return(
        <div className="bg-[#cdd2ed]">
            <div className="text-2xl pt-5  font-bold text-center" >Feedback From Parents</div>
            <div className="text-xl pt-3  font-medium text-center" >Subtitle </div>
            <div className="px-10 pt-8 flex justify-between">
                <div>
                    <div className="bg-[#F2F4FC] mt-8 w-[250px] h-[190px] " ></div>
                    <div className="text-center pt-2 font-medium" >Details S1</div>
                </div>

                <div>
                    <div className="bg-[#F2F4FC] mt-8 w-[250px] h-[190px]" ></div>
                    <div className="text-center pt-2 font-medium" >Details S2</div>
                </div>

                <div>
                    <div  className="bg-[#F2F4FC] mt-8 w-[250px] h-[190px]" ></div>
                    <div className="text-center pt-2 font-medium" >Details S3</div>
                </div>

                <div>
                    <div  className="bg-[#F2F4FC] mt-8 w-[250px] h-[190px]"></div>
                    <div className="text-center pt-2 font-medium" >Details S4</div>
                </div>
            </div>

            <div className="flex justify-center  pt-5 pb-5" >
                <button className="bg-[#43438B] px-7 py-2 text-white font-medium rounded-md " >Read More</button>
            </div>
        </div>
    )
}