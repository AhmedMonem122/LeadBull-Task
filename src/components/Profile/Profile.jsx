import profileImage from "../../assets/Images/LeadBull header.png";

const Profile = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <h3 className="text-center font-[Inter] font-bold text-[20px] md:text-[32px] lg:text-[64px] text-primary">
          PROFILE
        </h3>

        <div className="flex items-center text-white font-[Roboto Flex]">
          <div className="flex items-center justify-evenly lg:w-3/4 text-center flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[linear-gradient(146.79deg,_rgba(164,_0,_0,_0.4)_-60.82%,_rgba(1,_65,_103,_0.4)_118.47%)] border border-[#027FCA] rounded-xl p-[.5rem] w-2/4 lg:w-[200px] mb-5">
                <h4 className="font-[600]">Vision</h4>
                <p className="font-[500] text-[#BBBBBB]">
                  We enhance our data centers to personalize the contractor
                  clients experience through telemarketing
                </p>
              </div>
              <div className="bg-[linear-gradient(146.79deg,_rgba(164,_0,_0,_0.4)_-60.82%,_rgba(1,_65,_103,_0.4)_118.47%)] border border-[#027FCA] rounded-xl p-[.5rem] w-2/4 lg:w-[200px] mb-5">
                <h4 className="font-[600]">Values</h4>
                <p className="font-[500] text-[#BBBBBB]">
                  Our core values include elimination of privacy concerns, and
                  adherence to global marketing regulations
                </p>
              </div>
            </div>
            <div className="bg-[linear-gradient(146.79deg,_rgba(164,_0,_0,_0.4)_-60.82%,_rgba(1,_65,_103,_0.4)_118.47%)] border border-[#027FCA] rounded-xl p-[.5rem] w-2/4 lg:w-[200px]">
              <h4 className="font-[600]">Mission</h4>
              <p className="font-[500] text-[#BBBBBB]">
                Our mission is to be the leading innovator in the telemarketing
                industry through our cloud based Lead-Gen solutions
              </p>
            </div>
          </div>
          <div className="text-center hidden lg:block">
            <img
              src={profileImage}
              alt="LeadBull Profile Logo"
              className="w-1/2 mx-auto"
            />
            <p className="bg-[linear-gradient(89.7deg,_#FF0000_-20.95%,_#027FCA_45.26%,_#027FCA_123.29%)] w-fit mx-auto b-span">
              LEADBULL LLC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
