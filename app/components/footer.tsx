import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faYoutube, faFacebook} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
export default function Footer() {
  return (
    <div className="bg-[#43438b] text-white py-10 px-6 md:px-16">
      {/* Footer container */}
      <div className="grid grid-cols-1 md:flex md:justify-between gap-6 md:gap-0">
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li><Link href="#navbar">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="#feedback">Feedback</Link></li>
              <li><Link href="#courses-overview">Courses</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li><Link href="#courses-overview">Join as Student</Link></li>
              <li><Link href="#mentors">Become a Mentor</Link></li>
              <li><Link href="#coverpage">Apply for Free Demo Class</Link></li>
              <li><Link href="/fee-structure">Fee Structure</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start space-y-4 md:space-y-2 md:mr-4">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <p className="text-sm">Email: <Link href="mailto:abc@gmail.com">atoinfinityhub@gmail.com</Link></p>
          <p className="text-sm">Phone: <Link href="tel:9xxxxxxxxx">+91 87897 85275</Link></p>
          {/* <p className="text-sm">Support: <Link href="tel:9xxxxxxxxx">9xxxxxxxxx</Link></p> */}
        </div>

        {/* Logo Section */}
        <div className="flex justify-center md:justify-end">
          {/* <div className="bg-[#F2F4FC] w-[120px] h-[120px] rounded-full"></div> */}
          <Image src="/static/logo.png" alt="logo" width={150} height={150} className="rounded-full" ></Image>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-6">
        <Link href="https://google.com" passHref>
          <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-gray-300" />
        </Link>
        {/* <Link href="https://google.com" passHref>
          <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-gray-300" />
        </Link> */}
        <Link href="https://google.com" passHref>
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-gray-300" />
        </Link>
        <Link href="https://www.youtube.com/@AtoInfinityHub" passHref>
          <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-gray-300" />
        </Link>
        <Link href="https://google.com" passHref>
          <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-gray-300" />
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AtoInfinity Hub. All Rights Reserved.
      </div>
    </div>
  );
}
