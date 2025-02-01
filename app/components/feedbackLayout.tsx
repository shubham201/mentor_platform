import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface FeedbackInterface {
  content: string;
  name: string;
  title: string;
  rating: number;
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
      {/* Profile Placeholder */}
      <div className="rounded-full border-4 border-white shadow-md w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-gray-200">
        <span className="text-gray-500 text-xl">👤</span>
      </div>

      {/* Feedback Content */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 px-4">
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


