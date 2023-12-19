import SearchBar from "./SearchBar";
import { TbBellRinging } from "react-icons/tb";
import { LuMail } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-full flex items-center px-14 justify-between">
      <SearchBar />

      <div className="flex  items-center">
        <div className="flex border-r-2 pr-5">
          <div className="flex mx-2 hover:cursor-pointer">
            <div className="text-2xl text-gray-400">
              <TbBellRinging />
            </div>
            <div className="w-2 h-2 bg-red-700 -ml-2.5 rounded-full"></div>
          </div>
          <div className="text-2xl text-gray-400 mx-2 hover:cursor-pointer">
            <LuMail />
          </div>
        </div>
        <div className="ml-5">
          <img
            width={"40"}
            className="rounded-full hover:cursor-pointer"
            src="https://scontent.fssa25-1.fna.fbcdn.net/v/t1.6435-9/175117128_3451957574910435_4234468067082552549_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=TxW809XIR7wAX-daRVK&_nc_ht=scontent.fssa25-1.fna&oh=00_AfDA0yWVOuv-EunhyDkh3SsN137JgNa64pEBoCDsaCFM6g&oe=65A96A29"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
