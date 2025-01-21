export default function Footer(){
    return (
        <div className="bg-[#43438b] py-5 px-10">
            <div className="flex justify-between text-white font-light">
                <div className="flex space-x-10">
                    <div>
                        <a href="#navbar" className="block">Home</a>
                        <a href="/about-us" className="block pt-1">About Us</a>
                        <a href="#feedback" className="block pt-1">Feedback</a>
                        <a href="#courses-overview" className="block pt-1">Courses</a>
                    </div>

                    <div>
                        <a href="#courses-overview" className="block pt-1">Join as Student</a>
                        <a href="#become-mentor" className="block pt-1">Become a Mentor</a>
                        <a href="#courses-overview" className="block pt-1">Apply for Free demo class</a>
                        <a href="/fee-structure" className="block pt-1">Fee structure</a>
                    </div>
                </div>

                <div className="flex space-x-10">
                    <div>
                        <div>Contact Us</div>
                        <div className="pt-2">abc@gmail.com</div>
                        <div className="pt-1">9xxxxxxxxx</div>
                        <div className="pt-1">9xxxxxxxxx</div>
                    </div>
                    <div className="bg-[#F2F4FC] py-8 w-[100px] h-[100px] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}