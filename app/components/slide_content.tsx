import Image from "next/image";
import Buttons from "./buttons";

const sharedContainerStyles =
  "bg-[#e8edfb] flex items-center justify-center p-4 sm:p-6 lg:p-12 m-2";
const sharedContentStyles =
  "flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl space-y-6 lg:space-y-0 lg:space-x-12";

const imageStyles = "w-[600px] h-[400px] object-cover"; // Uniform image size

export function Slide1() {
  return (
    <div className={sharedContainerStyles}>
      <div className={sharedContentStyles}>
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/static/colourful-math-numbers-letters-top-view.jpg"
            alt="Math Program"
            className={imageStyles}
            width={600}
            height={400}
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="max-w-[550px] space-y-6 text-center lg:text-left lg:w-1/2">
          <div className="text-2xl lg:text-3xl font-bold">
            Comprehensive Math Program
          </div>
          <div className="text-lg lg:text-xl font-medium">
            For Students from KG to 10th Grade
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            Our Math program is crafted to build a solid foundation and promote
            continuous growth for students from kindergarten to 10th grade. It
            begins with the basics of numbers, counting, and simple arithmetic
            and progresses to advanced concepts like algebra, geometry, and data
            analysis. Through interactive lessons, hands-on exercises, and
            real-world problem-solving, students gain a deep understanding of
            mathematical principles. The program encourages logical reasoning,
            critical thinking, and practical application, ensuring students
            excel academically and develop the confidence to solve challenges in
            everyday life.
          </div>
          <Buttons navigate="maths" />
        </div>
      </div>
    </div>
  );
}

export function Slide2() {
  return (
    <div className={sharedContainerStyles}>
      <div className={sharedContentStyles}>
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/static/english.png"
            alt="English Program"
            className={imageStyles}
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-[550px] space-y-6 text-center lg:text-left lg:w-1/2">
          <div className="text-2xl lg:text-3xl font-bold">
            Comprehensive English Program
          </div>
          <div className="text-lg lg:text-xl font-medium">
            For Students from KG to 10th Grade
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            Our English program is designed to nurture language skills and
            foster continuous growth for students from kindergarten to 10th
            grade. Starting with the alphabet, phonics, and simple vocabulary,
            it gradually advances to complex grammar, creative writing, and
            literature analysis. With engaging lessons, practical exercises, and
            real-world applications, students develop strong communication
            skills, creativity, and a love for language. The program equips them
            with the tools to express themselves effectively, think critically,
            and thrive academically and beyond.
          </div>
          <Buttons navigate="english" />
        </div>
      </div>
    </div>
  );
}

export function Slide3() {
  return (
    <div className={sharedContainerStyles}>
      <div className={sharedContentStyles}>
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/static/science.svg"
            alt="Science Program"
            className={imageStyles}
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-[550px] space-y-6 text-center lg:text-left lg:w-1/2">
          <div className="text-2xl lg:text-3xl font-bold">
            Comprehensive Science Program
          </div>
          <div className="text-lg lg:text-xl font-medium">
            For Students from KG to 10th Grade
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            Our Science program is designed to spark curiosity and foster
            scientific inquiry among students from kindergarten to 10th grade.
            The curriculum covers a broad range of topics, from the basics of
            physical science to advanced concepts in biology, chemistry, and
            physics. Through hands-on experiments, interactive lessons, and
            real-world applications, students gain a deep understanding of
            scientific principles and develop the skills to think critically and
            solve problems. The program encourages scientific exploration,
            creativity, and practical application, empowering students to become
            lifelong learners and future innovators in the field of science.
          </div>
          <Buttons navigate="science" />
        </div>
      </div>
    </div>
  );
}

export function Slide4() {
  return (
    <div className={sharedContainerStyles}>
      <div className={sharedContentStyles}>
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/static/ctet.svg"
            alt="CTET Preparation"
            className={imageStyles}
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-[550px] space-y-6 text-center lg:text-left lg:w-1/2">
          <div className="text-2xl lg:text-3xl font-bold">
            Comprehensive CTET Preparation Program
          </div>
          <div className="text-lg lg:text-xl font-medium">
            For Aspiring Teachers
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            Our CTET Preparation Program is meticulously designed to help
            aspiring teachers build a strong foundation and excel in the Central
            Teacher Eligibility Test (CTET). The course covers all essential
            topics, including child pedagogy, teaching methodologies,
            subject-specific content, and assessment strategies. With detailed
            study material, interactive sessions, practice tests, and real-world
            teaching scenarios, candidates develop the confidence, expertise,
            and critical understanding required to succeed in the exam and
            embark on a rewarding teaching career.
          </div>
          <Buttons navigate="ctet" />
        </div>
      </div>
    </div>
  );
}

export function Slide5() {
  return (
    <div className={sharedContainerStyles}>
      <div className={sharedContentStyles}>
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="/static/ssc1.svg"
            alt="SSC Exam Preparation"
            className={imageStyles}
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-[550px] space-y-6 text-center lg:text-left lg:w-1/2">
          <div className="text-2xl lg:text-3xl font-bold">
            Comprehensive English Preparation Program
          </div>
          <div className="text-lg lg:text-xl font-medium">
            For Bank, Railways, and SSC Exams
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            Our English Preparation Program for Bank, Railways, and SSC exams is
            expertly crafted to equip aspirants with the language skills and
            strategies needed to excel in competitive exams. The course covers
            key areas, including grammar, vocabulary, reading comprehension,
            verbal ability, and error detection, tailored to exam-specific
            requirements. With interactive lessons, practice exercises, mock
            tests, and time-management tips, candidates gain the confidence and
            proficiency to tackle the English section effectively and achieve
            their career aspirations.
          </div>
          <Buttons navigate="banks-railways-ssc" />
        </div>
      </div>
    </div>
  );
}
