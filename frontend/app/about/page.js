import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[120px]" />


      {/* Hero */}
      <section className="relative z-10 mx-auto w-[92%] max-w-[1200px] py-24">

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium tracking-wider text-cyan-300">
              ABOUT FRAUDGUARD
            </span>

          </div>


          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">

            Smarter Detection.
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Safer Transactions.
            </span>

          </h1>


          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            FraudGuard is a machine learning powered fraud detection
            system designed to analyze transaction behavior and identify
            potentially suspicious activity quickly and intelligently.
          </p>

        </div>


        {/* What We Do */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Turning transaction data into
              <span className="text-cyan-400"> security insights.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Every transaction contains signals that can help determine
              whether it looks normal or potentially fraudulent.
              FraudGuard uses machine learning to analyze these signals
              and estimate the likelihood of fraud.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Instead of relying only on fixed rules, the system evaluates
              multiple transaction characteristics together to provide
              a more intelligent risk assessment.
            </p>

          </div>


          {/* Right - Analysis Card */}
          <div className="relative">

            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative rounded-3xl border border-cyan-400/10 bg-[#0b1624]/80 p-7 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Fraud Analysis
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Transaction Signals
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <span className="text-cyan-400">
                    AI
                  </span>
                </div>

              </div>


              {/* Signals */}
              <div className="mt-8 space-y-5">

                {[
                  ["Transaction Amount", "92%"],
                  ["Device Trust", "87%"],
                  ["Transaction Pattern", "94%"],
                  ["Location Behavior", "89%"],
                ].map(([name, value]) => (

                  <div key={name}>

                    <div className="mb-2 flex justify-between text-sm">

                      <span className="text-slate-400">
                        {name}
                      </span>

                      <span className="text-cyan-400">
                        {value}
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                        style={{ width: value }}
                      />

                    </div>

                  </div>

                ))}

              </div>


              {/* Result */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
                    <span className="text-emerald-400">
                      ✓
                    </span>
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Analysis Complete
                    </p>

                    <p className="text-xs text-slate-500">
                      Risk assessment generated
                    </p>

                  </div>

                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  LOW RISK
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* How It Works */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From transaction to prediction
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              FraudGuard follows a simple pipeline to transform transaction
              information into an actionable risk assessment.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Step 1 */}
            <div className="group rounded-2xl border border-slate-800/60 bg-[#0b1624]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#0d1b2a]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
                01
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Enter Transaction
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Provide the required customer, account and transaction
                details through the prediction interface.
              </p>

            </div>


            {/* Step 2 */}
            <div className="group rounded-2xl border border-slate-800/60 bg-[#0b1624]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#0d1b2a]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-lg font-bold text-cyan-400">
                02
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Machine Learning Analysis
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The trained machine learning model evaluates the transaction
                and calculates its fraud probability.
              </p>

            </div>


            {/* Step 3 */}
            <div className="group rounded-2xl border border-slate-800/60 bg-[#0b1624]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#0d1b2a]">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-lg font-bold text-emerald-400">
                03
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Risk Assessment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The system returns a prediction, fraud probability and
                corresponding risk level.
              </p>

            </div>

          </div>

        </section>


        {/* Technology */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built with modern technologies
            </h2>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                name: "Machine Learning",
                description: "Fraud prediction model",
              },
              {
                name: "FastAPI",
                description: "High-performance backend API",
              },
              {
                name: "Next.js",
                description: "Modern frontend experience",
              },
              {
                name: "MongoDB",
                description: "Transaction history storage",
              },
            ].map((tech) => (

              <div
                key={tech.name}
                className="rounded-2xl border border-slate-800/60 bg-[#0b1624]/60 p-6 text-center transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5"
              >

                <h3 className="font-semibold text-white">
                  {tech.name}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {tech.description}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-blue-600/10 to-cyan-400/5 p-10 text-center sm:p-14">

          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to analyze a transaction?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Use FraudGuard to evaluate transaction risk with our
              machine learning powered prediction system.
            </p>

            <Link
              href="/predict"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-400/20"
            >
              Start Prediction

              <span className="text-lg text-cyan-300">
                →
              </span>
            </Link>

          </div>

        </section>

      </section>

    </main>
  );
}