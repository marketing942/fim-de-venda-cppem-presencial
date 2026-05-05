import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-[#1adb6530] bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-[120px] h-[44px]">
            <Image
              src="https://raw.githubusercontent.com/marketing942/fotos-dos-bots/main/LOGO%20CPPEM.png"
              alt="CPPEM Concursos"
              fill
              sizes="120px"
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-xs font-semibold tracking-widest text-[#1adb65] uppercase border border-[#1adb6560] rounded px-2 py-1">
            Turmas Presenciais
          </span>
          <span className="text-[10px] font-medium text-gray-500 tracking-wide italic pr-0.5">
            Seu sonho, nosso objetivo.
          </span>
        </div>
      </div>
    </header>
  );
}
