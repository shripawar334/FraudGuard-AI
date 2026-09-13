"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030914] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative mx-auto flex min-h-[calc(100vh-94px)] max-w-7xl items-center px-6 py-16 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-8 mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              AI-POWERED FRAUD DETECTION
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[78px]">

              Detect Fraud.
              <br />

              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Protect Every
              </span>

              <br />

              Transaction.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              An intelligent machine learning system that analyzes transaction
              patterns and identifies potentially fraudulent activity in real time.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/predict"
                className="group rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 font-semibold shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >
                Analyze Transaction
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-slate-700 bg-slate-900/40 px-7 py-4 font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-white"
              >
                Learn More
              </Link>

            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Machine Learning
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Real-time Analysis
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Risk Assessment
              </div>

            </div>

          </div>


          {/* ================= RIGHT AI VISUAL ================= */}
          <div className="relative flex min-h-[520px] items-center justify-center">

            {/* Main glow */}
            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

            {/* Outer rotating ring */}
            <div className="absolute h-[390px] w-[390px] animate-[spin_18s_linear_infinite] rounded-full border border-cyan-400/10 border-dashed" />

            {/* Second ring */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-blue-500/20" />

            {/* AI Core */}
            <div className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-cyan-400/30 bg-[#071522]/90 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-xl">

              {/* Inner glow */}
              <div className="absolute h-32 w-32 animate-pulse rounded-full bg-cyan-400/10 blur-2xl" />

              {/* Core */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.2)]">

                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-300">
                    AI
                  </div>

                  <div className="mt-1 text-[10px] tracking-[0.25em] text-slate-400">
                    ENGINE
                  </div>
                </div>

              </div>

            </div>


            {/* ================= FLOATING NODES ================= */}

            {/* Transaction */}
            <div className="absolute left-0 top-24 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-slate-700/70 bg-[#081421]/90 px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  $
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    INPUT
                  </p>
                  <p className="font-semibold">
                    Transaction
                  </p>
                </div>

              </div>

            </div>


            {/* Risk Detection */}
            <div className="absolute right-0 top-16 animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-cyan-400/20 bg-[#081421]/90 px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  ◉
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    PROCESSING
                  </p>
                  <p className="font-semibold">
                    Risk Detection
                  </p>
                </div>

              </div>

            </div>


            {/* Protection */}
            <div className="absolute bottom-20 right-4 animate-[float_4.5s_ease-in-out_infinite] rounded-2xl border border-emerald-400/20 bg-[#081421]/90 px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    OUTPUT
                  </p>
                  <p className="font-semibold">
                    Protected
                  </p>
                </div>

              </div>

            </div>


            {/* Analysis status */}
            <div className="absolute bottom-10 left-5 rounded-xl border border-slate-700/60 bg-[#07111d]/80 px-5 py-3 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                </span>

                <span className="text-sm text-slate-300">
                  AI system ready
                </span>

              </div>

            </div>


            {/* Connecting lines */}
            <div className="absolute left-[18%] top-[44%] h-px w-[25%] bg-gradient-to-r from-transparent via-blue-400/40 to-cyan-400/40" />

            <div className="absolute right-[18%] top-[39%] h-px w-[25%] bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent" />

            <div className="absolute bottom-[30%] right-[28%] h-[20%] w-px bg-gradient-to-b from-cyan-400/30 to-transparent" />

          </div>

        </div>

      </section>


      {/* Bottom line */}
      <div className="relative mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

    </main>
  );
}