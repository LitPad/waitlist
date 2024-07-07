import HomeCard from "./components/shared/HomeCard";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-[#EBDCF9] to-[#FFFFFF] max-w h-[740px] px-4">
        <header className="container flex items-center justify-between h-[83px]">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-[117px] lg:w-[125px] p-2 hover:cursor-pointer "
          />
          <Button className="bg-white text-[#120024] text-[14px] font-[500] py-[10px] px-[14px] rounded-full md:hidden">
            Join Waitlist
          </Button>

          <div className="hidden gap-4 md:flex">
            <button className="text-[#493B56] text-[15px] font-[500] py-[13px] px-[18px] hover:text-slate-500 ">
              About
            </button>
            <button className="text-[#493B56] text-[15px] font-[500] py-[13px] px-[18px] hover:text-slate-500 ">
              Join waitlist
            </button>
          </div>
        </header>
        {/* hero */}
        <div className="border border-[#F6F5F6] py-[60px] px-[15px] lg:p-[90px] mt-[70px] lg:m-[50px] rounded-[36px] flex flex-col items-center">
          <span className=" flex flex-wrap justify-center  items-center">
            <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744]">
              Where writers
            </span>
            <div className="bg-purple-gradient rounded-full px-[17px] py-[5px] lg:px-[23px] lg:py-[7px] flex items-center mx-2 lg:mx-[16px]">
              <img
                src="/assets/icons/pen.svg"
                className="h-[20px] lg:h-[36px]"
                alt="pen "
              />
            </div>
            <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744] text-wrap text-center">
              thrive
            </span>
            <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744] text-wrap pl-1">
              and readers
            </span>
            <div className="bg-pink-gradient rounded-full px-[17px] py-[5px] lg:px-[23px] lg:py-[7px] flex items-center ml-2 lg:ml-[16px]">
              <img
                src="/assets/icons/book.svg"
                className="h-[20px] lg:h-[36px]"
                alt="book "
              />
            </div>
          </span>
          <span className="text-[26px] md:text-[40px] xl:text-[56px] font-[600] text-[#2B1744] items-end">
            discover meaningful content
          </span>
          <p className="text-[#7F7589] text-[14px] lg:text-[18px] font-[500] mb-[24px] max-w-[510px] text-wrap text-center px-4 pt-10 ">
            Empower authors with creative control, offer readers a diverse
            literacy experience, ensure transparency in revenue sharing
          </p>
          <button className="bg-btn-purple-gradient rounded-full text-[#FFFFFF] text-[15px] font-[600] h-[46px] w-[135px] lg:h-[52px] lg:w-[136px] hover:bg-purple-600 mt-4 ">
            Join waitlist
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="h-[1800px] lg:h-[1352px] bg-gradient-to-b to-[#C198EC] from-[#FFFFFF] rounded-bl-[32px] rounded-br-[32px] lg:rounded-br-[60px] lg:rounded-bl-[60px]">
        <div className="border border-[#E0DEE3] bg-white mx-[16px] lg:m-[60px] flex flex-col rounded-[32px] lg:rounded-[50px] py-[36px] lg:py-[70px] lg:px-[24px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] text-[#2B1744]">With LitPad</h2>

            {/* Cards */}
            <div className="mt-[40px] lg:mt-[80px] flex flex-col lg:flex-row items-center justify-between gap-[24px]">
              <HomeCard
                icon="penTwo"
                title="Autho-Friendly Platform"
                description="Providing authors with tools and resources to publish, promote, and
          monetize their work while retainning creative control"
              />
              <HomeCard
                icon="bookTwo"
                title="Reader-Centric Experience"
                description="Curating a diverse selection of literacy content across genres and empowering readers to discover, engage with, and support their favorite authors"
              />
              <HomeCard
                icon="searchGlass"
                title="Transparency and fairness"
                description="Implementing transparent revenue-sharing models and fostering a community built on trust and collaboration"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
          <div className="max-w-[500px]">
            <h2 className="text-[32px] lg:text-[56px] text-[#2B1744] font-[600] text-center">
              Get Early Access
            </h2>
            <div className="px-20">
              <p className="text-[15px] lg:text-[20px] text-[#2B1744] font-[500] text-center pt-4">
                Welcome to the future of novels, crafted for authors and readers
              </p>
            </div>
          </div>
          <div className="mt-[40px] lg:mt-[50px] bg-white rounded-[20px] py-[24px] px-[20px] flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Enter email"
              className="w-[362px] bg-[#F6F5F6] rounded-[46px] h-[44px]"
            />
            <Input
              type="email"
              placeholder="Enter name"
              className="w-[362px] bg-[#F6F5F6] rounded-[46px] h-[44px]"
            />
            <Input
              type="email"
              placeholder="Choose genre"
              className="w-[362px] bg-[#F6F5F6] rounded-[46px] h-[44px]"
            />
            <Button className="bg-btn-purple-gradient rounded-[46px] text-white">
              Join waitlist
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white mt-[70px] pt-[60px]">
        <div className=" border-y mx-[16px] lg:mx-[60px] py-[24px] ">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-[24px]">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="w-[125px] p-2 hover:cursor-pointer"
              />
              <span className="text-[#2B1744] text-center text-[14px] md:text-[18px] font-[500]">
                Write, read, and enjoy quality stories without limits
              </span>
            </div>
            <div className="flex items-center gap-[20px] mt-[24px]">
              <img
                src="/assets/icons/x.svg"
                alt="logo"
                className="p-2 hover:cursor-pointer"
              />
              <img
                src="/assets/icons/in.svg"
                alt="logo"
                className="p-2 hover:cursor-pointer"
              />
              <img
                src="/assets/icons/fb.svg"
                alt="logo"
                className="p-2 hover:cursor-pointer"
              />
              <img
                src="/assets/icons/ig.svg"
                alt="logo"
                className="p-2 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-[30px] pb-[100px]">
          <span className="text-[#7F7589] text-[12px] lg:text-[14px] font-[400]">
            © 2024 All Rights reserved by LitPad
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
