import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faPlay } from "@fortawesome/free-solid-svg-icons";

interface FeedbackInterface {
  content: string;
  name: string;
  title: string;
  rating: number;
  image: string; // Image file name (not URL)
  videoUrl: string; // YouTube video URL
}

export default function Feedback1({ feedback }: { feedback: FeedbackInterface }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (feedback.rating >= i) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else if (feedback.rating >= i - 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 mx-auto shadow-lg flex flex-col items-center text-center w-full mb-4 max-w-xs sm:max-w-sm lg:max-w-md">
      {/* Profile Picture */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image
          src={`/static/${feedback.image}`} // Load from /public/static/
          alt={feedback.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Circular Play Button */}
      <a
        href={feedback.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-12 h-12 flex items-center justify-center text-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faPlay} className="text-xl" />
      </a>

      {/* Feedback Content */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 px-4">
        {feedback.content}
      </p>

      {/* Name & Title */}
      <h3 className="font-bold text-sm sm:text-lg mt-3">{feedback.name}</h3>
      <span className="text-gray-500 text-xs sm:text-sm">{feedback.title}</span>

      {/* Rating Stars */}
      <div className="mt-3 flex space-x-1">{renderStars()}</div>
    </div>
  );
}
