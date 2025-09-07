"use client";

import Image from "next/image";
import Spotlight from "@/components/spotlight";
import { useState } from "react";

export default function Workflows() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-slate-950 to-slate-950"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="mb-4 inline-flex bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-medium text-transparent">
              The PUP SC COMELEC
            </div>
            <h2 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-4xl font-extrabold text-transparent md:text-5xl">
              Core Values and Principles
            </h2>
            <p className="text-lg text-slate-400">
              Upholding democracy and integrity, we are dedicated to a fair,
              transparent, and credible electoral process that reflects the true
              will of the student body.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3">
            {/* Card 1: Mission */}
            <div className="flex h-full flex-col rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50">
              <Image
                className="mb-4 self-center"
                src="/images/mission.png"
                width={350}
                height={288}
                alt="Mission illustration"
              />
              <div className="mb-3">
                <span className="inline-flex rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Mission
                  </span>
                </span>
              </div>
              <p className="text-slate-400">
                To serve the students at the Polytechnic University of the
                Philippines by upholding a free, fair, and credible electoral
                process, ensuring the true will of the student body is
                accurately and transparently reflected.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="flex h-full flex-col rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50">
              <Image
                className="mb-4 self-center"
                src="/images/vision.png"
                width={350}
                height={288}
                alt="Vision illustration"
              />
              <div className="mb-3">
                <span className="inline-flex rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Vision
                  </span>
                </span>
              </div>
              <p className="text-slate-400">
                To be the bastion of student democracy, empowering every
                student to participate in an electoral process that is
                impartial, transparent, and grounded in integrity.
              </p>
            </div>

            {/* Card 3: Objectives */}
            <div className="flex h-full flex-col rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50">
              <Image
                className="mb-4 self-center"
                src="/images/objectives.png"
                width={350}
                height={288}
                alt="Objectives illustration"
              />
              <div className="mb-3">
                <span className="inline-flex rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Objectives
                  </span>
                </span>
              </div>

              <div
                className={`text-slate-400 transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-[1000px]" : "max-h-40 overflow-hidden"
                }`}
              >
                <p>
                  1. To act as the ultimate authority on all electoral matters,
                  formulating and enforcing policies in line with the
                  established legal framework.
                  <br />
                  <br />
                  2. To serve as the primary interpreter and enforcer of the
                  PUP Student Council Constitution and the Student Council
                  Election Code.
                  <br />
                  <br />
                  3. To safeguard the right of every bona fide student to vote
                  without fear of reprisal, discrimination, or coercion.
                </p>
                {isExpanded && (
                   <p className="mt-4">
                     4. To make the electoral process accessible, secure, and
                    understandable to all students.
                    <br />
                    <br />
                    5. To professionally and efficiently manage all elections,
                    ensuring the highest level of quality and accuracy.
                    <br />
                    <br />
                    6. To continuously evaluate and refine our processes,
                    seeking innovative ways to enhance the electoral system.
                  </p>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
                className="mt-4 self-start text-sm font-medium text-sky-400 hover:text-sky-300"
              >
                {isExpanded ? "Show Less ▲" : "Show More ▼"}
              </button>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}