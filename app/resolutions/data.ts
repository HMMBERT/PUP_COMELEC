import type { Document, DocumentsData } from "./types";

/**
 * Helper function to generate a range of document objects.
 * @param type - The document type prefix (e.g., "MEMO", "RESOL", "DECI").
 * @param titlePrefix - The prefix for the title (e.g., "Memorandum", "Resolution").
 * @param folderPrefix - The prefix for the folder path.
 * @param year - The document year.
 * @param start - The starting number of the document range.
 * @param end - The ending number of the document range.
 * @returns An array of Document objects.
 */
const generateDocuments = (
  type: string,
  titlePrefix: string,
  folderPrefix: string,
  year: number,
  start: number,
  end: number
): Document[] => {
  const docs: Document[] = [];
  for (let i = start; i <= end; i++) {
    docs.push({
      title: `${titlePrefix} No. ${i}-${year}`,
      link: `/docs/${folderPrefix}-${year}/${type}-${i}-${year}.pdf`,
    });
  }
  return docs;
};

// --- Generate Memorandums ---
const memorandums = [
  ...generateDocuments("MEMO", "Memorandum", "memo", 2022, 1, 2),
];

// --- Generate Resolutions ---
const resolutions = [
  ...generateDocuments("RESOL", "Resolution", "resolutions", 2024, 1, 31),
  ...generateDocuments("RESOL", "Resolution", "resolutions", 2023, 29, 51),
  ...generateDocuments("RESOL", "Resolution", "resolutions", 2022, 1, 48),
  ...generateDocuments("RESOL", "Resolution", "resolutions", 2021, 1, 42),
];

// --- Generate Petitions & Decisions ---
const petitions = [
  ...generateDocuments("DECI", "Decision", "decisions-and-petitions", 2023, 1, 8),
  ...generateDocuments("DECI", "Decision", "decisions-and-petitions", 2022, 1, 6),
  ...generateDocuments("DECI", "Decision", "decisions-and-petitions", 2021, 1, 18),
];


/**
 * Mock data for the document archive.
 * This object conforms to the DocumentsData interface for type safety.
 */
export const documentsData: DocumentsData = {
  memorandums,
  resolutions,
  petitions,
};