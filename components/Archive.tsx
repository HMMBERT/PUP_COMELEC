"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the PDFViewer component to avoid SSR issues
const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
});

// Document data
const documents = [
  { title: "Implementing Rules & Regulations", year: 2021, link: "/docs/irr-2021.pdf", category: 2021 },
  { title: "Implementing Rules & Regulations", year: 2022, link: "/docs/irr-2022.pdf", category: 2022 },
  { title: "Implementing Rules & Regulations", year: 2023, link: "/docs/irr-2023.pdf", category: 2023 },
  { title: "Implementing Rules & Regulations", year: 2024, link: "/docs/irr-2024.pdf", category: 2024 },
  { title: "Implementing Rules & Regulations", year: 2025, link: "/docs/irr-2025.pdf", category: 2025 },
  { title: "Election Code", year: 2021, link: "/docs/election-code-2021.pdf", category: 2021 },
  { title: "Election Code", year: 2022, link: "/docs/election-code-2022.pdf", category: 2022 },
  { title: "Election Code", year: 2023, link: "/docs/election-code-2023.pdf", category: 2023 },
  { title: "Election Code", year: 2024, link: "/docs/election-code-2024.pdf", category: 2024 },
  { title: "Election Code", year: 2025, link: "/docs/election-code-2025.pdf", category: 2025 },
];

const years = [2021, 2022, 2023, 2024, 2025];

export default function Documents() {
  const [category, setCategory] = useState<number>(0); // 0 for "View All"
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; link: string } | null>(null);

  const filteredDocuments = documents.filter(doc => category === 0 || doc.category === category);

  return (
    <section className="relative overflow-hidden bg-slate-950">
       {/* Background radial gradient overlay */}
       <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-blue-900/50 py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
             <div className="mb-4 inline-flex bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-medium text-transparent">
              Official COMELEC Resources
            </div>
            <h2 className="animate-[gradient_5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.sky.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-4xl font-extrabold text-transparent md:text-5xl">
              Document Archive
            </h2>
            <p className="text-lg text-slate-400">
              Access the official Election Code and Implementing Rules and Regulations (IRR) for each academic year.
            </p>
          </div>

          {/* Year Filter Buttons */}
          <div className="flex justify-center pb-12 md:pb-16">
            <div className="inline-flex flex-wrap justify-center gap-3">
              <button
                className={`btn rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  category === 0
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30"
                    : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800"
                }`}
                onClick={() => setCategory(0)}
              >
                View All
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  className={`btn rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                    category === year
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30"
                      : "border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800"
                  }`}
                  onClick={() => setCategory(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Document Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredDocuments.map((doc, index) => (
              <article
                key={index}
                className="flex h-full flex-col rounded-2xl border border-blue-800/30 bg-gradient-to-br from-slate-900/80 to-blue-950/40 p-6 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50"
              >
                <div className="flex-grow">
                  <h3 className="mb-2 text-xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    {doc.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">Academic Year: {doc.year}</p>
                </div>
                <button
                  onClick={() => setSelectedDoc({ title: `${doc.title} (${doc.year})`, link: doc.link })}
                  className="group mt-4 inline-flex items-center text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
                >
                  Open Document
                  <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5">
                      -&gt;
                  </span>
                </button>
              </article>
            ))}
          </div>

          {/* PDF Modal */}
          {selectedDoc && (
            <PDFViewer
              file={selectedDoc.link}
              title={selectedDoc.title}
              onClose={() => setSelectedDoc(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
