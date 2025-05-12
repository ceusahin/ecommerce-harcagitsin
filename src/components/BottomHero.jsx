import bgGreen from "../images/bg-green.png";
import PageContent from "../layouts/PageContent";
import Slider from "./Slider";

function BottomHero() {
  let slides = [bgGreen, bgGreen, bgGreen, bgGreen];
  const slideContent = [
    {
      subtitle: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
    },
    {
      subtitle: "WINTER 2020",
      title: "HOT DEALS",
      description: "Get your winter style ready with our exclusive offers.",
      button: "DISCOVER",
    },
    {
      subtitle: "SPRING 2021",
      title: "FRESH START",
      description: "Embrace the new season with our latest arrivals.",
      button: "EXPLORE",
    },
    {
      subtitle: "FALL 2021",
      title: "AUTUMN VIBES",
      description: "Fall in love with our cozy collection.",
      button: "VIEW MORE",
    },
  ];

  return <Slider slides={slides} slideContent={slideContent} greenBg={true} />;
}

export default BottomHero;
