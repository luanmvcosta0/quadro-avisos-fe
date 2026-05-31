import { Cog, ScrollText } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-b-2xl p-4 w-150 border-t flex flex-row justify-between">
        <div className="flex flex-row justify-center items-center gap-2">
          <ScrollText />
          <button>Ver todos os avisos</button>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Cog />
          <button>Configurações</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
