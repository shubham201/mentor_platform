import Image from "next/image";
import Buttons from "./buttons";

const sharedContainerStyles = "bg-[#e8edfb] h-[50vh] flex items-center justify-center m-2";
const sharedContentStyles = "flex items-center justify-between w-full max-w-7xl space-x-12";

export function Slide1() {
    return (
        <div className={sharedContainerStyles}>
            <div className={sharedContentStyles}>
                <div className="max-w-[550px] space-y-6">
                    <div className="text-3xl font-bold">Comprehensive Math Program</div>
                    <div className="text-xl font-medium">For Students from KG to 10th Grade</div>
                    <div className="text-gray-700 ">
                        Our Math program is crafted to build a solid foundation and promote continuous growth for students from kindergarten
                        to 10th grade. It begins with the basics of numbers, counting, and simple arithmetic and progresses to advanced concepts
                        like algebra, geometry, and data analysis. Through interactive lessons, hands-on exercises, and real-world problem-solving,
                        students gain a deep understanding of mathematical principles. The program encourages logical reasoning, critical thinking,
                        and practical application, ensuring students excel academically and develop the confidence to solve challenges in everyday life.
                    </div>
                    <Buttons navigate="maths" />
                </div>
                <Image
                    src="/static/colourful-math-numbers-letters-top-view.jpg"
                    alt="Math Program"
                    width={450}
                    height={300}
                    
                />
            </div>
        </div>
    );
}

export function Slide2() {
    return (
        <div className={sharedContainerStyles}>
            <div className={sharedContentStyles}>
                <div className="max-w-[550px] space-y-6">
                    <div className="text-3xl font-bold">Comprehensive English Program</div>
                    <div className="text-xl font-medium">For Students from KG to 10th Grade</div>
                    <div className="text-gray-700 ">
                        Our English program is designed to nurture language skills and foster continuous growth for students from kindergarten
                        to 10th grade. Starting with the alphabet, phonics, and simple vocabulary, it gradually advances to complex grammar,
                        creative writing, and literature analysis. With engaging lessons, practical exercises, and real-world applications,
                        students develop strong communication skills, creativity, and a love for language. The program equips them with the
                        tools to express themselves effectively, think critically, and thrive academically and beyond.
                    </div>
                    <Buttons navigate="english" />
                </div>
                <Image
                    src="/static/english.png"
                    alt="English Program"
                    width={450}
                    height={300}
                    
                />
            </div>
        </div>
    );
}

export function Slide3(){
    return(
        <div className={sharedContainerStyles}>
        <div className={sharedContentStyles}>
            <div className="max-w-[550px] space-y-6">
                <div className="text-3xl font-bold">Comprehensive Science Program</div>
                <div className="text-xl font-medium">For Students from KG to 10th Grade</div>
                <div className="text-gray-700 ">
                    Our Science program is designed to spark curiosity and foster scientific inquiry among students from kindergarten
                    to 10th grade. The curriculum covers a broad range of topics, from the basics of physical science to advanced concepts in biology, chemistry,
                    and physics. Through hands-on experiments, interactive lessons, and real-world applications, students gain a deep understanding of scientific principles
                    and develop the skills to think critically and solve problems. The program encourages scientific exploration, creativity, and practical application,
                    empowering students to become lifelong learners and future innovators in the field of science.
                </div>
                <Buttons navigate="science" />
            </div>
            <Image
                src="/static/ssc.svg" // Replace with a relevant science image
                alt="Science Program"
                width={450}
                height={300}
                
            />
        </div>
        </div>
    );
}

export function Slide4() {
    return (
        <div className={sharedContainerStyles}>
            <div className={sharedContentStyles}>
                <div className="max-w-[550px] space-y-6">
                    <div className="text-3xl font-bold">Comprehensive CTET Preparation Program</div>
                    <div className="text-xl font-medium">For Aspiring Teachers</div>
                    <div className="text-gray-700 ">
                        Our CTET Preparation Program is meticulously designed to help aspiring teachers build a strong foundation and excel in
                        the Central Teacher Eligibility Test (CTET). The course covers all essential topics, including child pedagogy, teaching methodologies,
                        subject-specific content, and assessment strategies. With detailed study material, interactive sessions, practice tests, and real-world
                        teaching scenarios, candidates develop the confidence, expertise, and critical understanding required to succeed in the exam and embark
                        on a rewarding teaching career.
                    </div>
                    <Buttons navigate="ctet" />
                </div>
                <Image
                    src="/static/ctet.svg"
                    alt="CTET Preparation"
                    width={450}
                    height={300}
                    
                />
            </div>
        </div>
    );
}

export function Slide5() {
    return (
        <div className={sharedContainerStyles}>
            <div className={sharedContentStyles}>
                <div className="max-w-[550px] space-y-6">
                    <div className="text-3xl font-bold">Comprehensive English Preparation Program</div>
                    <div className="text-xl font-medium">For Bank, Railways, and SSC Exams</div>
                    <div className="text-gray-700 ">
                        Our English Preparation Program for Bank, Railways, and SSC exams is expertly crafted to equip aspirants with the language skills
                        and strategies needed to excel in competitive exams. The course covers key areas, including grammar, vocabulary, reading comprehension,
                        verbal ability, and error detection, tailored to exam-specific requirements. With interactive lessons, practice exercises, mock tests,
                        and time-management tips, candidates gain the confidence and proficiency to tackle the English section effectively and achieve
                        their career aspirations.
                    </div>
                    <Buttons navigate="banks-railways-ssc" />
                </div>
                <Image
                    src="/static/ssc1.svg"
                    alt="SSC Exam Preparation"
                    width={450}
                    height={300}
                   
                />
            </div>
        </div>
    );
}
