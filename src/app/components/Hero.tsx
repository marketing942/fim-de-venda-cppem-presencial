import { Shield, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full pt-12 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#1adb65] uppercase bg-[#1adb6515] border border-[#1adb6540] rounded-full px-4 py-2">
            <Shield size={12} className="fill-[#1adb65]" />
            CPPEM Concursos · Turmas Presenciais
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white leading-tight mb-6">
          Parabéns pela sua{" "}
          <span className="text-[#1adb65]">matrícula!</span>
          <br />
          Agora você faz parte do CPPEM.
        </h1>

        {/* Subtitle styled as impact card */}
        <div className="relative border border-[#1adb6540] bg-[#111111] rounded-xl p-5 max-w-2xl mx-auto">
          <div className="absolute -top-3 left-5">
            <Target size={16} className="text-[#1adb65]" />
          </div>
          <p className="text-white font-bold text-center text-base sm:text-lg leading-snug">
            Aqui você caminhará com as pessoas certas e estará mais perto de
            conquistar o seu sonho.{" "}
            <span className="text-[#1adb65]">
              Siga os próximos passos para concluir sua entrada na turma presencial.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
