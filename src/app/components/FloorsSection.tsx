import { Building2 } from "lucide-react";

const FLOORS = [
  {
    floor: "4º Andar",
    room: "Sala 03",
    label: "Turma PMAL 2026",
    isReception: false,
  },
  {
    floor: "3º Andar",
    room: "Sala 02",
    label: "Turma PMPE 2026",
    isReception: false,
  },
  {
    floor: "2º Andar",
    room: "Sala 01",
    label: "Turma Carreiras Policiais",
    isReception: false,
  },
  {
    floor: "1º Andar",
    room: null,
    label: "Recepção",
    isReception: true,
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

        <div className="flex gap-4 sm:gap-6 items-stretch">
          {/* Table */}
          <div className="flex-1 bg-[#111111] border border-[#1adb6530] rounded-xl overflow-hidden">
            {FLOORS.map((item, index) => (
              <div
                key={index}
                className={`flex items-center border-b last:border-b-0 ${
                  item.isReception
                    ? "bg-[#0d1f12] border-[#1adb6540]"
                    : "bg-transparent border-[#1adb6520]"
                }`}
              >
                {/* Floor column */}
                <div
                  className={`flex-shrink-0 w-[90px] sm:w-[108px] px-3 py-4 border-r ${
                    item.isReception
                      ? "border-[#1adb6540]"
                      : "border-[#1adb6520]"
                  }`}
                >
                  <span
                    className={`text-xs font-black tracking-wider uppercase ${
                      item.isReception ? "text-[#1adb65]" : "text-gray-400"
                    }`}
                  >
                    {item.floor}
                  </span>
                </div>

                {/* Content column */}
                <div className="flex-1 px-4 py-4">
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
            ))}
          </div>

          {/* Building icon */}
          <div className="flex-shrink-0 w-16 sm:w-20 flex flex-col items-center justify-center bg-[#111111] border border-[#1adb6530] rounded-xl gap-2 py-4">
            <Building2 size={32} className="text-[#1adb65]" strokeWidth={1.5} />
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest text-center leading-tight">
              CPPEM<br />Presencial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
