import BipolarComponent from "../components/BipolarComponent";

import image from "../assets/pics/abaout1.png";
import image2 from "../assets/pics/abaout2.png";

const AboutPage: React.FC = () => {
  return (
    <>
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "Our additional services cater to all your beauty needs beyond nails. We offer a variety of waxing services, including eyebrow shaping for $15, lip waxing for $10, and even cheek or sideburn waxing for $16. For more comprehensive hair removal, our underarm waxing service is available for $20, and you can choose between a Half Arm ($25) or Full Arm ($45) waxing to achieve smooth, flawless skin. These services are perfect for those looking to feel fresh and confident all over."
        }
        imageSrc={image}
      />
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "If you're looking to enhance your grooming routine, our salon's additional services provide a perfect complement to your nail care. We offer eyebrow threading, lip threading, and chin waxing for those wanting a smoother, more defined look. Whether you need a quick touch-up or a more thorough treatment, our team is here to provide professional and efficient services, ensuring that you leave feeling refreshed and pampered. With affordable prices and top-quality service, our salon is the perfect destination for all your beauty needs."
        }
        imageSrc={image2}
        imageFirst={true}
      />
    </>
  );
};

export default AboutPage;
