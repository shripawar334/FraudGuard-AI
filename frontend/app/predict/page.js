"use client";

import { useState } from "react";

const API_URL = "https://fraudguard-ai-production.up.railway.app/predict";

export default function Predict() {
  const [formData, setFormData] = useState({
    customer_name: "",

    customer_age: "",
    account_age_days: "",
    customer_gender: "",
    customer_income: "",
    account_balance: "",

    transaction_amount: "",
    transaction_hour: "",
    transaction_day: "",
    transaction_type: "",
    merchant_category: "",
    payment_method: "",
    transaction_location: "",

    is_international_transaction: "",
    device_type: "",
    device_trust_score: "",
    distance_from_home_km: "",

    transactions_last_24h: "",
    transactions_last_7d: "",
    avg_transaction_amount: "",
    previous_transaction_amount: "",
    time_since_last_transaction_min: "",
    failed_transaction_count_24h: "",

    new_device_used: "",
    location_mismatch: "",
    unusual_transaction_time: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setResult(null);
  setError("");

  try {
    // Customer name is only for frontend/history.
    // It is NOT sent to the ML model.

    const payload = {
      customer_age: Number(formData.customer_age),
      account_age_days: Number(formData.account_age_days),
      customer_gender: formData.customer_gender,
      customer_income: Number(formData.customer_income),
      account_balance: Number(formData.account_balance),
      transaction_amount: Number(formData.transaction_amount),
      transaction_hour: Number(formData.transaction_hour),
      transaction_day: formData.transaction_day,
      transaction_type: formData.transaction_type,
      merchant_category: formData.merchant_category,
      payment_method: formData.payment_method,
      transaction_location: formData.transaction_location,

      // Send Yes/No as strings because FastAPI schema expects strings
      is_international_transaction:
        formData.is_international_transaction,

      device_type: formData.device_type,
      device_trust_score: Number(formData.device_trust_score),
      distance_from_home_km: Number(formData.distance_from_home_km),
      transactions_last_24h: Number(formData.transactions_last_24h),
      transactions_last_7d: Number(formData.transactions_last_7d),

      avg_transaction_amount: Number(
        formData.avg_transaction_amount
      ),

      previous_transaction_amount: Number(
        formData.previous_transaction_amount
      ),

      time_since_last_transaction_min: Number(
        formData.time_since_last_transaction_min
      ),

      failed_transaction_count_24h: Number(
        formData.failed_transaction_count_24h
      ),

      // Send Yes/No as strings
      new_device_used: formData.new_device_used,
      location_mismatch: formData.location_mismatch,
      unusual_transaction_time:
        formData.unusual_transaction_time,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      throw new Error(
        errorData?.detail
          ? JSON.stringify(errorData.detail)
          : "Prediction request failed."
      );
    }

    const data = await response.json();

    // Add customer name only on frontend
    setResult({
      ...data,
      customer_name: formData.customer_name,
    });

  } catch (err) {
    console.error(err);

    setError(
      "Unable to connect with the prediction server. Make sure FastAPI is running."
    );
  } finally {
    setLoading(false);
  }
};

  const resetForm = () => {
    setFormData({
      customer_name: "",

      customer_age: "",
      account_age_days: "",
      customer_gender: "",
      customer_income: "",
      account_balance: "",

      transaction_amount: "",
      transaction_hour: "",
      transaction_day: "",
      transaction_type: "",
      merchant_category: "",
      payment_method: "",
      transaction_location: "",

      is_international_transaction: "",
      device_type: "",
      device_trust_score: "",
      distance_from_home_km: "",

      transactions_last_24h: "",
      transactions_last_7d: "",
      avg_transaction_amount: "",
      previous_transaction_amount: "",
      time_since_last_transaction_min: "",
      failed_transaction_count_24h: "",

      new_device_used: "",
      location_mismatch: "",
      unusual_transaction_time: "",
    });

    setResult(null);
    setError("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[130px]" />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1100px] py-16">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mt-8">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium tracking-wider text-cyan-300">
              AI TRANSACTION ANALYSIS
            </span>

          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">

            Analyze Your{" "}

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Transaction
            </span>

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Enter the transaction details below and let our machine
            learning model assess the potential fraud risk.
          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-7"
        >

          {/* CUSTOMER INFORMATION */}
          <section className="rounded-3xl border border-slate-800/60 bg-[#0b1624]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

            <SectionHeader
              number="01"
              title="Customer Information"
              description="Basic customer and account details"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <Input
                label="Customer Name"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
              />

              <Input
                label="Customer Age"
                name="customer_age"
                type="number"
                value={formData.customer_age}
                onChange={handleChange}
                placeholder="e.g. 35"
              />

              <Select
                label="Gender"
                name="customer_gender"
                value={formData.customer_gender}
                onChange={handleChange}
                options={["Male", "Female", "Other"]}
              />

              <Input
                label="Account Age (Days)"
                name="account_age_days"
                type="number"
                value={formData.account_age_days}
                onChange={handleChange}
                placeholder="e.g. 1200"
              />

              <Input
                label="Customer Income"
                name="customer_income"
                type="number"
                value={formData.customer_income}
                onChange={handleChange}
                placeholder="e.g. 75000"
              />

              <Input
                label="Account Balance"
                name="account_balance"
                type="number"
                value={formData.account_balance}
                onChange={handleChange}
                placeholder="e.g. 150000"
              />

            </div>

          </section>


          {/* TRANSACTION DETAILS */}
          <section className="rounded-3xl border border-slate-800/60 bg-[#0b1624]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

            <SectionHeader
              number="02"
              title="Transaction Details"
              description="Information about the current transaction"
              cyan
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <Input
                label="Transaction Amount"
                name="transaction_amount"
                type="number"
                step="0.01"
                value={formData.transaction_amount}
                onChange={handleChange}
                placeholder="e.g. 2500"
              />

              <Input
                label="Transaction Hour"
                name="transaction_hour"
                type="number"
                min="0"
                max="23"
                value={formData.transaction_hour}
                onChange={handleChange}
                placeholder="0 - 23"
              />

              <Select
                label="Transaction Day"
                name="transaction_day"
                value={formData.transaction_day}
                onChange={handleChange}
                options={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ]}
              />

              <Select
                label="Transaction Type"
                name="transaction_type"
                value={formData.transaction_type}
                onChange={handleChange}
                options={[
                  "Purchase",
                  "Transfer",
                  "Withdrawal",
                  "Deposit",
                  "Payment",
                ]}
              />

              <Select
                label="Merchant Category"
                name="merchant_category"
                value={formData.merchant_category}
                onChange={handleChange}
                options={[
                  "Grocery",
                  "Electronics",
                  "Clothing",
                  "Travel",
                  "Entertainment",
                  "Restaurant",
                  "Healthcare",
                  "Fuel",
                  "Other",
                ]}
              />

              <Select
                label="Payment Method"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                options={[
                  "Credit Card",
                  "Debit Card",
                  "UPI",
                  "Cash",
                ]}
              />

              <Select
                label="Transaction Location"
                name="transaction_location"
                value={formData.transaction_location}
                onChange={handleChange}
                options={[
                  "Pune",
                  "Mumbai",
                  "Delhi",
                  "Bangalore",
                  "Hyderabad",
                  "Chennai",
                  "Kolkata",
                  "Ahmedabad",
                  "Jaipur",
                  "Other",
                ]}
              />

            </div>

          </section>


          {/* DEVICE & SECURITY */}
          <section className="rounded-3xl border border-slate-800/60 bg-[#0b1624]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

            <SectionHeader
              number="03"
              title="Device & Security"
              description="Device and transaction security indicators"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <Select
                label="International Transaction"
                name="is_international_transaction"
                value={formData.is_international_transaction}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

              <Select
                label="Device Type"
                name="device_type"
                value={formData.device_type}
                onChange={handleChange}
                options={[
                  "Mobile",
                  "Desktop",
                  "Tablet",
                ]}
              />

              <Input
                label="Device Trust Score"
                name="device_trust_score"
                type="number"
                step="0.01"
                value={formData.device_trust_score}
                onChange={handleChange}
                placeholder="e.g. 85.5"
              />

              <Input
                label="Distance From Home (km)"
                name="distance_from_home_km"
                type="number"
                step="0.1"
                value={formData.distance_from_home_km}
                onChange={handleChange}
                placeholder="e.g. 3.5"
              />

              <Select
                label="New Device Used"
                name="new_device_used"
                value={formData.new_device_used}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

              <Select
                label="Location Mismatch"
                name="location_mismatch"
                value={formData.location_mismatch}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

              <Select
                label="Unusual Transaction Time"
                name="unusual_transaction_time"
                value={formData.unusual_transaction_time}
                onChange={handleChange}
                options={["Yes", "No"]}
              />

            </div>

          </section>


          {/* TRANSACTION BEHAVIOR */}
          <section className="rounded-3xl border border-slate-800/60 bg-[#0b1624]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

            <SectionHeader
              number="04"
              title="Transaction Behavior"
              description="Recent transaction activity and behavior"
              cyan
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <Input
                label="Transactions Last 24h"
                name="transactions_last_24h"
                type="number"
                value={formData.transactions_last_24h}
                onChange={handleChange}
                placeholder="e.g. 4"
              />

              <Input
                label="Transactions Last 7 Days"
                name="transactions_last_7d"
                type="number"
                value={formData.transactions_last_7d}
                onChange={handleChange}
                placeholder="e.g. 15"
              />

              <Input
                label="Average Transaction Amount"
                name="avg_transaction_amount"
                type="number"
                step="0.01"
                value={formData.avg_transaction_amount}
                onChange={handleChange}
                placeholder="e.g. 3000"
              />

              <Input
                label="Previous Transaction Amount"
                name="previous_transaction_amount"
                type="number"
                step="0.01"
                value={formData.previous_transaction_amount}
                onChange={handleChange}
                placeholder="e.g. 2800"
              />

              <Input
                label="Time Since Last Transaction (min)"
                name="time_since_last_transaction_min"
                type="number"
                value={formData.time_since_last_transaction_min}
                onChange={handleChange}
                placeholder="e.g. 180"
              />

              <Input
                label="Failed Transactions (24h)"
                name="failed_transaction_count_24h"
                type="number"
                value={formData.failed_transaction_count_24h}
                onChange={handleChange}
                placeholder="e.g. 0"
              />

            </div>

          </section>


          {/* ERROR */}
          {error && (
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-4 text-center text-sm text-red-300">
              ⚠ {error}
            </div>
          )}


          {/* BUTTON */}
          <div className="flex justify-center pt-5">

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex min-w-[230px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >

              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Transaction

                  <span className="text-xl text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}

            </button>

          </div>

          <p className="text-center text-xs text-slate-600">
            Your transaction is analyzed using our machine learning
            prediction system.
          </p>

        </form>


        {/* RESULT */}
        {result && (
          <ResultCard
            result={result}
            onReset={resetForm}
          />
        )}

      </div>

    </main>
  );
}


/* =====================================================
   SECTION HEADER
===================================================== */

function SectionHeader({
  number,
  title,
  description,
  cyan = false,
}) {
  return (
    <div className="mb-7 flex items-center gap-4">

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl font-bold ${
          cyan
            ? "bg-cyan-400/10 text-cyan-400"
            : "bg-blue-500/10 text-blue-400"
        }`}
      >
        {number}
      </div>

      <div>
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

    </div>
  );
}


/* =====================================================
   INPUT
===================================================== */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  min,
  max,
  step,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        required
        className="w-full rounded-xl border border-slate-700/60 bg-[#07111f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-[#0b1624] focus:ring-2 focus:ring-cyan-400/10"
      />

    </div>
  );
}


/* =====================================================
   SELECT
===================================================== */

function Select({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full appearance-none rounded-xl border border-slate-700/60 bg-[#07111f] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-[#0b1624] focus:ring-2 focus:ring-cyan-400/10"
      >

        <option value="" disabled>
          Select {label}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#07111f]"
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}


/* =====================================================
   RESULT CARD
===================================================== */

function ResultCard({ result, onReset }) {
  const isFraud = result.prediction === "Fraud";

  const riskStyles = {
    Low: {
      box: "border-emerald-400/20 bg-emerald-400/5",
      icon: "bg-emerald-400/10 text-emerald-400",
      text: "text-emerald-400",
    },
    Medium: {
      box: "border-yellow-400/20 bg-yellow-400/5",
      icon: "bg-yellow-400/10 text-yellow-400",
      text: "text-yellow-400",
    },
    High: {
      box: "border-red-400/20 bg-red-400/5",
      icon: "bg-red-400/10 text-red-400",
      text: "text-red-400",
    },
  };

  const style = riskStyles[result.risk_level] || riskStyles.Low;

  return (
    <section className="mt-14 animate-[fadeIn_0.5s_ease-out]">

      <div className="mb-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Analysis Complete
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Transaction Result
        </h2>

      </div>


      <div
        className={`rounded-3xl border p-7 shadow-2xl backdrop-blur-xl sm:p-10 ${style.box}`}
      >

        {/* Customer */}
        <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Customer
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {result.customer_name}
            </p>
          </div>

          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}>
            {isFraud ? "⚠" : "✓"}
          </div>

        </div>


        {/* Main Result */}
        <div className="text-center">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Prediction
          </p>

          <h3
            className={`mt-3 text-4xl font-extrabold sm:text-5xl ${style.text}`}
          >
            {result.prediction}
          </h3>

          <p className="mt-3 text-sm text-slate-400">
            {isFraud
              ? "Suspicious transaction detected by the model."
              : "Transaction appears to be legitimate."
            }
          </p>

        </div>


        {/* Probability */}
        <div className="mx-auto mt-10 max-w-lg">

          <div className="mb-3 flex justify-between text-sm">

            <span className="text-slate-400">
              Fraud Probability
            </span>

            <span className={`font-bold ${style.text}`}>
              {result.fraud_probability_percent}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                result.risk_level === "High"
                  ? "bg-red-400"
                  : result.risk_level === "Medium"
                  ? "bg-yellow-400"
                  : "bg-emerald-400"
              }`}
              style={{
                width: `${Math.min(
                  result.fraud_probability_percent,
                  100
                )}%`,
              }}
            />

          </div>

        </div>


        {/* Risk */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">

          <span className="text-sm text-slate-500">
            Risk Level:
          </span>

          <span className={`font-bold ${style.text}`}>
            {result.risk_level}
          </span>

        </div>


        {/* Buttons */}
        <div className="mt-9 flex justify-center">

          <button
            onClick={onReset}
            className="rounded-xl border border-slate-700/60 bg-[#07111f] px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-white"
          >
            Analyze Another Transaction
          </button>

        </div>

      </div>

    </section>
  );
}