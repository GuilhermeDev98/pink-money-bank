import Banner from "./Banner";
import ButtonLogout from "./ButtonLogout";
import LinkList from "./LinkList";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Logo />
      <LinkList />
      <Banner />
      <ButtonLogout />
    </div>
  );
};

export default Sidebar;
