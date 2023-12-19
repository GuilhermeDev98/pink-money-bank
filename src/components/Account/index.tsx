import AccountDetails from "./AccountDetails";

const Account = () => {
  return (
    <div className="p-10  h-full">
      <div className="flex justify-between content-stretch">
        <div className="w-full mr-2"><AccountDetails/></div>
        <div className="w-full ml-2">Gráficos</div>
      </div>
    </div>
  );
};

export default Account;
