import { BellIcon } from "lucide-react";

function Header() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col items-center">
      <div className="flex flex-row bg-white rounded-t-2xl p-6 w-150 shadow-md mt-10 justify-between">
        <div className="flex flex-row gap-3">
          <div className="bg-amber-100 rounded-md w-10 h-10 flex flex-col items-center justify-center">
            <BellIcon size={28} />
          </div>
          <h1 className="text-2xl">Quadro de Avisos</h1>
        </div>
        <button className="bg-amber-500 text-white font-medium rounded-md w-27 h-8">
          Novo Aviso
        </button>
      </div>
    </div>
  );
}

export default Header;
