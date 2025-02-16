import BipolarComponent from "../components/BipolarComponent";

import image from "../assets/salon.jpg";

const AboutPage: React.FC = () => {
  return (
    <>
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "ELA salon was created through the vision of Marianela Duran. We are nestled in the exclusive, trendy neighborhood of Coconut Grove, Miami. All of our clients are welcomed to a polished setting, which radiates the ineffable Miami Vibe! Flooded with natural sunlight, the cozy modern space has an intimate open feel. "
        }
        imageSrc={image}
      />
      <BipolarComponent
        title={"About Nelly's Salon"}
        description={
          "ELA salon was created through the vision of Marianela Duran. We are nestled in the exclusive, trendy neighborhood of Coconut Grove, Miami. All of our clients are welcomed to a polished setting, which radiates the ineffable Miami Vibe! Flooded with natural sunlight, the cozy modern space has an intimate open feel. "
        }
        imageSrc={image}
        imageFirst={true}
      />
    </>
  );
};

export default AboutPage;
