import williamJohnsonImage from "../../assets/Images/flash 2.png";

const WilliamJohnson = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-10">
          <div className="w-full lg:w-[150%] flex items-center justify-center">
            <img src={williamJohnsonImage} alt="William Johnson Image" />
          </div>

          <div className="flex-shrink-[1]">
            <h3 className="font-[K2D] font-[400] text-[20px] md:text-[32px] lg:text-[55.84px] text-primary">
              WILLIAM JOHNSON
            </h3>

            <h5 className="font-[Roboto Flex] font-[400] text-[24.82px] text-primary">
              Regional Sales Director, Effective HVAC
            </h5>

            <p className="font-[Roboto Flex] font-[300] md:text-[32px] md:leading-[48px]">
              In the end, Leadbull made sustainable improvements to our business
              lead gen strategy. We no longer conduct any door-knocking for
              prospecting, which frees up time for higher-value tasks.
            </p>

            <p className="font-[Roboto Flex] font-[300] md:text-[32px] md:leading-[48px]">
              Leadbull all-inclusive telemarketing and digital marketing
              solution also provided us a reliable source of high-quality leads,
              which allowed our sales reps to accelerate their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WilliamJohnson;
