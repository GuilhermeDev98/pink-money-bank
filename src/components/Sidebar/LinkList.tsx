import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsCreditCard2Front } from "react-icons/bs";
import { LiaCogSolid } from "react-icons/lia";
import { BsWallet2 } from "react-icons/bs";

const LinkList = () => {
  return (
    <ul className="list-none">
      <a href="" className="group">
        <li className="flex items-center h-16">
          <div className="w-[30%] text-gray-400  group-hover:text-pink-400 text-3xl">
            <HiOutlineBanknotes />
          </div>
          <div className="font-bold text-gray-500">Home</div>
        </li>
      </a>
      <a href="" className="group">
        <li className="flex items-center h-16">
          <div className="w-[30%] text-gray-400  group-hover:text-pink-400 text-3xl">
            <BsWallet2 />
          </div>
          <div className="font-bold text-gray-500">Carteira</div>
        </li>
      </a>
      <a href="" className="group">
        <li className="flex items-center h-16">
          <div className="w-[30%] text-gray-400  group-hover:text-pink-400 text-3xl">
            <BsCreditCard2Front />
          </div>
          <div className="font-bold text-gray-500">Cartão</div>
        </li>
      </a>
      <a href="" className="group">
        <li className="flex items-center h-16">
          <div className="w-[30%] text-gray-400  group-hover:text-pink-400 text-3xl">
            <LiaCogSolid />
          </div>
          <div className="font-bold text-gray-500">Ajustes</div>
        </li>
      </a>
    </ul>
  );
};
export default LinkList;
