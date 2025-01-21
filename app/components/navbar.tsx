import Link from "next/link"
import CoursesDropdown from "./coursesDropdown"
export default function Navbar(){
     return (
     <div id="navbar" className="bg-[#43438b]  " >
        <div className="flex text-sm justify-between items-center font-light  px-8 py-4">
        <div className="bg-[#F2F4FC] w-12 h-12 rounded-full" ></div>
            <div className="flex space-x-14 text-white">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <CoursesDropdown></CoursesDropdown>
                <Link href="/fee-structure" >Fee Structure</Link>
            </div>
        </div> 
    </div>
    )
}