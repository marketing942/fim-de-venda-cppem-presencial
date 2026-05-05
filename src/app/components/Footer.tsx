import Image from "next/image";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1adb6520] bg-[#0a0a0a] py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="relative w-[100px] h-[36px]">
          <Image
            src="https://raw.githubusercontent.com/marketing942/fotos-dos-bots/main/LOGO%20CPPEM.png"
            alt="CPPEM Concursos"
            fill
            sizes="100px"
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-xs">
          <Shield size={12} className="text-[#1adb6540]" />
          <span>Turmas Presenciais · Caruaru – PE</span>
        </div>

        <p className="text-gray-600 text-xs text-center">
          © 2026 CPPEM Concursos Públicos | Turmas Presenciais
        </p>
        <p className="text-[#1adb6580] text-xs font-semibold tracking-wider text-center">
          Seu sonho, nosso objetivo.
        </p>
      </div>
    </footer>
  );
}
