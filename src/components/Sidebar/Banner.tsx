import chart from "../../assets/chart.png";

const Banner = () => {
  return (
    <div className="">
      <img src={chart} alt="chart icon" />
      <div className="text- text-center font-extrabold text-gray-700">
        Quer mais recursos?
      </div>
      <div className="text-sm text-center font-bold text-gray-400">
        Compre o premium
      </div>
      <div className="text-center mt-3 flex justify-center hover:cursor-pointer">
        <div className="bg-pink-400 text-white py-2 px-7 rounded font-bold text-sm hover:shadow-2xl">
          Comprar
        </div>
      </div>
    </div>
  );
};
export default Banner;
