
// --- Type Definitions for our Data ---
export interface Commissioner {
  name: string;
  title: string;
  college: string;
}

export interface Deputy {
  name: string;
  college: string;
}

export interface Staff {
  [key: string]: string[];
}

export interface MemberData {
  commissioners: Commissioner[] | null;
  deputies: Deputy[] | null;
  staff: Staff | null;
}

// --- Data extracted and structured from your .docx files ---
export const membersByYear: { [key: string]: MemberData } = {
  2024: {
  commissioners: [
    { name: "GAD THOMAS DEUEL S. MENDIOLA", title: "Chairperson", college: "College of Arts and Letters" },
    { name: "MARVIE ANGELINE B. DAPO", title: "Vice Chairperson", college: "College of Political Science and Public Administration" },
    { name: "KRISTAL ANDREA M. MARQUEZ", title: "Secretary-General", college: "College of Human Kinetics" },
    { name: "MELWEL ARCEL C. GORUMBA", title: "Treasurer", college: "College of Accountancy and Finance" },
    { name: "JERWIN P. MANABAT", title: "Commissioner", college: "College of Architecture, Design and the Built Environment" },
    { name: "NICOLE A. CABRAL", title: "Commissioner", college: "College of Business Administration" },
    { name: "LUKE MARK P. LEONA", title: "Commissioner", college: "College of Computer and Information Sciences" },
    { name: "CARLOS JAIRO L. TIAGA", title: "Commissioner", college: "College of Engineering" },
    { name: "GABRIEL R. GONZALES", title: "Commissioner", college: "College of Communication" },
    { name: "ABIGAIL P. PRIETO", title: "Commissioner", college: "College of Communication" },
    { name: "GENER AUGUST S. LINTAG", title: "Commissioner", college: "College of Education" },
    { name: "RHOANNE ALESIE S. JUANSON", title: "Commissioner", college: "College of Science" },
    { name: "PAUL JANRY D. ROLUSTA", title: "Commissioner", college: "College of Social Sciences and Development" },
    { name: "JUAN MIGUEL G. MORADO", title: "Commissioner", college: "College of Tourism, Hospitality, and Transportation Management" },
    { name: "John Albert D. Rebancos", title: "Commissioner", college: "Institute of Technology" },
    { name: "Lacherry Be. May-Anne S. Ramel", title: "Commissioner", college: "Open University System" },
  ],
  deputies: [
    { name: "Yuki Mei L. Carlos", college: "College of Architecture, Design and the Built Environment" },
    { name: "Kyle P. Balisi", college: "College of Accountancy and Finance" },
    { name: "James Benedict G. Aniciete", college: "College of Arts and Letters" },
    { name: "Rachelyn F. Esteva", college: "College of Business Administration" },
    { name: "Kristina Cassandra D. Bognot", college: "College of Computer and Information Sciences" },
    { name: "Rein Alyssa G. Soriano", college: "College of Engineering" },
    { name: "Ken Cedrick Peña Villaluz", college: "College of Human Kinetics" },
    { name: "Colin S. Del Rosario", college: "College of Communication" },
    { name: "Divine Bea B. Iringan", college: "College of Education" },
    { name: "Mark David L. Bartolata", college: "College of Political Science and Public Administration" },
    { name: "Jamie SG. Hernandez", college: "College of Science" },
    { name: "Mary Dawn Jhoana E. Laniog", college: "College of Social Sciences and Development" },
    { name: "Mia Rizzi Lou R. Lucban", college: "Institute of Technology" },
    { name: "Erika Nicole B. Bermudez", college: "Open University System" },
  ],
  staff: {
    "Publications and Multimedia Committee": [
      "Harlliequine N. Arizala",
      "Juliana Dominique A. Pisueña",
      "Lemuel A. Velasco",
      "Neriah Phoebe M. Bobiles"
    ],
    "Programs and Events Committee": [
      "Ma. Samantha Fhay D. Roque",
      "Colin S. Del Rosario"
    ],
    "Legal and Administrative Affairs Committee": [
      "Aeron James G. Pacho",
      "Gwyneth Indira V. Alamag",
      "Elaizabeth R. Nucum",
      "Ma. Victoria Maxime Moran",
      "Kimberly Joyce D. Tatel",
      "John Anthony V. Paborada"
    ],
    "Secretariat Committee": [
      "Hubert Clyde Z. Guillermo",
      "Lucy Joy T. Dalida",
      "Sherlyn Luna Fuentes"
    ],
    "Audit and Finance Committee": [
      "Emmanuel D. Penuliar",
      "Kathleen Grace Racelis",
      "Elijah Lyn S. Sevilla"
    ],
    "Evaluation Committee": [
      "Marro Daniel C. Alcantara",
      "Mary Ruth P. Relator",
      "Mark Rheyneil Z. Hembrador",
      "Mira Nicole C. Libao"
    ]
  }
},
2023: {
  commissioners: [
    { name: "GAD THOMAS DEUEL S. MENDIOLA", title: "Chairperson", college: "College of Arts and Letters" },
    { name: "LORIELYN Y. BELMONTE", title: "Vice Chairperson", college: "College of Communication" },
    { name: "MELWEL ARCEL C. GORUMBA", title: "Secretary-General", college: "College of Accountancy and Finance" },
    { name: "ANNA KATRINA C. TENA", title: "Treasurer", college: "College of Political Science and Public Administration" },
    { name: "PIOLO MIGUEL A. BARCELONA", title: "Commissioner", college: "College of Architecture, Design and the Built Environment" },
    { name: "ADAM JESS C. DE GUZMAN", title: "Commissioner", college: "College of Business Administration" },
    { name: "LUKE MARK P. LEONA", title: "Commissioner", college: "College of Computer and Information Sciences" },
    { name: "CARLOS JAIRO L. TIAGA", title: "Commissioner", college: "College of Engineering" },
    { name: "KRISTAL ANDREA MARQUEZ", title: "Commissioner", college: "College of Human Kinetics" },
    { name: "GENER AUGUST S. LINTAG", title: "Commissioner", college: "College of Education" },
    { name: "MARY JOY B. DAGDAG", title: "Commissioner", college: "College of Science" },
    { name: "PAUL JANRY D. ROLUSTA", title: "Commissioner", college: "College of Social Sciences and Development" },
    { name: "ALYANNA MIKAELA DELOS REYES", title: "Commissioner", college: "College of Tourism, Hospitality, and Transportation Management" },
    { name: "JUAN MIGUEL A. MORADO", title: "Commissioner", college: "College of Tourism, Hospitality, and Transportation Management" },
    { name: "KEREN CLAIRE L. CABUELLO", title: "Commissioner", college: "Institute of Technology" },
    { name: "FRINCE CARL N. FORTUNADO", title: "Commissioner", college: "Open University System" },
  ],
  deputies: [
    { name: "Bacon, Paul Anthony B.", college: "College of Arts and Letters" },
    { name: "Oliva, Mark Gerson, L.", college: "College of Science" },
    { name: "Cheryll Ann Ampoon", college: "College of Science" },
    { name: "Rebancos John Albert D.", college: "Institute of Technology" },
    { name: "Ebon, Trisha Mae B.", college: "College of Accountancy and Finance" },
    { name: "Bognot, Kristina Cassandra, D.", college: "College of Computer and Information Sciences" },
    { name: "Matibag, Yesha Lei", college: "College of Business Administration" },
    { name: "Gonzales, Gabriel, R.", college: "College of Communication" },
    { name: "Vargas, Maria Karyl, E.", college: "College of Human Kinetics" },
    { name: "Madrid, Michael Jude, V", college: "College of Political Science and Public Administration" },
    { name: "Marvie Angeline B. Dapo", college: "College of Political Science and Public Administration" },
    { name: "Iringan, Divine Bea B.", college: "College of Education" },
    { name: "Centeno, Fatima Kristine I.", college: "College of Social Sciences and Development" },
    { name: "Mary Dawn Jhoana E. Laniog", college: "College of Social Sciences and Development" },
    { name: "Manabat, Jerwin P.", college: "College of Architecture, Design and the Built Environment" },
    { name: "Airish B. Aliento", college: "Open University System" },
  ],
  staff: {
    "Publications and Multimedia Committee": [
      "Jemelynne S. Picache",
      "Reign Ysabelle A. Villareal",
      "Timothy James T. Sucgang"
    ],
    "Programs and Events Committee": [
      "Marielle T. Agader",
      "Nicole Denice P. Laceda",
      "Diana Mae T. Cudal",
      "James Norman G. Tinio"
    ],
    "Legal and Administrative Affairs Committee": [
      "Jela Mae G. Idanan",
      "Wea Donna M. Aguilar",
      "Neilvin John P. Aventurado"
    ]
  }
},

  2022: {
    commissioners: [
        { name: "RJ O. SALAMERA", title: "Chairperson", college: "College of Political Science and Public Administration" },
        { name: "GAD THOMAS DEUEL S. MENDIOLA", title: "Vice Chairperson", college: "College of Arts and Letters" },
        { name: "MARY JOY B. DAGDAG", title: "Secretary-General", college: "College of Science" },
        { name: "ANN SHIRLEY M. BENITEZ", title: "Treasurer", college: "College of Education" },
        { name: "MARL NICO MARI M. DE VERA", title: "Commissioner", college: "College of Accountancy and Finance" },
        { name: "APPLE JOY A. BUEN", title: "Commissioner", college: "College of Architecture, Design and Built Environment" },
        { name: "JOYCE MARIE L. TOLENTINO", title: "Commissioner", college: "College of Business Administration" },
        { name: "LORIELYN BELMONTE", title: "Commissioner", college: "College of Communications" },
        { name: "CARLOS JUDE G. MAMINTA", title: "Commissioner", college: "College of Computer and Information Sciences" },
        { name: "CARLOS JAIRO L. TIAGA", title: "Commissioner", college: "College of Engineering" },
        { name: "AUGUST B. ANTONIO", title: "Commissioner", college: "College of Human Kinetics" },
        { name: "DENISE JOYCE B. ALMARIO", title: "Commissioner", college: "College of Social Sciences and Development" },
        { name: "ARVIE EIN P. AMOGUIS", title: "Commissioner", college: "College of Tourism, Hospitality and Transportation Management" },
        { name: "JOHN RAY C. AYES", title: "Commissioner", college: "Institute of Technology" },
    ],
    deputies: [
        { name: "Ivy Diane V. Layon", college: "College of Education" },
        { name: "Trizziah Faye L. Victoriano", college: "College of Arts and Letters" },
        { name: "Anna Katrina C. Tena", college: "College of Political Science and Public Administration" },
        { name: "Jecahmeel A. Calonge", college: "College of Science" },
        { name: "Luke Mark P. Leona", college: "College of Computer and Information Sciences" },
        { name: "Jun Wylor M. Blasco", college: "College of Communications" },
        { name: "Melwel Arcel C. Gorumba", college: "College of Accountancy and Finance" },
        { name: "Piolo Miguel A. Barcelona", college: "College of Architecture, Design, and the Built Environment" },
        { name: "Anne Kaexelle E. Fandag", college: "College of Social Sciences and Development" },
        { name: "Trizia Marie T. Cajayon", college: "College of Tourism, Hospitality and Transportation Management" },
        { name: "Mark Daryll G. Estampa", college: "College of Education" },
    ],
    staff: null
  },
  2021: {
    commissioners: [
        { name: "JANNETTE PRINCESS V. HINATE", title: "Chairperson", college: "College of Education" },
        { name: "JANEL MARIEKE B. BANARIA", title: "Vice Chairperson", college: "College of Social Science and Development" },
        { name: "ALEC MARIZ G. AVERILLA", title: "Secretary General", college: "College of Human Kinetics" },
        { name: "KATHERINE CLAIRE A. HOANG", title: "Treasurer", college: "College of Architecture, Design and Built Environment" },
        { name: "DIVINA MARIE B. IBAÑEZ", title: "Commissioner", college: "College of Arts and Letters" },
        { name: "ANGELA LUISA H. MONTENEGRO", title: "Commissioner", college: "College of Accountancy and Finance" },
        { name: "ELIZABETH MARIE G. ANDAYA", title: "Commissioner", college: "College of Business Administration" },
        { name: "PETER THADDEUS V. IBAÑEZ", title: "Commissioner", college: "College of Communication" },
        { name: "MARC JOSEPH V. BARCIAL", title: "Commissioner", college: "College of Computer and Information Sciences" },
        { name: "CHARLIZE KRIZIA R. LOPEZ", title: "Commissioner", college: "College of Engineering" },
        { name: "CYRUS JAMES P. MAGSINO", title: "Commissioner", college: "College of Political Science and Public Administration" },
        { name: "FRANZ MARIELLA D. SUMUCOL", title: "Commissioner", college: "College of Science" },
        { name: "KRISTAN MARK F. BERNARDO", title: "Commissioner", college: "College of Tourism, Hospitality, and Transportation Management" },
        { name: "DIVINA I. ASIS", title: "Commissioner", college: "Institute of Technology" },
    ],
    deputies: [
        { name: "Baldomar, Nora Gay", college: "" }, { name: "Calo, Sarah Marie", college: "" },
        { name: "Crisostomo, Josh Philip", college: "" }, { name: "Estrada, Monica", college: "" },
        { name: "Flores, Maria Cristina", college: "" }, { name: "Gonzales, Nelson", college: "" },
        { name: "Loyola, Shania Marie", college: "" }, { name: "Magsanoc, Ysabel Martina", college: "" },
        { name: "Manalang, Clarisse", college: "" }, { name: "Melodillar, Jasmine", college: "" },
        { name: "Mendoza, Ericka", college: "" }, { name: "Nate, Femily Joie", college: "" },
        { name: "Navato, John Rainier", college: "" }, { name: "Pelingon, Laura Evadne", college: "" },
        { name: "Ramos, Kathryn Joy", college: "" }, { name: "Reyes, Jose Marie", college: "" },
        { name: "Salamera, RJ", college: "" }, { name: "Tolentino, Zoe Bernadette", college: "" },
        { name: "Almoguera, Mikaela", college: "" }, { name: "Amoguis, Arvie", college: "" },
        { name: "Ballesteros, Mark Chester", college: "" }, { name: "Castañeda, Giselle", college: "" },
        { name: "Ligo, Sheilla", college: "" }, { name: "Marcos, Lady Jane", college: "" },
        { name: "Pablo, Hector", college: "" }, { name: "Sanceda, Jefferson", college: "" },
        { name: "Zorilla, Rusky", college: "" }
    ],
    staff: null
  }
};
// --- Committee Descriptions ---
export const staffDescriptions: Record<string, string> = {
  "Executive Committee": 
    "Assists the Chairperson, Vice Chairperson, Secretary-General, and Treasurer in overseeing the commission, handling communications, and supporting administrative tasks.",
  "Secretariat Committee": 
    "Manages official documents, schedules meetings, takes minutes, and ensures smooth communication between committees and external partners.",
  "Legal and Administrative Affairs Committee": 
    "Provides legal representation, handles external matters such as representation and conduct, and ensures compliance with policies including the Data Privacy Act.",
  "Audit and Finance Committee": 
    "Oversees financial management, records transactions transparently, conducts audits, and prepares financial reports for accountability.",
  "Publications and Multimedia Committee": 
    "Creates and manages publication materials, oversees social media accounts, and ensures all outputs follow the commission’s branding guidelines.",
  "Programs and Events Committee": 
    "Organizes and manages the technical aspects of all commission events, both physical and virtual, ensuring smooth execution.",
  "Evaluation Committee": 
    "Reviews, monitors, and evaluates the conduct of elections and commission projects to recommend improvements."
};