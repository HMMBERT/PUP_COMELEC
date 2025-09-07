"use client";

import { useState } from 'react';
import type { FC } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

// Import types and data from the .ts file
import { 
  type Commissioner, 
  type Deputy, 
  type Staff, 
  membersByYear, 
  staffDescriptions 
} from './members'; // Adjust the path if needed

// --- Reusable sub-components for displaying member lists ---
const CommissionersList: FC<{ members: Commissioner[] }> = ({ members }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
  >
    {members.map((member) => (
      <div
        key={member.name}
        className="rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50"
      >
        <p className="text-xl font-bold text-slate-100">{member.name}</p>
        <p className="text-sky-400">{member.title}</p>
        <p className="text-sm text-slate-400">{member.college}</p>
      </div>
    ))}
  </motion.div>
);

const DeputiesList: FC<{ members: Deputy[] }> = ({ members }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
  >
    {members.map((member) => (
      <div
        key={member.name}
        className="rounded-xl border border-blue-800/30 bg-slate-900/80 p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50"
      >
        <p className="font-semibold text-slate-100">{member.name}</p>
        {member.college && <p className="text-xs text-slate-400">{member.college}</p>}
      </div>
    ))}
  </motion.div>
);

const StaffList: FC<{ staff: Staff }> = ({ staff }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2"
  >
    {Object.entries(staff).map(([dept, members]) => (
      <div
        key={dept}
        className="rounded-lg border border-blue-800/30 bg-slate-900/80 p-4 transition-all"
      >
        <h4 className="mb-1 text-lg font-bold text-sky-400">{dept}</h4>
        {staffDescriptions[dept] && (
          <p className="mb-3 text-sm text-slate-400">{staffDescriptions[dept]}</p>
        )}
        <ul className="list-inside list-disc pl-2 text-slate-300">
          {members.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    ))}
  </motion.div>
);

// --- Main Page Component ---
export default function Page() {
  const years = Object.keys(membersByYear).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const currentMembers = membersByYear[selectedYear];

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 text-white">
      {/* Background radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      
      {/* Background Illustrations */}
       <Image
        src="/images/page-illustration.svg"
        alt="Decorative background illustration"
        width={1400}
        height={1400}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-15"
      />
      
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-grow px-4 py-20 sm:px-6 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl pb-16 text-center"
        >
          <h1 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-6xl">
            COMELEC Officials
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            A historical archive of commission members from 2021 to 2024, recognizing their service and dedication.
          </p>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center pb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 p-2 shadow-lg backdrop-blur-sm">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`btn rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Members Display */}
        <div className="space-y-12">
          {currentMembers.commissioners && (
            <section>
              <h2 className="mb-6 border-b border-blue-800/50 pb-3 text-2xl font-bold text-sky-400">
                Commissioners
              </h2>
              <CommissionersList members={currentMembers.commissioners} />
            </section>
          )}
          {currentMembers.deputies && (
            <section>
              <h2 className="mb-6 border-b border-blue-800/50 pb-3 text-2xl font-bold text-sky-400">
                Deputy Commissioners
              </h2>
              <DeputiesList members={currentMembers.deputies} />
            </section>
          )}
          {currentMembers.staff ? (
            <section>
              <h2 className="mb-6 border-b border-blue-800/50 pb-3 text-2xl font-bold text-sky-400">
                Staff
              </h2>
              <StaffList staff={currentMembers.staff} />
            </section>
          ) : (
            <p className="mt-8 text-center italic text-slate-500">
              No staff members are listed for this year.
            </p>
          )}
        </div>
      </main>
      
      <Footer />
    </section>
  );
}