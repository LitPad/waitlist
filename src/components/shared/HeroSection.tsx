type HeroSectionProps = {
  onClick: () => void;
};

const HeroSection = ({ onClick }: HeroSectionProps) => {
  return (
    <div className="border border-[#F6F5F6] py-[60px] px-[15px] lg:p-[90px] mt-[70px] lg:m-[50px] rounded-[36px] flex flex-col items-center">
      <div className="hidden sm:block">
        <DestopHeroSection />
      </div>
      <div className="sm:hidden">
        <MobileHeroSection />
      </div>
      <span className="text-[26px] text-center md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744]">
        Genres You Love
      </span>
      <p className="text-[#7F7589] text-[14px] lg:text-[18px] font-[500] mb-[24px] max-w-[550px] text-wrap text-center px-4 pt-10 ">
        LitPad offers you unlimited access to an ever-growing library of quality
        novels, all for one budget-friendly subscription
      </p>
      <button
        onClick={onClick}
        className="bg-btn-purple-gradient rounded-full text-[#FFFFFF] text-[15px] font-[600] h-[46px] w-[135px] lg:h-[52px] lg:w-[136px] hover:bg-purple-600 mt-4 "
      >
        Join waitlist
      </button>
    </div>
  );
};

export default HeroSection;

export const MobileHeroSection = () => {
  return (
    <span className="flex flex-col justify-center items-center">
      <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744]">
        Discover Captivating
      </span>
      <div className="flex">
        <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744]">
          Stories
        </span>
        <div className="bg-purple-gradient rounded-full px-[17px] py-[5px] lg:px-[23px] lg:py-[7px] flex items-center mx-2 lg:mx-[16px]">
          <img
            src="/assets/icons/heroBook.svg"
            className="h-[20px] lg:h-[36px]"
            alt="pen "
          />
        </div>
        <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744] text-wrap text-center">
          Across
        </span>
      </div>
    </span>
  );
};

export const DestopHeroSection = () => {
  return (
    <span className="flex flex-wrap justify-center items-center">
      <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744]">
        Discover Captivating Stories
      </span>
      <div className="bg-purple-gradient rounded-full px-[17px] py-[5px] lg:px-[23px] lg:py-[7px] flex items-center mx-2 lg:mx-[16px]">
        <img
          src="/assets/icons/heroBook.svg"
          className="h-[20px] lg:h-[36px]"
          alt="pen "
        />
      </div>
      <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744] text-wrap text-center">
        Across
      </span>
    </span>
  );
};
