import { Building2, Users, ChevronRight } from "lucide-react";

const FLOORS = [
  {
    floor: "1º Andar",
    room: null,
    label: "Recepção",
    description: "Assinar contrato e registro na catraca",
    isReception: true,
  },
  {
    floor: "2º Andar",
    room: "Sala 01",
    label: "Turma Carreiras Policiais",
    description: null,
    isReception: false,
  },
  {
    floor: "3º Andar",
    room: "Sala 02",
    label: "Turma PMPE 2026",
    description: null,
    isReception: false,
  },
  {
    floor: "4º Andar",
    room: "Sala 03",
    label: "Turma PMAL 2026",
    description: null,
    isReception: false,
  },
];

export default function FloorsSection() {
  return (
    <section className="w-full px-4 pb-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-1">
          Como encontrar sua sala
        </h2>
        <p className="text-gray-500 text-sm mb-5">
          Distribuição dos andares e turmas do CPPEM Presencial.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[#1adb6530] hidden sm:block" />

          <div className="space-y-3">
            {FLOORS.map((item, index) => (
              <div key={index} className="flex items-stretch gap-4">
                {/* Floor indicator */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0 hidden sm:flex">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border font-black text-xs z-10 ${
                      item.isReception
                        ? "bg-[#1adb6520] border-[#1adb6560] text-[#1adb65]"
                        : "bg-[#181818] border-[#1adb6530] text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-xl border p-4 sm:p-5 flex items-center gap-3 ${
                    item.isReception
                      ? "bg-[#0d1f12] border-[#1adb6550]"
                      : "bg-[#111111] border-[#1adb6530]"
                  }`}
                >
                  {/* Mobile floor number */}
                  <div
                    className={`sm:hidden w-9 h-9 rounded-lg flex items-center justify-center border font-black text-xs flex-shrink-0 ${
                      item.isReception
                        ? "bg-[#1adb6520] border-[#1adb6560] text-[#1adb65]"
                        : "bg-[#181818] border-[#1adb6530] text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div className="flex-shrink-0">
                    {item.isReception ? (
                      <Building2 size={18} className="text-[#1adb65]" />
                    ) : (
                      <Users size={18} className="text-gray-500" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-bold tracking-wider uppercase ${
                          item.isReception ? "text-[#1adb65]" : "text-gray-500"
                        }`}
                      >
                        {item.floor}
                      </span>
                      {item.room && (
                        <>
                          <ChevronRight size={12} className="text-gray-600" />
                          <span className="text-xs text-gray-500">{item.room}</span>
                        </>
                      )}
                    </div>
                    <p
                      className={`text-sm font-bold mt-0.5 ${
                        item.isReception ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.description && (
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
