import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import HomeCard from "./components/shared/HomeCard";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import axios from "axios";
import SocialLink from "./components/shared/SocialLink";
import WelcomeLitpadModal from "./components/shared/WelcomeLitpadModal";
import HeroSection from "./components/shared/HeroSection";

function App() {
  const baseURL = import.meta.env.VITE_API_URL;

  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [updatingWaitList, setUpdatingWaitList] = useState(false);
  const [version, setVersion] = useState(0);
  const [bookGenre, setBookGenre] = useState([]);
  const [waitlist, setWaitlist] = useState({
    email: "",
    name: "",
    genre_slug: "",
  });

  useEffect(() => {
    fetchBookGenre();
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  const fetchBookGenre = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/books/genres`);
      setBookGenre(response.data.data);
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinWaitlist = async () => {
    console.log(waitlist);
    if (!waitlist.email || !waitlist.name || !waitlist.genre_slug) {
      return toast.error("All fields are required");
    }
    try {
      setUpdatingWaitList(true);
      const response = await axios.post(`${baseURL}/waitlist`, waitlist);
      // Clear input fields
      setWaitlist({ email: "", name: "", genre_slug: "" });
      toast.success(response.data.message);
      setUpdatingWaitList(false);
      setVersion((prevVersion) => prevVersion + 1);
      setOpenModal(true);
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setUpdatingWaitList(false);
      console.log(error);
    }
  };

  const scrollToJoinWaitlist = () => {
    const joinWaitlist = document.getElementById("joinWaitlist");
    if (joinWaitlist) {
      joinWaitlist.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-[#EBDCF9] to-[#FFFFFF] max-w h-[740px] px-4">
        <header className="container flex items-center justify-between h-[83px]">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-[117px] lg:w-[125px] p-2 hover:cursor-pointer "
          />
          <Button
            // onClick goto joinWaitlist id
            onClick={scrollToJoinWaitlist}
            className="bg-white text-[#120024] text-[14px] font-[500] py-[10px] px-[14px] rounded-full md:hidden"
          >
            Join Waitlist
          </Button>

          <div className="hidden gap-4 md:flex">
            <button className="text-[#493B56] text-[15px] font-[500] py-[13px] px-[18px] hover:text-slate-500 ">
              About
            </button>
            <button
              onClick={scrollToJoinWaitlist}
              className="text-[#493B56] text-[15px] font-[500] py-[13px] px-[18px] hover:text-slate-500 "
            >
              Join waitlist
            </button>
          </div>
        </header>
        {/* hero */}
        <HeroSection onClick={() => setOpenModal(true)} />
      </section>

      {/* Cards */}
      <section className="h-[1800px] lg:h-[1352px] bg-gradient-to-b to-[#C198EC] from-[#FFFFFF] rounded-bl-[32px] rounded-br-[32px] lg:rounded-br-[60px] lg:rounded-bl-[60px]">
        <div className="border border-[#E0DEE3] bg-white mx-[16px] lg:m-[60px] flex flex-col rounded-[32px] lg:rounded-[50px] py-[36px] lg:py-[70px] lg:px-[24px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] text-[#2B1744]">
              Spend Less, Read More
            </h2>

            {/* Cards */}
            <div className="mt-[40px] lg:mt-[80px] px-[16px] flex flex-col lg:flex-row items-center justify-between gap-[24px]">
              <HomeCard
                icon="l1"
                title="Endless Adventures at Your Fingertips"
                description="Unlock a vast collection of novels across multiple genres—romance, fantasy, thrillers, and more.
"
              />
              <HomeCard
                icon="l2"
                title="Affordable Escapes for Every Reader"
                description="Escaping into another world doesn’t have to be costly. LitPad offers a sea of stories for one affordable monthly subscription."
              />
              <HomeCard
                icon="l3"
                title="Curated for Quality"
                description=" Enjoy only the best, handpicked novels, all at your fingertips."
              />
            </div>
          </div>
        </div>
        <div
          id="joinWaitlist"
          className="flex flex-col justify-center items-center mt-40 mx-3"
        >
          <div className="max-w-[500px]">
            <h2 className="text-[32px] lg:text-[56px] text-[#2B1744] font-[600] text-center">
              Get Early Access
            </h2>
            <div className="px-10">
              <p className="text-[15px] lg:text-[20px] text-[#2B1744] font-[500] text-center pt-4">
                Join the waitlist now for early access to unlimited stories.
                Your next favorite read awaits!
              </p>
            </div>
          </div>
          <form
            key={version}
            onSubmit={(e) => {
              e.preventDefault();
              handleJoinWaitlist();
            }}
            className="mt-[40px] w-full sm:w-[410px] lg:mt-[50px] bg-white rounded-[20px] py-[24px] px-[20px] flex flex-col gap-4"
          >
            <Input
              onChange={(e) =>
                setWaitlist({ ...waitlist, email: e.target.value })
              }
              type="email"
              placeholder="Enter email"
              className="bg-[#F6F5F6] rounded-[46px] h-[44px]"
            />
            <Input
              onChange={(e) =>
                setWaitlist({ ...waitlist, name: e.target.value })
              }
              type="name"
              placeholder="Enter name"
              className="bg-[#F6F5F6] rounded-[46px] h-[44px]"
            />
            <select
              onChange={(e) =>
                setWaitlist({ ...waitlist, genre_slug: e.target.value })
              }
              className="bg-[#F6F5F6] rounded-[46px] h-[44px] px-2 placeholder:text-muted-foreground text-[#2B1744] font-[500]"
            >
              <option>{loading ? "Loading..." : "Select genre"}</option>
              {bookGenre?.map((genre: any) => (
                <option key={genre.slug} value={genre.slug}>
                  {genre.name}
                </option>
              ))}
            </select>
            <Button
              type="submit"
              className="bg-btn-purple-gradient rounded-[46px] text-white"
            >
              {updatingWaitList ? "Loading..." : "Join Now"}
            </Button>
          </form>
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
                Enjoy Quality Stories Without Limits.
              </span>
            </div>
            <div className="flex items-center gap-[20px] mt-[24px]">
              <SocialLink
                href="https://x.com/LitPadHQ"
                icon="/assets/icons/x.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/litpad/"
                icon="/assets/icons/in.svg"
              />
              <SocialLink
                href="https://www.facebook.com/LitPadHQ"
                icon="/assets/icons/fb.svg"
              />

              <SocialLink
                href="https://www.instagram.com/litpadhq"
                icon="/assets/icons/ig.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-[30px] pb-[100px]">
          <span className="text-[#7F7589] text-[12px] lg:text-[14px] font-[400]">
            © 2024 LitPad Platforms. All rights reserved.
          </span>
        </div>
      </section>
      {openModal && (
        <WelcomeLitpadModal
          onClose={() => setOpenModal(false)}
          openModal={openModal}
        />
      )}
    </main>
  );
}

export default App;
