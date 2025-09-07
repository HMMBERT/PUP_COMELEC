// src/app/archive/types.ts

import type { ElementType } from "react";

/**
 * Represents a single document with a title and a link to its file.
 */
export type Document = {
  title: string;
  link: string;
};

/**
 * Defines the props for the ArchiveSection component.
 */
export interface ArchiveSectionProps {
  icon: ElementType; // Allows passing component references like `Book` or `FileText`
  title: string;
  description: string;
  documents: Document[];
  onFileSelect: (file: Document) => void;
}

/**
 * Defines the structure of the mock documents data object.
 */
export interface DocumentsData {
  memorandums: Document[];
  resolutions: Document[];
  petitions: Document[];
}