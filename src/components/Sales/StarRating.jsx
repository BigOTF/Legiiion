import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const starStyle = {
  color: '#FFD700', // Gold color for filled stars
};

const Star = ({ type }) => {
  let StarIcon;

  switch (type) {
    case 'full':
      StarIcon = FaStar;
      break;
    case 'half':
      StarIcon = FaStarHalf;
      break;
    default:
      StarIcon = FaRegStar;
    }
    return <span style={starStyle}><StarIcon /></span>;
};



const StarRating = ({ rating, maxStars = 10 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} type="full" />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<Star key="half" type="half" />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} type="empty" />);
  }

  return <div>{stars}</div>;
};

export default StarRating;