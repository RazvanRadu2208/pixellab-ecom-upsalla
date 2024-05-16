import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStar = ({ rating }) => {
  const clampedRating = Math.max(0, Math.min(5, rating));

  const fullStars = Math.floor(clampedRating);

  const halfStar = clampedRating % 1 !== 0;

  const starElements = Array(fullStars > 0 ? fullStars : 0)
    .fill(null)
    .map((_, index) => <FaStar key={index} />);

  return (
    <div className="flex justify-center text-orange-400">
      {starElements}
      {halfStar ? <FaStarHalfAlt /> : null}
    </div>
  );
};

export default RatingStar;