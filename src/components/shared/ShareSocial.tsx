type ShareSocialProps = {
  text: string;
  img: string;
  href: string;
};
const ShareSocial = ({ text, img, href }: ShareSocialProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-white py-[14px] px-4 rounded-[12px] flex justify-center items-center gap-2"
    >
      <span className="text-[14px] md:text-[16px]">{text}</span>
      <img
        className="w-[18px] h-[18px]"
        src={`/assets/icons/${img}`}
        alt="ig"
      />
    </a>
  );
};

export default ShareSocial;
