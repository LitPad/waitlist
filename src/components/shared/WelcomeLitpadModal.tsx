import { Modal } from "flowbite-react";
import { X } from "lucide-react";
import ShareSocial from "./ShareSocial";

interface IWelcomeLitpadModalProps {
  onClose: () => void;
  openModal: boolean;
}
const WelcomeLitpadModal = ({
  onClose,
  openModal,
}: IWelcomeLitpadModalProps) => {
  return (
    <>
      <Modal size="xl" show={openModal} onClose={onClose}>
        <div className="relative py-[20px] px-[20px] md:px-[30px]">
          <X
            onClick={() => onClose()}
            className="absolute top-5 right-5 cursor-pointer"
          />
          <div className="text-center text-[20px] md:text-[26px] text-[#120024] mt-8">
            Welcome to the World of Endless Stories
          </div>
          <p className="text-[#7F7589] text-[14px] lg:text-[18px] font-[500] mb-[24px] max-w-[550px] text-wrap text-center px-4 mt-4">
            You're one step closer to unlocking thousands of captivating novels.
            Great stories are even better with friends – share the adventure!
          </p>
          <div className="bg-[#F6F5F6] w-full px-[25px]  md:px-[70px] py-[20px] mb-6 rounded-[20px] flex flex-col items-center">
            <p className="text-[#7F7589] text-[14px] lg:text-[16px] font-[500] text-center mb-[16px]">
              Want to help fellow book loves? Spread the word about litpad
            </p>
            <div className="flex flex-col gap-3">
              <ShareSocial
                text="Share on Whatsapp"
                img="ig.svg"
                href="https://api.whatsapp.com/send?text=LitPad%20is%20launching%20a%20platform%20where%20readers%20can%20discover%20quality%20novels%20across%20all%20their%20favorite%20genres%20for%20an%20affordable%20fee.%20Join%20the%20waitlist%20here%3A%20join.litpad.app"
              />
              <ShareSocial
                text="Share on Twitter"
                img="x.svg"
                href="https://twitter.com/intent/tweet?text=LitPad%20%28@LitPadHQ%29%20is%20launching%20a%20platform%20where%20readers%20can%20discover%20quality%20novels%20across%20all%20their%20favorite%20genres%20for%20an%20affordable%20fee.%20Join%20the%20waitlist%20here%3A%20join.litpad.app"
              />
              <ShareSocial
                text="Share on Facebook"
                img="fb.svg"
                href="https://www.facebook.com/sharer/sharer.php?u=https://join.litpad.app&quote=LitPad%20%28@LitPadHQ%29%20is%20launching%20a%20platform%20where%20readers%20can%20discover%20quality%20novels%20across%20all%20their%20favorite%20genres%20for%20an%20affordable%20fee.%20Join%20the%20waitlist%20here%3A%20join.litpad.app"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WelcomeLitpadModal;
