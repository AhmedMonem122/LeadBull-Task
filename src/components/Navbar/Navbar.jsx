import leadBullLogo from "../../assets/Images/LeadBull Logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-black sticky top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="w-[80px] md:w-fit">
            <img src={leadBullLogo} alt="LeadBull Logo" />
          </a>

          <ul
            className={`flex flex-col absolute top-full left-0 w-full h-screen bg-black xl:flex-row xl:static xl:h-full xl:w-auto xl:bg-transparent justify-center items-center gap-[36px] -translate-x-full xl:translate-x-0 transition-all ${
              isOpen && "translate-x-0"
            }`}
          >
            <li className='relative py-[4px] px-[16px] after:content-[""] after:absolute after:left-[0] after:bottom-[0] after:w-full after:h-[4px] after:bg-[linear-gradient(86.48deg,_#B10028_-5.25%,_#027FCA_98.16%)] text-[24px]'>
              <a href="">Home</a>
            </li>
            <li className="py-[4px] px-[16px] border-b-4 [border-image-source:linear-gradient(86.48deg,_#B10028_-5.25%,_#027FCA_98.16%)] text-[24px]">
              <a href="">About us</a>
            </li>
            <li className="py-[4px] px-[16px] border-b-4 [border-image-source:linear-gradient(86.48deg,_#B10028_-5.25%,_#027FCA_98.16%)] text-[24px]">
              <a href="">Services</a>
            </li>
            <li className="py-[4px] px-[16px] border-b-4 [border-image-source:linear-gradient(86.48deg,_#B10028_-5.25%,_#027FCA_98.16%)] text-[24px]">
              <a href="">Support</a>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-[21px]">
            <button className="w-[70px] md:w-[140px] rounded-[16px] border py-[6px] px-[8px] md:py-[12px] md:px-[16px] border-[#FFFFFFD1]">
              Login
            </button>
            <button className="rounded-[16px] border md:py-[12px] py-[6px] px-[8px] md:px-[16px] border-[#FFFFFFD1] bg-[linear-gradient(86.25deg,_#53040B_-5.42%,_#0088D7_127.82%)]">
              Book an appointment
            </button>
          </div>

          <div
            className="md:text-[24px] xl:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose className="hover:text-red-600 transition-all" />
            ) : (
              <TiThMenu className="hover:text-blue-600 transition-all" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// border-image-source: linear-gradient(86.48deg, #B10028 -5.25%, #027FCA 98.16%);
// #FFFFFFD1
