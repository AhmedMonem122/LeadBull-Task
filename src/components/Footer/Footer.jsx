import { Fragment } from "react";
import leadBullFooterLogo from "../../assets/Images/LeadBull Footer Logo.png";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import { SiSkypeforbusiness } from "react-icons/si";

const Footer = () => {
  return (
    <Fragment>
      <footer className="text-white py-10 border-b-[0.6px] border-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 lg:gap-32">
            <div className="flex items-center flex-row lg:flex-col col-span-3 lg:col-span-1 gap-5">
              <div className="w-full">
                <img src={leadBullFooterLogo} alt="Lead Bull Footer Logo" />
              </div>
              <p className="font-[Roboto] font-[300] text-[12px] leading-4 text-justify">
                Leadbull stays current with the market trends aiming not only to
                thrive But also to enhance in such a rapidly evolving digital
                age, and to keep up its telemarketing services with the
                client&apos;s expectations worldwide.
              </p>
            </div>

            <div>
              <h5 className="font-[Roboto Flex] font-[400] text-[20px] lg:text-[25px] mb-[13px]">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-y-[22px] font-[Roboto Flex] font-[300]">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h5 className="font-[Roboto Flex] font-[400] text-[20px] lg:text-[25px] mb-[13px]">
                Contact Info
              </h5>
              <div className="flex items-center gap-x-[14px] mb-[13px] font-[Roboto Flex] font-[300]">
                <div>
                  <LuMapPin />
                </div>
                <a href="">131 Continental Dr, Suite 305, Newark, DE 19713</a>
              </div>
              <div className="flex items-center gap-x-[14px] mb-[13px] font-[Roboto Flex] font-[300]">
                <div>
                  <LuMail />
                </div>
                <a href="">Sales@Leadbull.net</a>
              </div>
              <div className="flex items-center gap-x-[14px] font-[Roboto Flex] font-[300]">
                <div>
                  <LuPhone />
                </div>
                <a href="">+1 484 857 2782</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="container mx-auto">
        <div className="text-white flex items-center justify-between font-[Roboto Flex] font-[300] pb-4 flex-wrap gap-y-4">
          <div className="flex items-center justify-center gap-x-4">
            <div>
              <SiSkypeforbusiness />
            </div>
            <a href="">live:.cid.b503d7750b5e4c7b</a>
          </div>
          <p className="text-[12px]">&copy; Lead Bull – All Rights Reserved</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
