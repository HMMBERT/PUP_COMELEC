"use client";

import Image from "next/image";
import Spotlight from "@/components/spotlight";
import { useState } from "react";

export default function Workflows() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The PUP SC COMELEC
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Core Values and Principles
            </h2>
            <p className="text-lg text-indigo-200/65">
              Simple and elegant interface to start collaborating with your team
              in minutes. It seamlessly integrates with your code and your
              favorite programming languages.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..." href="#0">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                <Image
                  className="inline-flex"
                  src="/images/mission.png"
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Mission
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    To serve the students at the Polytechnic University of the Philippines by upholding a free, fair, and credible electoral process, ensuring that the true will of the student body is accurately and transparently reflected.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..." href="#0">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                <Image
                  className="inline-flex"
                  src="/images/vision.png"
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Vision
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    To be the bastion of student democracy, empowering every student to participate in the electoral process that is impartial, transparent, and grounded in integrity.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 (Objectives with collapse) */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..." href="#0">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                <Image
                  className="inline-flex"
                  src="/images/objectives.png"
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Objectives
                      </span>
                    </span>
                  </div>

                  {/* Collapsible text */}
                  <p
                    className={`text-indigo-200/65 transition-all duration-500 ${
                      isExpanded ? "max-h-full" : "max-h-40 overflow-hidden"
                    }`}
                  >
                    1: To act as the ultimate authority on all electoral matters, formulating and enforcing policies in line with the established legal framework.

                    <br /><br />
                    2:  To serve as the primary interpreter and enforcer of the PUP Student Council Constitution and the Student Council Election Code, ensuring strict adherence to all rules and regulations.
                    <br /><br />
                    3: To safeguard the right of every bona fide student to vote without fear of reprisal, discrimination, or coercion.
                    <br /><br />
                    4: To make the electoral process accessible, secure, and understandable to all students, from voter registration to the casting of ballots.
                    <br /><br />
                    5: To professionally and efficiently manage all elections, ensuring the highest level of quality, accuracy, and reliability in every stage of the process.
                    <br /><br />
                    6: To continuously evaluate and refine our processes and procedures, seeking innovative ways to enhance the effectiveness and integrity of the electoral system.
                  </p>

                  {/* Toggle button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsExpanded(!isExpanded);
                    }}
                    className="mt-4 text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    {isExpanded ? "Show Less ▲" : "Show More ▼"}
                  </button>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
