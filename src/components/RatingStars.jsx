import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <FontAwesomeIcon icon={solidStar} key={i} className="text-yellow-400" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          key={i}
          className="text-yellow-400"
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          icon={regularStar}
          key={i}
          className="text-yellow-400"
        />
      );
    }
  }

  return <div className="flex gap-2">{stars}</div>;
};

export default RatingStars;
