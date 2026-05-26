import { BellRing } from "lucide-react";

function Header() {
  return (
    <div className="bg-slate-600 flex flex-col gap-6">
      <div className="flex flex-row items-center ">
        <BellRing />
        <div className="text-2xl font-light">Quadro de Avisos</div>
      </div>
    </div>
  );
}

export default Header;
