import Image from 'next/image';
import BookADemoClass from './bookAdemoClass';

export default function CoverPage() {
  return (
    <div className="w-full min-h-[75vh] bg-[#43438b] text-white flex items-center justify-center px-5 md:px-10">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-10 md:gap-52"> {/* Adjusted gap and flex direction */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Unlock Your Child&apos;s Potential with <span className="text-yellow-400">AtoInfinity Hub</span>!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Expert-led courses in Math, Science, English, Computers, and CTET with one-on-one mentorship for success!
          </p>
          <BookADemoClass></BookADemoClass>
        </div>
        
        <div className="flex justify-center mt-8 md:mt-0">
          <Image 
            src="/static/coverpage.png" 
            width={800} 
            height={800} 
            alt="Learning Math" 
            className="w-3/4 md:w-[400px] lg:w-[500px] xl:w-[1500px]"
          />
        </div>
      </div>
    </div>
  );
}

