import { BellRing } from "lucide-react";

function Header() {
  return (
    <div className="flex flex-col items-center w-full bg-slate-800">
      <div className="bg-mist-300 px-60 py-8 rounded-t-2xl">
        <div className="flex flex-row justify-start">
          <div>
            <BellRing />
          </div>
          <div>Quadro de Avisos</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
