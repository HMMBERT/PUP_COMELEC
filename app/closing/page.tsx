"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/ui/footer"; // Assuming footer is in this location

// --- Main Page ---
export default function PrecinctsClosedPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 text-white">
      {/* Background Gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-grow flex-col items-center justify-center px-4 py-16 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-2xl text-center"
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              <svg
                className="h-20 w-20 text-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </motion.div>
          </div>

          {/* Header */}
          <h1 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-6xl">
            Precincts Are Now Closed
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-slate-400">
            Thank you for participating in the election.
          </p>
          <p className="mt-2 text-lg text-slate-400">
            Partial and unofficial results will be posted as they become available.
          </p>

          {/* Optional: Link back to results */}
          {/* You can add a link here if you want to guide users */}
          {/* <a
            href="/results" // Change this to your results page path
            className="mt-10 inline-block rounded-full bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-sky-500 hover:scale-105 active:scale-95"
          >
            Check for Results
          </a> */}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}