import { MapPin, ExternalLink, Navigation } from "lucide-react";

export default function LocationCard() {
  return (
    <section className="w-full px-4 pb-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
          Localização do CPPEM Presencial
        </h2>
        <div className="bg-[#111111] border border-[#1adb6530] rounded-xl p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1adb6515] border border-[#1adb6540] flex items-center justify-center">
              <MapPin size={22} className="text-[#1adb65]" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-2">
                Endereço da Unidade
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-1">
                Praça Presidente Getúlio Vargas, Nossa Senhora das Dores
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-1">
                Número 119 — Prédio ao lado da Coletivo
              </p>
              <p className="text-gray-300 text-sm font-semibold mb-4">
                Caruaru – PE
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <Navigation size={12} className="text-[#1adb65]" />
                <span>Use o GPS para chegar com facilidade</span>
              </div>

              <a
                href="https://links.cppem.com.br/localiza%C3%A7%C3%A3o-maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1adb65] text-black text-sm font-bold rounded-lg hover:bg-[#14b554] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#1adb6520]"
              >
                <MapPin size={14} />
                Abrir localização no Maps
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
