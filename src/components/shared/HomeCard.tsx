type HomeCardProps = {
  title: string;
  description: string;
  icon: string;
};

const HomeCard = ({ title, description, icon }: HomeCardProps) => {
  return (
    <div className="border border-[#E0DEE3] py-[54px] px-[24px] max-w-[410px] rounded-3xl">
      <div className="w-[60px] h-[60px] rounded-lg border border-[#F6F5F6] flex items-center justify-center ">
        <img
          src={`/assets/icons/${icon}.svg`}
          alt="pen"
          className="h-[36px] "
        />
      </div>
      <h4 className="mt-[50px] text-[20px]">{title}</h4>
      <p className="text-[14px] text-[#7F7589] pt-2">{description}</p>
    </div>
  );
};

export default HomeCard;
