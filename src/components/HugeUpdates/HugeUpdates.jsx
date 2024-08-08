import hugeUpdatesBigScreenImage from "../../assets/Images/Huge Updates Image.png";
import hugeUpdatesSmallScreenImage1 from "../../assets/Images/Huge Updates small screen Image 1.svg";
import hugeUpdatesSmallScreenImage2 from "../../assets/Images/Huge Updates small screen Image 2.svg";
import hugeUpdatesSmallScreenImage3 from "../../assets/Images/Huge Updates small screen Image 3.svg";

const HugeUpdates = () => {
  return (
    <section className="text-white text-center">
      <div className="container mx-auto">
        <h3 className="font-[Inter] font-bold text-[20px] md:text-[32px] lg:text-[64px] text-primary">
          Huge Updates On-The-Way
        </h3>
        <ul className="font-[Roboto Flex] font-[500] md:text-[32px] list-disc my-[1em] pl-[40px] lg:w-1/2 mx-auto">
          <li>
            Expanding in existing markets: Canada, UK, and US and promoting our
            upgraded leads services there
          </li>
          <li>Entering new targeted markets: UAE</li>
        </ul>

        <div className="hidden md:flex items-center justify-center">
          <img
            src={hugeUpdatesBigScreenImage}
            alt="Huge Updates Arrows"
            className="w-3/4"
          />
        </div>

        <div className="hidden md:flex items-center justify-between font-[Roboto Flex] text-white">
          <div className="text-center p-[16px] rounded-[70px] bg-[#2D2D2D4D] w-[300px]">
            <h4 className="font-[600] text-[30px] text-primary">History</h4>
            <p className="font-[300] leading-[55px]">
              As the leading company in the marketing industry with a passion
              for innovation and A+ excellence, Leadbull has become a household
              name in the digital sales world, known for its groundbreaking lead
              generation
            </p>
          </div>
          <div className="text-center p-[16px] rounded-[70px] bg-[#2D2D2D4D] w-[300px]">
            <h4 className="font-[600] text-[30px] text-primary">About us</h4>
            <p className="font-[300] leading-[55px]">
              Leadbull stays current with the market trends aiming not only to
              thrive but also to enhance in such a rapidly evolving digital age,
              and to keep up its marketing services with the client’s
              expectations worldwide.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col md:hidden">
          <img
            src={hugeUpdatesSmallScreenImage1}
            alt="Huge Updates Small Screen 1"
            className="self-end ml-auto"
          />

          <div className="flex items-center justify-between">
            <div className="text-center p-[16px] rounded-[70px] bg-[#2D2D2D4D] w-full">
              <h4 className="font-[600] text-[30px] text-primary">About us</h4>
              <p className="font-[300] leading-[55px]">
                Leadbull stays current with the market trends aiming not only to
                thrive but also to enhance in such a rapidly evolving digital
                age, and to keep up its marketing services with the client’s
                expectations worldwide.
              </p>
            </div>

            <div>
              <img
                src={hugeUpdatesSmallScreenImage3}
                alt="Huge Updates small screen 3"
              />
            </div>
          </div>

          <img
            src={hugeUpdatesSmallScreenImage2}
            alt="Huge Updates small screen Image 2"
            className="ml-auto"
          />

          <div className="text-center p-[16px] rounded-[70px] bg-[#2D2D2D4D]">
            <h4 className="font-[600] text-[30px] text-primary">History</h4>
            <p className="font-[300] leading-[55px]">
              As the leading company in the marketing industry with a passion
              for innovation and A+ excellence, Leadbull has become a household
              name in the digital sales world, known for its groundbreaking lead
              generation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HugeUpdates;
