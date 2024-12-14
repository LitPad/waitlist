const SocialLink = ({ icon, href }: { icon: string; href: string }) => {
  return (
    <a href={href} target="_blank">
      <img src={icon} alt="logo" className="p-2 hover:cursor-pointer" />
    </a>
  );
};

export default SocialLink;
