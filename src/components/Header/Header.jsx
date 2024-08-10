import leadBullHeaderImage from "../../assets/Images/LeadBull header.png";

const Header = () => {
  return (
    <header className="text-white text-center mt-44">
      <div className="container mx-auto">
        <h1 className="text-[60px] md:text-[123.59px] font-[K2D] font-[700]">
          <span className="first-letter:text-[80px] first-letter:md:text-[164.79px]">
            Lead
          </span>
          <span className="bg-[linear-gradient(_-45deg,_#F00_50%,_#00F_50%)] [background-size:100%] bg-repeat b-span">
            B
          </span>
          <span>ULL</span>
        </h1>

        <h2 className="md:text-[32px] font-[Roboto Flex] font-[500]">
          Ultra Targeted Leads & Sales, Let&apos;s Prey
        </h2>

        <div className="flex items-center justify-center">
          <img
            src={leadBullHeaderImage}
            alt="LeadBull Logo"
            className="w-[127px] md:w-auto"
          />
        </div>

        <div className="w-[120px] md:w-[493px] h-[87px] mx-auto bg-[radial-gradient(circle_at_50%_150%,_rgba(2,_127,_202,_0.5)_0px,_rgba(2,_127,_202,_0)_65%)]"></div>
      </div>
    </header>
  );
};

export default Header;
