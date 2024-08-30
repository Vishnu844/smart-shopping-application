import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ rating = 0 }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      {halfStars && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
    </div>
  );
}