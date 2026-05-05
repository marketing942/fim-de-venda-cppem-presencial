"use client";

import { CheckCircle2, ExternalLink, AlertCircle } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  badge?: string;
  note?: string;
  completed: boolean;
  onComplete: () => void;
}

export default function StepCard({
  number,
  title,
  description,
  buttonLabel,
  href,
  badge,
  note,
  completed,
  onComplete,
}: StepCardProps) {
  function handleClick() {
    onComplete();
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div
      className={`relative rounded-xl border transition-all duration-500 p-5 sm:p-6 ${
        completed
          ? "bg-[#0d1f12] border-[#1adb6560]"
          : "bg-[#111111] border-[#1adb6530] hover:border-[#1adb6560]"
      }`}
    >
      {/* Completed overlay stripe */}
      {completed && (
        <div className="absolute top-0 left-0 w-1 h-full bg-[#1adb65] rounded-l-xl" />
      )}

      <div className="flex items-start gap-4">
        {/* Step number / check icon */}
        <div className="flex-shrink-0 mt-0.5">
          {completed ? (
            <div className="check-pop">
              <CheckCircle2 size={28} className="text-[#1adb65]" />
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full border-2 border-[#1adb65] flex items-center justify-center">
              <span className="text-xs font-black text-[#1adb65]">{number}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Passo {number}
            </span>
            {badge && (
              <span className="text-[10px] font-black tracking-wider uppercase bg-[#ff4444]/20 text-[#ff6666] border border-[#ff444440] rounded px-2 py-0.5">
                {badge}
              </span>
            )}
            {completed && (
              <span className="text-[10px] font-black tracking-wider uppercase bg-[#1adb6520] text-[#1adb65] border border-[#1adb6540] rounded px-2 py-0.5">
                Concluído
              </span>
            )}
          </div>

          <h3
            className={`text-base sm:text-lg font-bold mb-2 transition-all duration-300 ${
              completed ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {description}
          </p>

          {/* Note */}
          {note && (
            <div className="flex items-start gap-2 bg-[#1adb6510] border border-[#1adb6530] rounded-lg p-3 mb-4">
              <AlertCircle size={14} className="text-[#1adb65] flex-shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-[#1adb65]">{note}</span>
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleClick}
            disabled={completed}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
              completed
                ? "bg-[#1adb6520] text-[#1adb65] border border-[#1adb6540] cursor-default"
                : "bg-[#1adb65] text-black hover:bg-[#14b554] active:scale-[0.97] shadow-lg shadow-[#1adb6520]"
            }`}
          >
            {completed ? (
              <>
                <CheckCircle2 size={14} />
                Concluído
              </>
            ) : (
              <>
                {buttonLabel}
                {href && <ExternalLink size={13} />}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
