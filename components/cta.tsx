import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-50"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

       {/* Background radial gradient overlay */}
       <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-10 shadow-2xl shadow-blue-900/20">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-4xl font-extrabold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Become a Pillar of Student Democracy
              </h2>
              <p 
                className="mb-8 text-lg text-slate-400" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Step up and play a crucial role in upholding the integrity of our student elections. Join the PUP COMELEC to gain invaluable experience, develop leadership skills, and ensure every student's voice is heard.
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a
                  className="btn group mb-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:from-blue-500 hover:to-sky-400 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center px-5 py-2.5">
                    Apply Now
                    <span className="ml-1 tracking-normal text-sky-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="btn group w-full rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 shadow-lg shadow-slate-900/20 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 sm:ml-4 sm:w-auto"
                  href="#0"
                >
                   <span className="relative inline-flex items-center px-5 py-2.5">
                    Schedule Interview
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}