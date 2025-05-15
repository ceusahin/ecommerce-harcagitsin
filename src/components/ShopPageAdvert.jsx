import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

function ShopPageAdvert() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-40 items-center gap-6 text-gray-500 text-8xl py-20 bg-[#FAFAFA]">
      <FontAwesomeIcon icon={faHooli} />
      <FontAwesomeIcon icon={faLyft} />
      <FontAwesomeIcon icon={faPiedPiperHat} />
      <FontAwesomeIcon icon={faStripe} />
      <FontAwesomeIcon icon={faAws} />
      <FontAwesomeIcon icon={faReddit} />
    </div>
  );
}

export default ShopPageAdvert;
