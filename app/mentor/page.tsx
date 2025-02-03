import Navbar from "../components/navbar"
import MentorButtons from "../components/MentorButtons"
import  Head  from "next/head";

export default function MentorReadMore() {
  return (
    <div>
      <Head>
        <title>Meet Our Mentors</title>
        <meta
          name="description"
          content="Learn more about our expert mentors and their education backgrounds. Connect with them for guidance and support."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="mentors, education, career guidance, expert mentors" />
        <meta property="og:title" content="Meet Our Mentors" />
        <meta
          property="og:description"
          content="Explore the profiles of our experienced mentors and their diverse education details."
        />
        <meta name="twitter:title" content="Meet Our Mentors" />
      </Head>
      <Navbar></Navbar>

      {/* Mentor 1 */}
      <div className="flex justify-center mt-10 p-8 items-center flex-col sm:flex-row sm:space-x-56">
        <div className="flex flex-col bg-[#e8edfb] text-center max-w-[1200px] p-6 rounded-lg space-y-4 shadow-lg sm:order-2">
          <div className="font-bold text-2xl text-gray-800">Name 1</div>
          <div className="font-medium text-lg text-gray-600">Education Details 1</div>
          <div className="text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, non quibusdam maiores odio eius blanditiis! 
            Temporibus velit at ut, eos non quidem error sapiente, nisi in incidunt culpa recusandae labore magni, ratione 
            perferendis voluptatem optio minus fugiat unde veniam.
          </div>
        </div>
      </div>

      {/* Mentor 2 */}
      <div className="flex justify-center mt-10 p-8 items-center flex-col sm:flex-row sm:space-x-56">
        <div className="flex flex-col bg-[#e8edfb] text-center max-w-[1200px] p-6 rounded-lg space-y-4 shadow-lg sm:order-2">
          <div className="font-bold text-2xl text-gray-800">Name 2</div>
          <div className="font-medium text-lg text-gray-600">Education Details 2</div>
          <div className="text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, non quibusdam maiores odio eius blanditiis! 
            Temporibus velit at ut, eos non quidem error sapiente, nisi in incidunt culpa recusandae labore magni, ratione 
            perferendis voluptatem optio minus fugiat unde veniam.
          </div>
        </div>
      </div>

      {/* Mentor 3 */}
      <div className="flex justify-center mt-10 p-8 items-center flex-col sm:flex-row sm:space-x-56">

        <div className="flex flex-col bg-[#e8edfb] text-center max-w-[1200px]  p-6 rounded-lg space-y-4 shadow-lg sm:order-2">
          <div className="font-bold text-2xl text-gray-800">Name 3</div>
          <div className="font-medium text-lg text-gray-600">Education Details 3</div>
          <div className="text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, non quibusdam maiores odio eius blanditiis! 
            Temporibus velit at ut, eos non quidem error sapiente, nisi in incidunt culpa recusandae labore magni, ratione 
            perferendis voluptatem optio minus fugiat unde veniam.
          </div>
        </div>
      </div>

      {/* Mentor 4 */}
      <div className="flex justify-center mt-10 p-8 items-center flex-col sm:flex-row sm:space-x-56">
        <div className="flex flex-col bg-[#e8edfb] text-center max-w-[1200px]  p-6 rounded-lg space-y-4 shadow-lg sm:order-2">
          <div className="font-bold text-2xl text-gray-800">Name 4</div>
          <div className="font-medium text-lg text-gray-600">Education Details 4</div>
          <div className="text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, non quibusdam maiores odio eius blanditiis! 
            Temporibus velit at ut, eos non quidem error sapiente, nisi in incidunt culpa recusandae labore magni, ratione 
            perferendis voluptatem optio minus fugiat unde veniam.
          </div>
        </div>
      </div>

      {/* Mentor 5 */}
      <div className="flex justify-center mt-10 mb-10 p-8 items-center flex-col sm:flex-row sm:space-x-56">
        <div className="flex flex-col bg-[#e8edfb] text-center max-w-[1200px] p-6 rounded-lg space-y-4 shadow-lg sm:order-2">
          <div className="font-bold text-2xl text-gray-800">Name 5</div>
          <div className="font-medium text-lg text-gray-600">Education Details 5</div>
          <div className="text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id, non quibusdam maiores odio eius blanditiis! 
            Temporibus velit at ut, eos non quidem error sapiente, nisi in incidunt culpa recusandae labore magni, ratione 
            perferendis voluptatem optio minus fugiat unde veniam.
          </div>
        </div>
      </div>
      <MentorButtons></MentorButtons>

    </div>
  )
}
