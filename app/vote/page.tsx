"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/ui/footer";

const colleges = [
  "College of Arts and Letters (CAL)",
  "College of Political Science and Public Administration (CPSPA)",
  "College of Human Kinetics (CHK)",
  "College of Accountancy and Finance (CAF)",
  "College of Architecture, Design and the Built Environment (CADBE)",
  "College of Business Administration (CBA)",
  "College of Computer and Information Sciences (CCIS)",
  "College of Engineering (CE)",
  "College of Communication (COC)",
  "College of Education (COED)",
  "College of Science (CS)",
  "College of Social Sciences and Development (CSSD)",
  "College of Tourism, Hospitality, and Transportation Management (CTHTM)",
  "Institute of Technology (ITECH)",
  "Open University System (OUS)",
];

const qrLinks: Record<string, string> = {
  "College of Arts and Letters (CAL)": "https://tinyurl.com/CALOfficialBallot2025",
  "College of Political Science and Public Administration (CPSPA)": "https://tinyurl.com/CPSPAOfficialBallot2025",
  "College of Human Kinetics (CHK)": "https://tinyurl.com/CHKOfficialBallot2025",
  "College of Accountancy and Finance (CAF)": "https://tinyurl.com/CAFOfficialBallot2025",
  "College of Architecture, Design and the Built Environment (CADBE)": "https://tinyurl.com/CADBEOfficialBallot2025",
  "College of Business Administration (CBA)": "https://tinyurl.com/CBAOfficialBallot2025",
  "College of Computer and Information Sciences (CCIS)": "https://tinyurl.com/CCISOfficialBallot2025",
  "College of Engineering (CE)": "https://tinyurl.com/CEOfficialBallot2025",
  "College of Communication (COC)": "https://tinyurl.com/COCOfficialBallot2025",
  "College of Education (COED)": "https://tinyurl.com/COEDOfficialBallot2025",
  "College of Science (CS)": "https://tinyurl.com/CSOfficialBallot2025",
  "College of Social Sciences and Development (CSSD)": "https://tinyurl.com/CSSDOfficialBallot2025",
  "College of Tourism, Hospitality, and Transportation Management (CTHTM)": "https://tinyurl.com/CTHTMOfficialBallot2025",
  "Institute of Technology (ITECH)": "https://tinyurl.com/ITECHOfficialBallot2025",
  "Open University System (OUS)": "https://tinyurl.com/OUSOfficialBallot2025",
};

// --- ADDED DATA FROM IMAGE ---
const voteCounts: Record<string, number> = {
  "College of Arts and Letters (CAL)": 673,
  "College of Political Science and Public Administration (CPSPA)": 778,
  "College of Human Kinetics (CHK)": 11,
  "College of Accountancy and Finance (CAF)": 1793,
  "College of Architecture, Design and the Built Environment (CADBE)": 79,
  "College of Business Administration (CBA)": 476,
  "College of Computer and Information Sciences (CCIS)": 372,
  "College of Engineering (CE)": 299,
  "College of Communication (COC)": 357,
  "College of Education (COED)": 296,
  "College of Science (CS)": 365,
  "College of Social Sciences and Development (CSSD)": 566,
  "College of Tourism, Hospitality, and Transportation Management (CTHTM)": 168,
  "Institute of Technology (ITECH)": 593,
  "Open University System (OUS)": 623,
};
// -----------------------------

export default function VotePage() {
  const [selectedCollege, setSelectedCollege] = useState<string>("");

  const qrLink = selectedCollege ? qrLinks[selectedCollege] : null;
  // --- ADDED VOTE COUNT LOGIC ---
  const voteCount = selectedCollege ? voteCounts[selectedCollege] : null;
  // ------------------------------

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl flex-grow px-4 py-20 sm:px-6 text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl"
        >
          Select Your College
        </motion.h1>

        {/* --- ADDED TOTAL VOTES --- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-xl text-slate-400"
        >
          Total Voter Turnout:{" "}
          <span className="font-bold text-sky-400">7,449</span>
        </motion.p>
        {/* ------------------------- */}

        {/* Dropdown */}
        <div className="mt-12 flex justify-center">
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="w-full max-w-md rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-sky-600 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            <option value="">-- Choose College --</option>
            {colleges.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>

        {/* QR Section */}
        {qrLink && (
          <motion.div
            key={qrLink}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
            {/* --- ADDED SELECTED COLLEGE VOTES --- */}
            {voteCount !== null && (
              <div className="mb-8">
                <p className="text-lg text-slate-300">Voter Turnout:</p>
                <p className="text-6xl font-bold text-sky-500">
                  {voteCount.toLocaleString()}
                </p>
              </div>
            )}
            {/* ------------------------------------ */}

            <div className="border-t border-blue-900/50 pt-12">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                  qrLink
                )}&size=200x200&color=002266`}
                alt="College QR Code"
                width={200}
                height={200}
                className="mx-auto rounded-lg shadow-xl shadow-blue-900/40"
              />
            </div>

            <p className="mt-5 text-lg text-slate-200 font-semibold tracking-wide">
              📱 Scan to Access Your College Form
            </p>

            <motion.a
              href={qrLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-block rounded-full border border-sky-500/50 bg-sky-600/20 px-8 py-3 text-lg font-semibold text-sky-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-sky-700/30 hover:text-sky-200 hover:shadow-sky-500/30"
            >
              Go to College Form →
            </motion.a>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}