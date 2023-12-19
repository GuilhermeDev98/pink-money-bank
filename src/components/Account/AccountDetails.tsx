const AccountDetails = () => {
  return (
    <>
      <div className="font-bold mb-5 text-gray-700 text-lg">
        Detalhes Da Conta
      </div>
      <div className="bg-gray-600 w-full rounded p-5 text-white grid grid-cols-2 gap-16">
        <div className="">
          <div className="text-gray-400 font-bold">Valor Na Conta</div>
          <div className="text-xl font-semibold text-gray-200">R$ 22.423</div>
        </div>
        <div className="">
          <div className="text-gray-400 font-bold">Tipo De Moeda</div>
          <div className="text-xl font-semibold text-gray-200">Real Brasileiro</div>
        </div>
        <div className="">
          <div className="text-gray-400 font-bold">Data Último Investimento</div>
          <div className="text-xl font-semibold text-gray-200">19/12/2023</div>
        </div>
        <div className="">retirar</div>
      </div>
    </>
  );
};

export default AccountDetails;
