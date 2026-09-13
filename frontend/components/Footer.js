import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-cyan-400/10 bg-[#050b14]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto w-[92%] max-w-[1200px]">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-cyan-400/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-400/40">
                <span className="text-xl font-extrabold text-white">
                  F
                </span>
              </div>

              <div className="text-xl font-bold tracking-tight">
                <span className="text-white">Fraud</span>
                <span className="text-cyan-400">Guard</span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              An intelligent fraud detection system powered by
              machine learning to help identify suspicious
              transactions and reduce financial risk.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

              <span className="text-xs font-medium text-emerald-300">
                AI System Online
              </span>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/predict"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Predict
              </Link>

              <Link
                href="/history"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                History
              </Link>

              <Link
                href="/contact"
                className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* Technology */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Technology
            </h3>

            <div className="flex flex-col gap-3">

              <span className="text-sm text-slate-400">
                Machine Learning
              </span>

              <span className="text-sm text-slate-400">
                Random Forest
              </span>

              <span className="text-sm text-slate-400">
                FastAPI
              </span>

              <span className="text-sm text-slate-400">
                Next.js
              </span>

              <span className="text-sm text-slate-400">
                REST API
              </span>

            </div>
          </div>

        </div>


        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />


        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} FraudGuard. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span className="text-xs text-slate-500">
              Built with
            </span>

            <span className="text-xs font-medium text-cyan-400">
              AI • ML • Technology
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;