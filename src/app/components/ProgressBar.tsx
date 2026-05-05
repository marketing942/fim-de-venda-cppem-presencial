"use client";

import { CheckCircle2, Trophy } from "lucide-react";

interface ProgressBarProps {
  completed: number;
  total: number;
  onReset: () => void;
}

export default function ProgressBar({ completed, total, onReset }: ProgressBarProps) {
  const percentage = Math.round((completed / total) * 100);
  const allDone = completed === total;

  return (
    <section className="w-full px-4 pb-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#111111] border border-[#1adb6530] rounded-xl p-5">
          {allDone ? (
            <div className="flex items-center gap-3 mb-4">
              <Trophy size={20} className="text-[#1adb65] flex-shrink-0" />
              <p className="text-[#1adb65] font-bold text-sm sm:text-base">
                Tudo certo! Agora você está pronto para iniciar sua jornada presencial no CPPEM.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#1adb65]" />
                <span className="text-sm font-semibold text-gray-300">
                  Você concluiu{" "}
                  <span className="text-[#1adb65] font-bold">{completed}</span> de{" "}
                  <span className="text-white font-bold">{total}</span> passos
                </span>
              </div>
              <span className="text-xs font-bold text-[#1adb65]">{percentage}%</span>
            </div>
          )}

          {/* Bar */}
          <div className="w-full bg-[#0a0a0a] rounded-full h-3 border border-[#1adb6520] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#14b554] to-[#1adb65] transition-all duration-700 ease-out progress-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Step dots */}
          <div className="flex justify-between mt-3 px-1">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < completed
                    ? "bg-[#1adb65]"
                    : "bg-[#333333]"
                }`}
              />
            ))}
          </div>

          {/* Reset button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={onReset}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
            >
              Refazer checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
