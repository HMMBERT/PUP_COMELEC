import Link from "next/link";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Upholding student democracy through free, fair, and credible elections
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                The PUP Student Council Commission on Elections is the highest policy-making body on all election matters in PUP - Main Campus, operating with full independence from all student councils and commissions.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Link
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/results"
                  >
                    <span className="relative inline-flex items-center">
                      View Official Results
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/about"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <blockquote className="text-xl italic text-gray-400">
              &ldquo;Our commitment to free, fair, and credible elections is a cornerstone of our service to the student body. We are here to empower your voice.&rdquo; <br></br>-PUP Comelec
            </blockquote>
            <p className="mt-4 text-gray-500"></p>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-white">27.35%</div>
              <div className="mt-2 text-sm text-gray-400">Voter Turnout (Last Election)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">20+</div>
              <div className="mt-2 text-sm text-gray-400">Successful Elections Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">50K+</div>
              <div className="mt-2 text-sm text-gray-400">Students Served Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}