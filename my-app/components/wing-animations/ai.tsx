"use client";

import { useEffect, useState } from "react";

export function AIAnimation() {
  const [neurons, setNeurons] = useState<{ active: boolean }[]>(
    Array.from({ length: 16 }, () => ({ active: false }))
  );
  const [processing, setProcessing] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      setProcessing(true);
      setNeurons((prev) => prev.map(() => ({ active: Math.random() > 0.5 })));
      setAccuracy(Math.floor(85 + Math.random() * 15));
      timeout = setTimeout(() => setProcessing(false), 400);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-slate-950 via-purple-950/30 to-slate-950 rounded-lg p-3 sm:p-4 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      >
        <div className="bg-slate-900/80 rounded-2xl p-2 sm:p-3 h-full flex flex-col gap-2 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-linear-to-br from-purple-500 to-violet-600 flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-200">
                  Neural Network
                </div>
                <div className="text-xs text-slate-400">
                  Deep Learning Model
                </div>
              </div>
            </div>
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                processing ? "bg-green-500" : "bg-slate-600"
              } animate-pulse`}
            />
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[210px]">
                <div className="grid grid-cols-4 gap-1.5">
                  {neurons.map((neuron, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg border transition-all duration-300 ${
                        neuron.active
                          ? "bg-linear-to-br from-purple-500 to-violet-600 border-purple-400 shadow-lg shadow-purple-500/40 scale-105"
                          : "bg-slate-800 border-slate-700"
                      }`}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {neuron.active && (
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <svg
                  className="absolute inset-0 pointer-events-none"
                  style={{ zIndex: -1 }}
                >
                  {neurons.map((neuron, i) => {
                    if (!neuron.active || i % 4 === 3) return null;
                    return (
                      <line
                        key={i}
                        x1={`${(i % 4) * 25 + 12.5}%`}
                        y1={`${Math.floor(i / 4) * 25 + 12.5}%`}
                        x2={`${((i + 1) % 4) * 25 + 12.5}%`}
                        y2={`${Math.floor(i / 4) * 25 + 12.5}%`}
                        stroke="rgba(168, 85, 247, 0.3)"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-2">
              <div className="space-y-1.5">
                <div>
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="text-slate-400">Model Accuracy</span>
                    <span className="text-purple-400 font-semibold">
                      {accuracy}%
                    </span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-violet-500 transition-all duration-500 rounded-full"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="text-slate-400">Training Progress</span>
                    <span className="text-cyan-400 font-semibold">
                      epoch 47/50
                    </span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-cyan-500 to-blue-500 w-11/12 animate-pulse rounded-full" />
                  </div>
                </div>
              </div>

              <div className="space-y-0.5 font-mono text-xs">
                <div className="flex items-center gap-1 text-green-400">
                  <span>✓</span>
                  <span>Data preprocessing complete</span>
                </div>
                <div className="flex items-center gap-1 text-purple-400">
                  <div
                    className={`w-1 h-1 rounded-full bg-purple-400 ${
                      processing ? "animate-pulse" : ""
                    }`}
                  />
                  <span>Model training in progress...</span>
                </div>
              </div>

              <div className="pt-1.5 border-t border-slate-700/50">
                <div className="flex items-center gap-1 text-xs">
                  <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 flex items-center gap-0.5">
                    🔒 Private AI
                  </span>
                  <span className="text-slate-400">Edge Computing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
