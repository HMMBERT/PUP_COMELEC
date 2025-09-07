"use client";

import { useState, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { resultsData, Candidate } from "./resultData";
import Footer from "@/components/ui/footer";

// --- Placeholder for image path ---
const placeholder = "/images/candidatePlaceholder.png";

// --- Candidate List Component ---
const CandidateList = ({ title, candidates }: { title: string; candidates: Candidate[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <h3 className="mb-6 border-b border-blue-800/50 pb-3 text-2xl font-bold text-sky-400">
      {title}
    </h3>
    <div className="space-y-4">
      {candidates.map((c, idx) => (
        <motion.div
          key={c.name}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className={`flex items-center justify-between rounded-xl border p-4 shadow-sm transition-all duration-300 ${
            idx === 0
              ? "border-sky-500/50 bg-gradient-to-r from-sky-600/20 to-slate-900/20 shadow-sky-600/20"
              : "border-slate-800 bg-slate-900/50 hover:border-sky-500/50"
          }`}
        >
          <div className="flex items-center gap-4">
            <Image
              src={c.photo || placeholder}
              alt={`Photo of ${c.name}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-md border border-slate-700 object-cover shadow-sm"
            />
            <div>
              <span className="block font-medium text-slate-100">{c.name}</span>
              <span className="text-xs text-slate-400">{c.position}</span>
            </div>
          </div>
          <span className="font-mono text-slate-300">{c.votes}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// --- Main Page ---
export default function ResultsPage() {
  const [selectedScope, setSelectedScope] = useState<"SKM" | string>("SKM");
  const colleges = Object.keys(resultsData.colleges);

  const currentResults =
    selectedScope === "SKM" ? resultsData.skm : resultsData.colleges[selectedScope];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 text-white">
       <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-5xl flex-grow px-4 py-16 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <h1 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-6xl">
            Partial & Unofficial Results
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            {selectedScope === "SKM"
              ? "Sentral na Konseho ng Mag-aaral (SKM)"
              : `${selectedScope}`}
          </p>
        </motion.div>

        {/* Selector */}
        <div className="mb-12 flex justify-center">
          <select
            value={selectedScope}
            onChange={(e) => setSelectedScope(e.target.value)}
            className="w-full max-w-md rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-sky-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            <option value="SKM">Sentral na Konseho ng Mag-aaral (SKM)</option>
            {colleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>

        {/* Results */}
        <div className="rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/60 to-blue-950/30 p-8 shadow-2xl shadow-blue-900/20 backdrop-blur-xl md:p-12">
          {currentResults.President && <CandidateList title="President" candidates={currentResults.President} />}
          {currentResults.VicePresident && <CandidateList title="Vice President" candidates={currentResults.VicePresident} />}
          {currentResults.Councilors && <CandidateList title="Councilors" candidates={currentResults.Councilors} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}