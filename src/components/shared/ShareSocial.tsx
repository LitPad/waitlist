type ShareSocialProps = {
  text: string;
  img: string;
};
const ShareSocial = ({ text, img }: ShareSocialProps) => {
  return (
    <div className="bg-white py-[14px] px-4 rounded-[12px] flex justify-center items-center gap-2">
      <span className="text-[16px]">{text}</span>
      <img
        className="w-[18px] h-[18px]"
        src={`/assets/icons/${img}`}
        alt="ig"
      />
    </div>
  );
};

export default ShareSocial;
