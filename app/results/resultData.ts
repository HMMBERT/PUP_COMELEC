// app/results/resultsData.ts

// --- Types ---
export type Candidate = {
  name: string;
  position: "President" | "Vice President" | "Councilor";
  votes: number | string; // allow "No votes yet"
  photo?: string; // ✅ add this
};


export type CollegeResults = {
  President: Candidate[];
  VicePresident: Candidate[];
  Councilors: Candidate[];
};

// --- Mock Data ---
export const resultsData: {
  skm: CollegeResults;
  colleges: Record<string, CollegeResults>;
} = {
  skm: {
    President: [
      { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
      { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
    ],
    VicePresident: [
      { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
      { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
    ],
    Councilors: Array.from({ length: 6 }, (_, i) => ({
      name: `Placeholder Councilor ${i + 1}`,
      position: "Councilor",
      votes: "No votes yet",
    })),
  },
  colleges: {
    "College of Arts and Letters": {
      President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })),
    },
    "College of Political Science and Public Administration": {
      President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })),
    },
    "College of Human Kinetics": {
      President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })),
    },
    // --- Repeat same structure for all other colleges ---
    "College of Accountancy and Finance": { President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
      
    "College of Architecture, Design and the Built Environment": { President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },

    "College of Business Administration": { President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Computer and Information Sciences": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Engineering": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Communication": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Education": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Science": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Social Sciences and Development": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "College of Tourism, Hospitality, and Transportation Management": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "Institute of Technology": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
    "Open University System": {President: [
        { name: "Placeholder Candidate 1", position: "President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "President", votes: "No votes yet" },
      ],
      VicePresident: [
        { name: "Placeholder Candidate 1", position: "Vice President", votes: "No votes yet" },
        { name: "Placeholder Candidate 2", position: "Vice President", votes: "No votes yet" },
      ],
      Councilors: Array.from({ length: 6 }, (_, i) => ({
        name: `Placeholder Councilor ${i + 1}`,
        position: "Councilor",
        votes: "No votes yet",
      })), },
  },
};
