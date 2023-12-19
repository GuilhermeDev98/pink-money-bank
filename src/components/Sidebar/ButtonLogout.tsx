import { IoIosLogOut } from "react-icons/io";

const ButtonLogout = () => {
  return (
    <a href="">
      <div className="flex items-center justify-between border-2 rounded-lg h-10 p-4 text-gray-400">
        <div className="text-sm">Sair</div>
        <IoIosLogOut />
      </div>
    </a>
  );
};

export default ButtonLogout;
