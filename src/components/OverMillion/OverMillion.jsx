const OverMillion = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto">
        <h3 className="text-center font-[Inter] font-bold text-[20px] md:text-[32px] lg:text-[64px] text-primary">
          OVER $9 MILLION
        </h3>
        <h4 className="font-[Roboto Flex] font-[500] md:text-[25px] lg:text-[36px] text-center">
          In combined revenue generated for our contractor clients
        </h4>

        <p className="font-[Roboto Flex] font-[300] md:text-[32px] md:leading-[55px] text-center">
          Our services allow clients to gain a better chance of fulfilling
          customers needs and catching their interest, Leading to higher net
          revenue and sustained customer satisfaction and loyalty. Many top
          global contractors{" "}
          <a href="#" className="underline text-[#2898FF]">
            Read more
          </a>
        </p>

        <div className="bg-[linear-gradient(86.25deg,_#53040B_-5.42%,_#0088D7_127.82%)] rounded-[13px] py-3 px-5 font-[K2D] grid grid-cols-2 md:grid-cols-4 my-5 relative after:contents-[''] after:absolute after:w-[10px] after:h-[80%] after:rounded-[10px] after:-right-[9px] after:top-1/2 after:-translate-y-1/2 after:bg-[#027FCA] before:contents-[''] before:absolute before:left-[-10px] before:rounded-[10px] before:w-[10px] before:h-[80%] before:top-1/2 before:-translate-y-1/2 before:bg-[#027FCA]">
          <div className="flex items-center justify-center flex-col md:border-r md:border-[#027FCA]">
            <span className="font-[600] text-[35px]">75+</span>
            <p className="font-[400] text-[18px] text-center">
              Independent Member Firms
            </p>
          </div>
          <div className="flex items-center justify-center flex-col md:border-r md:border-[#027FCA]">
            <span className="font-[600] text-[35px]">35+</span>
            <p className="font-[400] text-[18px] text-center">
              Contracting LLCs
            </p>
          </div>
          <div className="flex items-center justify-center flex-col md:border-r md:border-[#027FCA]">
            <span className="font-[600] text-[35px]">75+</span>
            <p className="font-[400] text-[18px] text-center">
              Affiliate Network
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <span className="font-[600] text-[35px]">75+</span>
            <p className="font-[400] text-[18px] text-center">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverMillion;
