import heroPic1 from "../images/hero1.jpg";
import Slider from "../components/Slider";
import PageContent from "../layouts/PageContent";

function Hero() {
  let slides = [heroPic1, heroPic1, heroPic1, heroPic1];
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

  return (
    <PageContent>
      <Slider slides={slides} slideContent={slideContent} greenBg={false} />
    </PageContent>
  );
}

export default Hero;
