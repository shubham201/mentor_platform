import Link from "next/link";
import Navbar from "../components/navbar";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="bg-[#f2f4fc] pt-14 pb-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-base md:text-lg">
            Welcome to AtoInfinity Hub, your ultimate destination for learning, growth, and mentorship!
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-[#f2f4fc] pb-14 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-base md:text-lg mb-4">
              At AtoInfinity Hub, we bridge the gap between aspiring students and expert mentors. Our platform offers a wide array of
              <strong> comprehensive courses </strong>
              designed to empower students with the skills they need to succeed in today&apos;s fast-paced world. Whether you&apos;re looking
              to enhance your knowledge, prepare for your dream career, or explore new interests, our carefully curated courses cater to
              learners of all levels.
            </p>
            <p className="text-base md:text-lg mb-4">
              We take pride in our <strong>community of mentors</strong>—seasoned professionals and industry leaders dedicated to guiding
              students on their journey to success. AtoInfinity Hub also provides a unique opportunity for mentors to join our growing
              network, share their expertise, and make a meaningful impact by shaping the next generation of leaders.
            </p>
          </div>
        </div>

        {/* Philosophies Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Philosophies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Empowerment Through Knowledge</h3>
              <p className="text-sm md:text-lg text-gray-700">
                We believe that knowledge is the key to unlocking potential, and we are committed to providing students with the tools they
                need to thrive in their personal and professional lives.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Mentorship for Growth</h3>
              <p className="text-sm md:text-lg text-gray-700">
                At AtoInfinity Hub, mentorship is at the heart of our platform. We emphasize meaningful connections between students and
                mentors to foster growth, guidance, and continuous learning.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Adaptability and Innovation</h3>
              <p className="text-sm md:text-lg text-gray-700">
                In a constantly evolving world, we prioritize flexibility and adaptability in our offerings. We strive to keep our courses
                and mentoring programs aligned with the latest trends and technologies.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-[#43438b] mb-4">Collaborative Community</h3>
              <p className="text-sm md:text-lg text-gray-700">
                We value collaboration and encourage both students and mentors to share ideas, experiences, and insights that contribute to
                a supportive and dynamic environment.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm md:text-lg text-center text-gray-700">
            Whether you&apos;re a student eager to unlock your potential or a mentor looking to inspire and share knowledge, AtoInfinity
            Hub is where your journey begins. Join us today and take the first step toward a future of infinite possibilities!
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#f2f4fc] pt-10 text-center pb-10">
          <h2 className="text-xl md:text-2xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-base md:text-lg">
            Become a part of AtoInfinity Hub today! Join as a student or a mentor and unlock infinite possibilities.
          </p>
          <Link href="/">
            <button className="mt-6 px-6 py-3 bg-[#43438b] text-white font-semibold rounded-lg hover:bg-[#7070c5]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
