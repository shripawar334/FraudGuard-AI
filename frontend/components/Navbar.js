"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Predict", href: "/predict" },
    { name: "History", href: "/history" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-400/10 bg-[#050b14]/80 backdrop-blur-xl">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="mx-auto flex h-[78px] w-[92%] max-w-[1200px] items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-xl border border-slate-700/30 bg-[#0d1b2a]/60 p-1.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-blue-500/10 hover:text-white"
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-4" />
            </Link>
          ))}
        </div>

        {/* Analyze Button */}
        <Link
          href="/predict"
          className="hidden items-center gap-2 rounded-xl border border-cyan-400/20 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/30 md:flex"
        >
          Analyze
          <span className="text-lg text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700/40 bg-[#0d1b2a]/70 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-cyan-400 transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 rounded-full bg-cyan-400 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 rounded-full bg-cyan-400 transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-cyan-400/5 bg-[#050b14]/95 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-[92%] max-w-[1200px] flex-col gap-2 py-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-slate-700/20 bg-[#0d1b2a]/50 px-4 py-3 text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:bg-blue-500/10 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/predict"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-blue-600/20"
          >
            Analyze Transaction →
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;