import keyIndicatorsImage1 from "../../assets/Images/Key Indicators Image 1.png";
import keyIndicatorsImage2 from "../../assets/Images/Key Indicators Image 2.png";

const KeyIndicators = () => {
  return (
    <section className="clip-path-section">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <img src={keyIndicatorsImage1} alt="Key Indicators Image 1" />
        </div>
        <div className="flex items-center justify-center">
          <img src={keyIndicatorsImage2} alt="Key Indicators Image 2" />
        </div>
      </div>
    </section>
  );
};

export default KeyIndicators;
