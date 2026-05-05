import { MessageCircle, ExternalLink, HeadphonesIcon } from "lucide-react";

export default function SupportCard() {
  return (
    <section className="w-full px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#0d1f12] to-[#111111] border border-[#1adb6540] rounded-xl p-6 sm:p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#1adb6520] border border-[#1adb6550] flex items-center justify-center">
              <HeadphonesIcon size={26} className="text-[#1adb65]" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Suporte CPPEM
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Me avisa se deu tudo certo. Nossa equipe está pronta para te orientar
            no que for necessário.
          </p>

          <a
            href="https://links.cppem.com.br/cppem-suporte-aluno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1adb65] text-black text-sm font-black rounded-xl hover:bg-[#14b554] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[#1adb6520]"
          >
            <MessageCircle size={16} />
            Falar com suporte
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
