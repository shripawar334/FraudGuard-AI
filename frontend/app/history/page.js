"use client";

import { useState } from "react";

const historyData = [
  {
    id: 1,
    customer: "Rahul Sharma",
    date: "13 Sep 2026, 10:32 AM",
    amount: "₹5,000",
    prediction: "Legitimate",
    risk: "Low",
    probability: "2.4%",
  },
  {
    id: 2,
    customer: "Amit Patil",
    date: "13 Sep 2026, 11:15 AM",
    amount: "₹85,000",
    prediction: "Fraud",
    risk: "High",
    probability: "91.2%",
  },
  {
    id: 3,
    customer: "Sneha Kulkarni",
    date: "12 Sep 2026, 04:48 PM",
    amount: "₹12,500",
    prediction: "Legitimate",
    risk: "Low",
    probability: "4.1%",
  },
  {
    id: 4,
    customer: "Rohit Deshmukh",
    date: "12 Sep 2026, 08:21 PM",
    amount: "₹42,000",
    prediction: "Fraud",
    risk: "Medium",
    probability: "56.8%",
  },
];

export default function History() {
  const [search, setSearch] = useState("");

  const filteredHistory = historyData.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10 lg:px-16">

      {/* Header */}
      <div className="mx-auto max-w-7xl ">

        <div className="mb-10 mt-14">
          <p className="mb-2 text-sm font-medium tracking-[0.25em] text-cyan-400 uppercase">
            Transaction Records
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Prediction History
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            View previously analyzed transactions and their fraud detection
            results in one place.
          </p>
        </div>

        {/* Top Controls */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:max-w-sm">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="text-sm text-gray-400">
            Total Predictions:{" "}
            <span className="font-semibold text-cyan-400">
              {filteredHistory.length}
            </span>
          </div>
        </div>

        {/* History Table */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-cyan-950/20">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left">

              <thead className="border-b border-white/10 bg-white/[0.04]">
                <tr>
                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Date & Time
                  </th>

                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Amount
                  </th>

                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Prediction
                  </th>

                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Risk
                  </th>

                  <th className="px-6 py-5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Fraud Probability
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">

                {filteredHistory.map((item) => (

                  <tr
                    key={item.id}
                    className="group transition duration-300 hover:bg-cyan-400/[0.04]"
                  >

                    {/* Customer */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 font-semibold text-cyan-400">
                          {item.customer.charAt(0)}
                        </div>

                        <span className="font-medium text-white">
                          {item.customer}
                        </span>

                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-sm text-gray-400">
                      {item.date}
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-5 font-medium text-white">
                      {item.amount}
                    </td>

                    {/* Prediction */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          item.prediction === "Fraud"
                            ? "bg-red-500/10 text-red-400 ring-1 ring-red-500/20"
                            : "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
                        }`}
                      >
                        {item.prediction}
                      </span>

                    </td>

                    {/* Risk */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          item.risk === "High"
                            ? "bg-red-500/10 text-red-400"
                            : item.risk === "Medium"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-emerald-500/10 text-emerald-400"
                        }`}
                      >
                        {item.risk}
                      </span>

                    </td>

                    {/* Probability */}
                    <td className="px-6 py-5">
                      <span className="font-semibold text-cyan-400">
                        {item.probability}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
          </div>

          {/* Empty State */}
          {filteredHistory.length === 0 && (
            <div className="px-6 py-16 text-center">

              <div className="mb-4 text-4xl">
                🔎
              </div>

              <h3 className="text-lg font-semibold">
                No predictions found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with a different customer name.
              </p>

            </div>
          )}

        </div>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-col gap-2 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <span>
            AI-powered fraud detection history
          </span>

          <span className="text-cyan-500/70">
            Secure • Intelligent • Real-time
          </span>
        </div>

      </div>
    </main>
  );
}