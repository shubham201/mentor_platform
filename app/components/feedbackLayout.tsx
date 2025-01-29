import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="bg-white rounded-xl p-4 sm:p-8 m-2 sm:m-10 shadow-md flex flex-col items-center text-center max-h-[450px] sm:max-h-[550px] w-[280px] sm:w-[400px]">
      <div
        className="rounded-full border-4 bg-[#f2f4fc] border-white shadow-md w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
      ></div>

      <p className="text-gray-700 text-xs sm:text-lg leading-relaxed mt-3 sm:mt-4">
        {feedback.content}
      </p>

      <h3 className="font-bold text-sm sm:text-lg mt-2">{feedback.name}</h3>
      <span className="text-gray-500 text-xs sm:text-sm">{feedback.title}</span>
      
      <div className="mt-3 sm:mt-4">
        {renderStars()}
      </div>
    </div>
  );
}

