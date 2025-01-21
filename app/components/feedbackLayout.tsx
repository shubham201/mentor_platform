import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface FeedbackInterface{
    content: string,
    name: string,
    title:string,
    rating: number
}

export default function Feedback1( {feedback }: { feedback: FeedbackInterface }) {

  const renderStars = () => {
    let stars = [];
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
    <div className="bg-white rounded-xl p-8 m-10 shadow-md flex flex-col items-center text-center max-h-[550px] w-[400px] ">
      
      <div  
        className="rounded-full border-4 bg-[#f2f4fc] border-white shadow-md w-[80px] h-[80px]"
      ></div>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        {feedback.content}
      </p>

      <h3 className="font-bold text-lg mt-2">{feedback.name}</h3>
      <span className="text-gray-500 text-sm">{feedback.title}</span>
      <div className="mt-4">
        {renderStars()}
      </div>

    </div>
  );
}