import { Building2, DoorOpen } from "lucide-react";

const FLOORS = [
  {
    floor: "4º Andar",
    room: "Sala 03",
    label: "Turma PMAL 2026",
    isReception: false,
    isTop: true,
  },
  {
    floor: "3º Andar",
    room: "Sala 02",
    label: "Turma PMPE 2026",
    isReception: false,
    isTop: false,
  },
  {
    floor: "2º Andar",
    room: "Sala 01",
    label: "Turma Carreiras Policiais",
    isReception: false,
    isTop: false,
  },
  {
    floor: "1º Andar",
    room: null,
    label: "Recepção",
    isReception: true,
    isTop: false,
  },
];

export default function FloorsSection() {
  return (
    <section className="w-full px-4 pb-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-1">
          Como encontrar sua sala
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Distribuição dos andares e turmas do CPPEM Presencial.
        </p>

        {/* Building */}
        <div className="max-w-lg mx-auto">
          {/* Roof */}
          <div className="flex justify-center">
            <div className="relative w-[92%]">
              {/* Roof triangle via borders */}
              <div
                className="w-full h-0 border-l-[30px] border-r-[30px] border-b-[28px] border-l-transparent border-r-transparent border-b-[#1adb6540]"
                style={{ filter: "drop-shadow(0 -1px 0 #1adb6530)" }}
              />
              {/* Roof top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                <Building2 size={16} className="text-[#1adb65]" />
              </div>
            </div>
          </div>

          {/* Building body */}
          <div className="border-x border-b border-[#1adb6540] rounded-b-xl overflow-hidden bg-[#0e0e0e]">
            {FLOORS.map((item, index) => (
              <div
                key={index}
                className={`flex items-stretch border-b last:border-b-0 transition-colors ${
                  item.isReception
                    ? "border-[#1adb6540] bg-[#0d1f12]"
                    : "border-[#1adb6520] bg-[#111111]"
                }`}
              >
                {/* Left label — floor number */}
                <div
                  className={`flex-shrink-0 w-[72px] sm:w-[88px] flex flex-col items-center justify-center py-4 border-r ${
                    item.isReception
                      ? "border-[#1adb6540] bg-[#1adb6510]"
                      : "border-[#1adb6520] bg-[#0a0a0a]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black tracking-widest uppercase leading-none ${
                      item.isReception ? "text-[#1adb65]" : "text-gray-500"
                    }`}
                  >
                    {item.floor.split(" ")[0]}
                  </span>
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase leading-none mt-0.5 ${
                      item.isReception ? "text-[#1adb65]" : "text-gray-600"
                    }`}
                  >
                    {item.floor.split(" ").slice(1).join(" ")}
                  </span>
                </div>

                {/* Right content */}
                <div className="flex-1 flex items-center gap-3 px-4 py-4">
                  {/* Window / door icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center border ${
                      item.isReception
                        ? "bg-[#1adb6520] border-[#1adb6550]"
                        : "bg-[#181818] border-[#333]"
                    }`}
                  >
                    {item.isReception ? (
                      <DoorOpen size={14} className="text-[#1adb65]" />
                    ) : (
                      <div className="w-4 h-4 border border-gray-600 rounded-sm grid grid-cols-2 gap-px p-0.5">
                        <div className="bg-[#333] rounded-[1px]" />
                        <div className="bg-[#333] rounded-[1px]" />
                        <div className="bg-[#333] rounded-[1px]" />
                        <div className="bg-[#333] rounded-[1px]" />
                      </div>
                    )}
                  </div>

                  <div>
                    {item.room && (
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block mb-0.5">
                        {item.room}
                      </span>
                    )}
                    <p
                      className={`text-sm font-bold leading-tight ${
                        item.isReception ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Ground / base */}
            <div className="h-3 bg-[#1adb6515] border-t border-[#1adb6530]" />
          </div>

          {/* Foundation */}
          <div className="mx-4 h-2 bg-[#1adb6520] rounded-b-sm" />
          <div className="mx-8 h-1.5 bg-[#1adb6515] rounded-b-sm" />
        </div>
      </div>
    </section>
  );
}
