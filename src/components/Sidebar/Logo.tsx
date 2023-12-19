import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo do pink bank" className="w-14" />
      <div className="font-extrabold text-lg text-pink-400"></div>
    </div>
  );
};

export default Logo;
