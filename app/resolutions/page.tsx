"use client";

import { useState, lazy, Suspense } from "react";
import { FileText, Book, Gavel } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/ui/footer"; // <-- Footer component imported

// Dynamically import the PDFViewer component
const PDFViewer = lazy(() => import("@/components/PDFViewer"));

// --- Mock Data ---
const documentsData = {
  memorandums: [
    { title: "Memorandum 2024-001: General Election Guidelines", link: "/docs/memo-2024-001.pdf" },
    { title: "Memorandum 2024-002: Candidate Registration", link: "/docs/memo-2024-002.pdf" },
    { title: "Memorandum 2021-005: Logistics", link: "/docs/memo-2021-005.pdf" },
  ],
  resolutions: [
    { title: "Resolution No. 2023-A: On Election Calendar", link: "/docs/res-2023-a.pdf" },
    { title: "Resolution No. 2021-B: Campaign Guidelines", link: "/docs/res-2021-b.pdf" },
  ],
  petitions: [
    { title: "Petition Case 045 (2021): Sample Petition", link: "/docs/pet-045.pdf" },
    { title: "Decision on Case 001 (2024): Disqualification", link: "/docs/dec-001.pdf" },
  ],
};

// --- Types ---
type Document = {
  title: string;
  link: string;
};

interface ArchiveSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  documents: Document[];
  onFileSelect: (file: Document) => void;
}

/**
 * A component representing a single section of the archive (e.g., Memorandums).
 */
const ArchiveSection: React.FC<ArchiveSectionProps> = ({
  icon: Icon,
  title,
  description,
  documents,
  onFileSelect,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  // Extract years dynamically
  const years = Array.from(
    new Set(
      documents
        .map((doc) => {
          const match = doc.title.match(/\b(20\d{2})\b/);
          return match ? match[0] : "";
        })
        .filter((year) => year !== "")
    )
  ).sort((a, b) => Number(b) - Number(a));

  const filteredDocs =
    selectedYear === "All"
      ? documents
      : documents.filter((doc) => doc.title.includes(selectedYear));

  return (
    <motion.div
      className="relative bg-slate-800/40 border border-blue-800/40 rounded-2xl shadow-2xl mb-12 backdrop-blur-md overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative top-right glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="p-6 md:p-8 border-b border-blue-800/30 bg-gradient-to-r from-slate-900/80 to-blue-950/50 flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div>
          <div className="flex items-center mb-3">
            <Icon className="w-9 h-9 mr-4 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <p className="text-slate-300 max-w-2xl">{description}</p>
        </div>

        {/* Year Selector */}
        {years.length > 0 && (
          <div className="mt-4 md:mt-0">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-slate-900/70 border border-slate-600 text-slate-200 px-3 py-2 rounded-lg hover:border-blue-400 transition"
            >
              <option value="All">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Documents */}
      <ul className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => onFileSelect(doc)}
                className="w-full text-left flex items-center p-4 rounded-xl bg-slate-900/40 border border-slate-700/40 hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-300 group"
              >
                <FileText className="w-5 h-5 mr-4 text-slate-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="text-slate-200 group-hover:text-white font-medium tracking-tight">
                  {doc.title}
                </span>
              </button>
            </motion.li>
          ))
        ) : (
          <li className="text-slate-500 px-4 italic col-span-full">
            No documents available for {selectedYear}.
          </li>
        )}
      </ul>
    </motion.div>
  );
};

/**
 * Main Page
 */
export default function DocumentArchivePage() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Decorative Background SVGs */}
      <Image
        src="/images/page-illustration.svg"
        alt=""
        width={1200}
        height={1200}
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
      />
      <Image
        src="/images/footer-illustration.svg"
        alt=""
        width={1200}
        height={1200}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-grow px-4 py-20 sm:px-6 md:py-28">
        {/* Page Header */}
        <motion.div
          className="mx-auto max-w-4xl pb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent tracking-tight drop-shadow-md">
            Document Archive
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            An official repository of commission memorandums, resolutions, and judicial decisions.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="max-w-5xl mx-auto space-y-12">
          <ArchiveSection
            icon={Book}
            title="Memorandums"
            description="Official notices for internal communication. They are used to announce policies, procedures, or official directives from the commission."
            documents={documentsData.memorandums}
            onFileSelect={setSelectedDoc}
          />
          <ArchiveSection
            icon={FileText}
            title="Resolutions"
            description="Formal documents that express the official stance or decision of the commission on a specific matter after a vote. They set policies and formalize actions."
            documents={documentsData.resolutions}
            onFileSelect={setSelectedDoc}
          />
          <ArchiveSection
            icon={Gavel}
            title="Petitions & Decisions"
            description="Includes formal written complaints or requests filed with the commission (Petitions) and the subsequent official rulings or judgments issued (Decisions)."
            documents={documentsData.petitions}
            onFileSelect={setSelectedDoc}
          />
        </div>
      </div>

      {/* PDF Modal Loader */}
      {selectedDoc && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-blue-400"></div>
                <p className="mt-4 text-slate-200 font-semibold">Loading Document...</p>
              </div>
            </div>
          }
        >
          <PDFViewer
            file={selectedDoc.link}
            title={selectedDoc.title}
            onClose={() => setSelectedDoc(null)}
          />
        </Suspense>
      )}
      
      {/* Footer component rendered here */}
      <Footer />
    </div>
  );
}
