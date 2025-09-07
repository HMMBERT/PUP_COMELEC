"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-5 text-5xl font-extrabold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              Upholding student democracy through free, fair, and credible
              elections
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-slate-400"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                The PUP Student Council Commission on Elections is the highest
                policy-making body on all election matters in PUP - Main Campus,
                operating with full independence from all student councils and
                commissions.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Link
                  className="btn group mb-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:to-sky-400 sm:mb-0 sm:w-auto"
                  href="/results"
                >
                  <span className="relative inline-flex items-center px-5 py-2.5">
                    View Official Results
                    <span className="ml-1 tracking-normal text-sky-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </Link>
                <Link
                  className="btn group w-full rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 shadow-lg shadow-slate-900/20 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 sm:ml-4 sm:w-auto"
                  href="/about"
                >
                  <span className="relative inline-flex items-center px-5 py-2.5">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div
            className="mx-auto mt-12 max-w-3xl text-center md:mt-16"
            data-aos="fade-up"
          >
            <blockquote className="text-xl italic text-slate-300">
              &ldquo;Our commitment to free, fair, and credible elections is a
              cornerstone of our service to the student body. We are here to
              empower your voice.&rdquo;
            </blockquote>
            <p className="mt-4 font-medium text-slate-500">- PUP COMELEC</p>
          </div>

          {/* Stats Section */}
          <div
            className="mx-auto mt-16 grid max-w-4xl gap-8 border-t border-blue-900/50 pt-12 md:grid-cols-3 md:pt-16"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
                27.35%
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Voter Turnout (Last Election)
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
                20+
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Successful Elections Conducted
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
                50K+
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Students Served Annually
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
