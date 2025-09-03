"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import { Document, Page, pdfjs } from "react-pdf";


// ✅ Worker setup for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const documents = [
  
  // IRRs first
  { title: "Implementing Rules & Regulations 2021", year: 2021, link: "/api/docs/irr-2021.pdf", categories: [1] },
  { title: "Implementing Rules & Regulations 2022", year: 2022, link: "/api/docs/irr-2022.pdf", categories: [2] },
  { title: "Implementing Rules & Regulations 2023", year: 2023, link: "/api/docs/irr-2023.pdf", categories: [3] },
  { title: "Implementing Rules & Regulations 2024", year: 2024, link: "/api/docs/irr-2024.pdf", categories: [4] },
  { title: "Implementing Rules & Regulations 2025", year: 2025, link: "/api/docs/irr-2025.pdf", categories: [5] },

  // Election Codes next
  { title: "Election Code 2021", year: 2021, link: "/api/docs/election-code-2021.pdf", categories: [1] },
  { title: "Election Code 2022", year: 2022, link: "/api/docs/election-code-2022.pdf", categories: [2] },
  { title: "Election Code 2023", year: 2023, link: "/api/docs/election-code-2023.pdf", categories: [3] },
  { title: "Election Code 2024", year: 2024, link: "/api/docs/election-code-2024.pdf", categories: [4] },
  { title: "Election Code 2025", year: 2025, link: "/api/docs/election-code-2025.pdf", categories: [5] },
];

export default function Documents() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(0);
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; link: string } | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-200">
            Election Code & IRR (2021–2025)
          </h2>
          <p className="text-lg text-indigo-200/65">
            Browse and access official election codes and implementing rules from 2021 to 2025.
          </p>
        </div>

        {/* Year Buttons */}
        <div className="flex justify-center pb-12 md:pb-16">
          <div className="inline-flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((yr) => (
              <button
                key={yr}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === yr
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setCategory(yr)}
              >
                {2020 + yr}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 0
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setCategory(0)}
            >
              View All
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {documents.map((doc, index) => {
            const isHighlighted =
              category === 0 || doc.categories.includes(category);
            return (
              <article
                key={index}
                className={`rounded-2xl p-5 backdrop-blur-sm transition 
                ${
                  isHighlighted
                    ? "bg-gray-800/80 border border-indigo-500 shadow-lg"
                    : "bg-gray-800/40 opacity-70"
                }`}
              >
                <h3 className="text-lg font-semibold text-indigo-200">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-400">Year: {doc.year}</p>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="mt-3 inline-block text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Open PDF
                </button>
              </article>
            );
          })}
        </div>

        {/* PDF Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full h-[80vh] overflow-y-auto relative select-none"
              onContextMenu={(e) => e.preventDefault()} // disable right-click
            >
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white rounded-full px-3 py-1"
              >
                ✕
              </button>
              <h3 className="text-xl font-semibold text-indigo-200 mb-4">{selectedDoc.title}</h3>

              <Document
                file={selectedDoc.link}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from(new Array(numPages), (_, i) => (
                  <Page
                    key={`page_${i + 1}`}
                    pageNumber={i + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false} // disables text copying
                  />
                ))}
              </Document>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
