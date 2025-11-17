"use client";

import { useEffect, useState } from "react";

export function CompetitiveCodingAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const code = "solve();";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= code.length) {
        setTypedCode(code.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setTypedCode("");
        }, 1000);
      }
    }, 150);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950/50 to-slate-950 rounded-lg p-2 sm:p-3 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Code Editor Window */}
      <div
        className={`relative w-full h-full max-w-[420px] mx-auto transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-slate-800/90 rounded-t-lg px-4 py-2 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-slate-400 text-xs ml-2 font-mono">
            solution.cpp
          </span>
        </div>

        {/* Code Area */}
        <div className="bg-slate-900/90 rounded-b-lg p-3 sm:p-4 font-mono text-xs sm:text-sm min-h-40 sm:min-h-50">
          <div className="space-y-2">
            <div className="text-purple-400">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-yellow-300">solve</span>
              <span className="text-slate-300">()</span>{" "}
              <span className="text-slate-300">{"{"}</span>
            </div>
            <div className="pl-4 text-cyan-400">
              <span className="text-slate-300">return</span>{" "}
              <span className="text-green-400">result</span>
              <span className="text-slate-300">;</span>
            </div>
            <div className="text-slate-300">{"}"}</div>
            <div className="mt-4 text-emerald-400">
              {typedCode}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Complexity Indicator */}
          <div className="mt-6 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Time:</span>
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-green-500 to-emerald-400 w-3/4 animate-pulse" />
              </div>
              <span className="text-green-400">O(n)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Space:</span>
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-blue-500 to-cyan-400 w-1/2 animate-pulse" />
              </div>
              <span className="text-blue-400">O(1)</span>
            </div>
          </div>
        </div>

        {/* Test Cases Animation */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i <= activeIndex ? "bg-green-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
