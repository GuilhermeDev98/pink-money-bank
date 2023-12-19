import Account from "./components/Account";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const logged = true;

  return (
    <>
      {logged ? (
        <div className="w-full h-[100vh] flex">
          <div className="w-[30vh] shadow-2xl shadow-gray-500/50 p-8">
            <Sidebar />
          </div>
          <div className="w-full">
            <div className="h-[10%]">
              <Header />
            </div>
            <div className="bg-gray-100 h-[90%]">
              <Account />
            </div>
          </div>
        </div>
      ) : (
        <>Não Está Logado</>
      )}
    </>
  );
}

export default App;
