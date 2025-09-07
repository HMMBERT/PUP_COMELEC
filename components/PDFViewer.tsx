"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Corrected CSS import paths
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Sets up the PDF.js worker to process the PDF file in the background.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Defines the props the component will accept for type safety.
interface PDFViewerProps {
  file: string;
  onClose: () => void;
  title: string;
}

export default function PDFViewer({ file, onClose, title }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  // This function is called once the PDF is successfully loaded.
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div
        className="bg-gray-900 p-4 sm:p-6 rounded-xl max-w-4xl w-full h-[90vh] overflow-y-auto relative select-none"
        onContextMenu={(e) => e.preventDefault()} // Disables right-clicking the viewer
      >
        {/* Header with Title and Close Button */}
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10 py-2 px-2 mb-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-indigo-200 truncate pr-4">{title}</h3>
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            aria-label="Close PDF viewer"
          >
            ✕
          </button>
        </div>

        {/* PDF Document Renderer */}
        <div className="flex justify-center">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false} // Set to true if you want users to copy text
                className="mb-4 shadow-lg"
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}