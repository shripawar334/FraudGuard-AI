export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-10 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[130px]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-5xl items-center justify-center py-20">

        <div className="w-full max-w-3xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium tracking-wider text-cyan-300">
              GET IN TOUCH
            </span>
          </div>


          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Us
            </span>
          </h1>


          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Have a question or want to know more about FraudGuard?
            Feel free to get in touch.
          </p>


          {/* Contact Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {/* Email */}
            <div className="group rounded-2xl border border-slate-800/70 bg-[#0b1624]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                ✉
              </div>

              <h2 className="mt-5 font-semibold">
                Email
              </h2>

              <p className="mt-2 break-all text-sm text-slate-400">
                shripadpawar.skn.comp@gmail.com
              </p>

            </div>


            {/* Phone */}
            <div className="group rounded-2xl border border-slate-800/70 bg-[#0b1624]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                ☎
              </div>

              <h2 className="mt-5 font-semibold">
                Phone
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                +91 80102 92853
              </p>

            </div>


            {/* Location */}
            <div className="group rounded-2xl border border-slate-800/70 bg-[#0b1624]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                📍
              </div>

              <h2 className="mt-5 font-semibold">
                Location
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Pune, Maharashtra
              </p>

            </div>

          </div>


          {/* Bottom */}
          <div className="mt-14 border-t border-slate-800/60 pt-8">

            <p className="text-sm text-slate-500">
              Built with passion using{" "}
              <span className="text-cyan-400">
                AI & Machine Learning
              </span>
            </p>

            <p className="mt-2 text-xs text-slate-600">
              FraudGuard • Intelligent Fraud Detection System
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}