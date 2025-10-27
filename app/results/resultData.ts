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

export const resultsData: {
  skm: CollegeResults;
  colleges: Record<string, CollegeResults>;
} = {
  skm: {
    President: [
      { name: "Azusano Jp", position: "President", votes: "4,413" 
        ,photo: "/images/Candidates/SKM/Pres 1.png" 
      },
      
     
    ],
    VicePresident: [
      { name: "Ramos Tracy", position: "Vice President", votes: "4,361" 
        ,photo: "/images/Candidates/SKM/VP 1.jpg" 
      },
     
    ],
 Councilors: [
      { name: "Alsisto Noriko", position: "Councilor", votes: "3,426" 
        ,photo: "/images/Candidates/SKM/Con 1.jpg" 
      },
    { name: "Araneta Frank", position: "Councilor", votes: "3,735"
       ,photo: "/images/Candidates/SKM/Con 2.png" 
     },
    { name: "Bolima Dave", position: "Councilor", votes: "3,436" 
      ,photo: "/images/Candidates/SKM/Con 3.png" 
    },
    { name: "Buleg JR. Suharto", position: "Councilor", votes: "3,393"
      ,photo: "/images/Candidates/SKM/Con 4.png" 
     },
    { name: "Dayao Trejor", position: "Councilor", votes: "3,347" 
      ,photo: "/images/Candidates/SKM/Con 6.png" 
    },
    { name: "Eugenio Kim", position: "Councilor", votes: "3,528"
       ,photo: "/images/Candidates/SKM/Con 7.jpg" 
     },
    { name: "Evangelista JJ", position: "Councilor", votes: "3,398"
       ,photo: "/images/Candidates/SKM/Con 8.PNG" 
     },
    { name: "Hizon Sef", position: "Councilor", votes: "3,355" 
       ,photo: "/images/Candidates/SKM/Con 9.jpg" 
    },
     { name: "Plicerda Von", position: "Councilor", votes: "3,367" 
       ,photo: "/images/Candidates/SKM/Con 10.png" 
     },
      { name: "Salvador Enzo", position: "Councilor", votes: "3,377" 
         ,photo: "/images/Candidates/SKM/Con 11.png" 
      },
       { name: "Tupaz Jelaine", position: "Councilor", votes: "3,494"
         ,photo: "/images/Candidates/SKM/Con 12.png" 
        },
    ]
      
   
  },
  colleges: {
    "College of Arts and Letters": {
      President: [
         { name: "Ancheta Christian", position: "President", votes: "691"
          ,photo: "/images/Candidates/CAL/Pres 1.jpg" 
          },
        { name: "Diaz MX. CJ", position: "President", votes: "475" 
          ,photo: "/images/Candidates/CAL/Pres 2.png" 
        },
        
      ],
      VicePresident: [
        { name: "March Augustine ", position: "Vice President", votes: "466" 
            ,photo: "/images/Candidates/CAL/VP 1.png" 
        },
        { name: "Luzuriaga Topher ", position: "Vice President", votes: "707" 
            ,photo: "/images/Candidates/CAL/VP 2.png" 
        },
      ],
       Councilors: [
      { name: "Filler Pamela", position: "Councilor", votes: "779" 
             ,photo: "/images/Candidates/CAL/Con 1.jpeg" 
      },
    { name: "Litana Samantha Noryn", position: "Councilor", votes: "807" 
        ,photo: "/images/Candidates/CAL/Con 2.jpg" 
    },
    { name: "Navaro Sophia", position: "Councilor", votes: "728"
        ,photo: "/images/Candidates/CAL/Con 3.jpg" 
     },
    { name: "Operario Rose", position: "Councilor", votes: "698"
        ,photo: "/images/Candidates/CAL/Con 4.png" 
     },
    { name: "Pagas Justine", position: "Councilor", votes: "780"
        ,photo: "/images/Candidates/CAL/Con 5.jpg" 
     },
    { name: "Recto Paul Sebastian", position: "Councilor", votes: "469"
        ,photo: "/images/Candidates/CAL/Con 6.png" 
     },
    { name: "Ritcher Angelica", position: "Councilor", votes: "499"
        ,photo: "/images/Candidates/CAL/Con 7.png" 
     },
    { name: "Rico Aleeza Christelle", position: "Councilor", votes: "717"
        ,photo: "/images/Candidates/CAL/Con 8.png" 
     },
 
    ]
      
    },
    "College of Political Science and Public Administration": {
      President: [
        { name: "Torne Wellysa", position: "President", votes: "No votes yet"
          ,photo: "/images/Candidates/CPSPA/Pres 1.jpeg" 
         },
        { name: "Ubani Cherry Jhoana", position: "President", votes: "No votes yet" 
          ,photo: "/images/Candidates/CPSPA/Pres 2.png" 
        },
      ],
      VicePresident: [
        { name: "Delante Christian Lloyd Jandrin", position: "Vice President", votes: "No votes yet" 
          ,photo: "/images/Candidates/CPSPA/Con 5.png" 
        },
        { name: "Gutierrez Jascha ", position: "Vice President", votes: "No votes yet" 
          ,photo: "/images/Candidates/CPSPA/VP 2.png" 
        },
      ],
      Councilors: [
      { name: "Arcabos Syra", position: "Councilor", votes: "No votes yet" 
        ,photo: "/images/Candidates/CPSPA/Con 1.png" 
      },
      { name: "Angelo Balce", position: "Councilor", votes: "No votes yet"
        ,photo: "/images/Candidates/CPSPA/Con 2.jpg" 
       },
    { name: "Cruz Francis Miguel A.", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CPSPA/Con 3.png" 
     },
    { name: "De Leon Alfonso Bernard S", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CPSPA/VP 1.jpg" 
    },
    { name: "Dela Rosa Sean", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CPSPA/Con 4.png" 
    },
    { name: "Fernandez Joselle Bernard “jow”", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CPSPA/Con 6.jpg" 
     },
    { name: "Revillas Jc", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CPSPA/Con 7.png" 
     },
    ]
    },



  
    "College of Human Kinetics": {
      President: [
        { name: "No Official Candidate", position: "President", votes: "No votes yet" 
           ,photo: "/images/Candidates/CHK/No Candidate.png" 
        },
        
      ],
      VicePresident: [
        { name: "No Official Candidate", position: "Vice President", votes: "No votes yet"
           ,photo: "/images/Candidates/CHK/No Candidate 1.png" 
         },
    
      ],
       Councilors: [
      { name: "No Official Candidate", position: "Councilor", votes: "No votes yet" 
         ,photo: "/images/Candidates/CHK/No Candidate 2.png" 
      },
   
       ]
    },
 




    "College of Accountancy and Finance": { President: [
        { name: "Villanueva Manuel", position: "President", votes: "2,803" 
           ,photo: "/images/Candidates/CAF/Pres 1.png" 
        },
      ],
      VicePresident: [
        { name: "Alcantara Marro Cruz", position: "Vice President", votes: "2,802" 
           ,photo: "/images/Candidates/CAF/VP 1.png" 
        },
      ],
     Councilors: [
      { name: "Angeles Althacia", position: "Councilor", votes: "2,435" 
         ,photo: "/images/Candidates/CAF/Con 1.png" 
      },
       { name: "Arcega Janelle", position: "Councilor", votes: "2,368" 
        ,photo: "/images/Candidates/CAF/Con 2.png" 
       },
       { name: "Cahig Crystel Love", position: "Councilor", votes: "2,373"
        ,photo: "/images/Candidates/CAF/Con 3.png" 
        },
       { name: "Cruzado Honey Faith", position: "Councilor", votes: "2,436" 
        ,photo: "/images/Candidates/CAF/Con 4.png" 
       },
    { name: "Gallardo Alyza Ashley", position: "Councilor", votes: "2,392"
      ,photo: "/images/Candidates/CAF/Con 5.png" 
     },
    { name: "Salve Jhon Wilmar", position: "Councilor", votes: "2,279"
      ,photo: "/images/Candidates/CAF/Con 6.png" 
     },
    
       ]},
      






    "College of Architecture, Design and the Built Environment": { President: [
        { name: "Agustin Janina", position: "President", votes: "No votes yet"
          ,photo: "/images/Candidates/CADBE/Pres 1.jpg" 
         },
       
      ],
      VicePresident: [
        { name: "Gutierrez Jea Kristel", position: "Vice President", votes: "No votes yet" 
          ,photo: "/images/Candidates/CADBE/VP 1.jpg" 
        },
        
      ],
       Councilors: [
      { name: "Gahoc Marco", position: "Councilor", votes: "No votes yet" 
        ,photo: "/images/Candidates/CADBE/Con 1.jpg" 
      },
    { name: "Villorente Ralf", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/CADBE/Con 2.png" 
    },
   
    ]
      },




    "College of Business Administration": { President: [
        { name: "Atender AdrIanne Athea", position: "President", votes: "No votes yet"
          ,photo: "/images/Candidates/CBA/Pres 1.png" 
         },
      ],
      VicePresident: [
        { name: "Furto Jen", position: "Vice President", votes: "No votes yet" 
            ,photo: "/images/Candidates/CBA/VP 1.jpg" 
        }, 
      ],
    Councilors: [
      { name: "Bautista Haziel Jachin", position: "Councilor", votes: "No votes yet" 
         ,photo: "/images/Candidates/CBA/Con 1.png"
      },
    { name: "Cobico Carl Raine", position: "Councilor", votes: "No votes yet"
        ,photo: "/images/Candidates/CBA/Con 2.png"
     },
   { name: "Imperial Jush Earl", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CBA/Con 3.jpg"
   },
   { name: "Tabagan Gheffanie", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CBA/Con 4.JPG"
   },
   { name: "Usi SharIne Ashanti", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CBA/Con 5.jpg"
   },
   { name: "Vega Jojie", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CBA/Con 6.jpg"
   },
    ]
   },







    "College of Computer and Information Sciences": {President: [
        { name: "Antoc John Loyd", position: "President", votes: "603"
           ,photo: "/images/Candidates/CCIS/Pres 1.jpg"
         },
      ],
      VicePresident: [
        { name: "Regala Erick James", position: "Vice President", votes: "581"
          ,photo: "/images/Candidates/CCIS/VP 1.png"
         }, 
      ],
     Councilors: [
      { name: "Aran Justine Jhon", position: "Councilor", votes: "501" 
        ,photo: "/images/Candidates/CCIS/Con 1.png"
      },
   { name: "Buenaventura Harvey", position: "Councilor", votes: "498" 
    ,photo: "/images/Candidates/CCIS/Con 2.jpg"
   },
     { name: "Camacho Ren", position: "Councilor", votes: "496" 
      ,photo: "/images/Candidates/CCIS/Con 3.jpg"
     },








    ] },
    "College of Engineering": {President: [
        { name: "Landicho Keeth Monce", position: "President", votes: "No votes yet"
          ,photo: "/images/Candidates/CEA/Pres 1.jpg"
         },
      ],
      VicePresident: [
        { name: "Hailar Kian Michael", position: "Vice President", votes: "No votes yet" 
            ,photo: "/images/Candidates/CEA/VP 1.jpeg"
        },
      ],
     Councilors: [
      { name: "Atienza Harry", position: "Councilor", votes: "No votes yet" 
          ,photo: "/images/Candidates/CEA/Con 1.png"
      },
    { name: "Dela Cruz Alliah Krystel", position: "Councilor", votes: "No votes yet" 
        ,photo: "/images/Candidates/CEA/Con 2.png"
    },
   { name: "Queddeng Frances Ayanna S.", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CEA/Con 3.jpg"
    },
   
    ]},









    "College of Communication": {President: [
        { name: "Aligam Alvin V.", position: "President", votes: "No votes yet" 
           ,photo: "/images/Candidates/COC/Pres 1.png"
        },
      ],
      VicePresident: [
        { name: "Briol Martha Bernadette", position: "Vice President", votes: "No votes yet" 
           ,photo: "/images/Candidates/COC/VP 1.jpg"
        },

      ],
       Councilors: [

      { name: "Mariano Haizel", position: "Councilor", votes: "No votes yet" 
         ,photo: "/images/Candidates/COC/Con 1 .jpg"
      },
      { name: "Polido Cheska", position: "Councilor", votes: "No votes yet" 
         ,photo: "/images/Candidates/COC/Con 2.jpg"
      },
      { name: "Rendon Desiree Angeline", position: "Councilor", votes: "No votes yet"
         ,photo: "/images/Candidates/COC/Con 3.png"
       },
      { name: "San Andres Emmanuel", position: "Councilor", votes: "No votes yet"
         ,photo: "/images/Candidates/COC/Con 4.png"
       },
    { name: "Valdez Parzyval Peron", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/COC/Con 5.png"
    },
     { name: "Villagomez Abijah John", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/COC/Con 6.JPG"
     },
   ] },





    "College of Education": {President: [
        { name: "Lacava Permarie", position: "President", votes: "462"
           ,photo: "/images/Candidates/COED/Pres 1.png"
         },
       
      ],
      VicePresident: [
        { name: "Esperanza Jerson", position: "Vice President", votes: "451" 
               ,photo: "/images/Candidates/COED/VP 1.png"
        },
       
      ],
       Councilors: [
      { name: "Oquendo Pamela", position: "Councilor", votes: "392"
             ,photo: "/images/Candidates/COED/Con 1.png"
       },
    { name: "De La Rosa Althea Laurayne", position: "Councilor", votes: "420" 
           ,photo: "/images/Candidates/COED/Con 2.png"
    },
    { name: "Buido Vicent", position: "Councilor", votes: "396" 
           ,photo: "/images/Candidates/COED/Con 3.png"
    },
    { name: "Sevilla Rhaulyn", position: "Councilor", votes: "375" 
           ,photo: "/images/Candidates/COED/Con 4.png"
    },
   ] },



    "College of Science": {President: [
        { name: "Pangan Luisa ", position: "President", votes: "No votes yet" 
            ,photo: "/images/Candidates/COS/Pres 1.png"
        },
      ],
      VicePresident: [
        { name: "Perez Jio", position: "Vice President", votes: "No votes yet"
          ,photo: "/images/Candidates/COS/VP 1.png"
         },
      ],
     Councilors: [
      { name: "Demillo Christian Ed A.", position: "Councilor", votes: "No votes yet" 
        ,photo: "/images/Candidates/COS/Con 1.png" 
      },
    { name: "Indar Ayeshah", position: "Councilor", votes: "No votes yet"  
      ,photo: "/images/Candidates/COS/Con 2.png"},

    { name: "Marquez Johnny", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/COS/Con 4.jpg"
    },
    { name: "Rubio Nikkolei Jan", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/COS/Con 6.jpg"
    },
    { name: "Luciñada Irene", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/COS/Con 3.png"
    },
  
   ]  },


      
    "College of Social Sciences and Development": {President: [
      { name: "Ba-ay III Felix ", position: "President", votes: "No votes yet"
        ,photo: "/images/Candidates/CSSD/Pres 1.jpeg"
       },
        { name: "GUINTO SHARNONN AIRE E.", position: "President", votes: "No votes yet"
          ,photo: "/images/Candidates/CSSD/Pres 2.png"
         },
      ],
      VicePresident: [
        { name: "SOLON JERSON", position: "Vice President", votes: "No votes yet"
          ,photo: "/images/Candidates/CSSD/VP 1.png"
         },
        
      ],
        Councilors: [
      { name: "Almazan EMRYS M.", position: "Councilor", votes: "No votes yet" 
        ,photo: "/images/Candidates/CSSD/Con 1.png"
      },
    { name: "Batao Chester", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CSSD/Con 2.png"
     },
    { name: "Casigay Lovely", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/CSSD/Con 3.jpg"
    },
    { name: "Manalao Yachnee Melrene", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/CSSD/Con 4.jpg"
    },
    { name: "Oco Karen Nicole F.", position: "Councilor", votes: "No votes yet"
       ,photo: "/images/Candidates/CSSD/Con 5.jpeg"
     },
    { name: "Redoña Jullia", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CSSD/Con 6.jpg"
     },
    { name: "Rodriguez Juliana", position: "Councilor", votes: "No votes yet" 
      ,photo: "/images/Candidates/CSSD/Con 7.jpg"
    },
  ] },



    "College of Tourism, Hospitality, and Transportation Management": {President: [
        { name: "Tongco Roman ", position: "President", votes: "No votes yet"
                ,photo: "/images/Candidates/CTHTM/Pres 1.jpg"
         },
      ],
      VicePresident: [
        { name: "Maraon Kael", position: "Vice President", votes: "No votes yet" 
          ,photo: "/images/Candidates/CTHTM/VP 1.jpg"
        },
      ],
       Councilors: [
      { name: "Ambal Mae Kristine", position: "Councilor", votes: "No votes yet"
          ,photo: "/images/Candidates/CTHTM/Con 1.jpg"
       },
    { name: "Basilonia Yvette", position: "Councilor", votes: "No votes yet"
      ,photo: "/images/Candidates/CTHTM/Con 2.jpg"
     },
   { name: "Chua Heaven", position: "Councilor", votes: "No votes yet"
    ,photo: "/images/Candidates/CTHTM/Con 3.jpg"
    },
   { name: "Gumera Janille Joy", position: "Councilor", votes: "No votes yet"
    ,photo: "/images/Candidates/CTHTM/Con 4.png"
    },
   { name: "Montero Maria Althea", position: "Councilor", votes: "No votes yet"
    ,photo: "/images/Candidates/CTHTM/Con 5.png"
    },
   { name: "Pablo April Jazz", position: "Councilor", votes: "No votes yet" 
    ,photo: "/images/Candidates/CTHTM/Con 6.jpg"
   },
  ]
   },



    "Institute of Technology": {President: [
        { name: "Nicolas John Ivan", position: "President", votes: "No votes yet" 
          ,photo: "/images/Candidates/ITECH/Pres 1.jpg"
        },
      ],
      VicePresident: [
        { name: "Gragasin Gio ", position: "Vice President", votes: "No votes yet" 
           ,photo: "/images/Candidates/ITECH/VP 1.jpg"
        },
      ],
     Councilors: [
      { name: "Cayabyab JD", position: "Councilor", votes: "No votes yet"
         ,photo: "/images/Candidates/ITECH/Con 1.png"
       },
    { name: "Carpentes Ash", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/ITECH/Con 2.jpg"
    },
  { name: "Clemente Joseph “seph”", position: "Councilor", votes: "No votes yet" 
     ,photo: "/images/Candidates/ITECH/Con 3.jpg"
  },
    { name: "Gepiga Mhelo", position: "Councilor", votes: "No votes yet" 
       ,photo: "/images/Candidates/ITECH/Con 4.jpg"
    },
  
  ]
       },




    "Open University System": {President: [
        { name: "Santiago Danielle", position: "President", votes: "No votes yet", photo: "/images/Candidates/OUS/OUS PRES.jpeg", },
      ],
      VicePresident: [
        { name: "Sulvita Mark Lawrence", position: "Vice President", votes: "No votes yet", photo: "/images/Candidates/OUS/OUS VP.JPG", },
      ],
      Councilors: [
  { name: "Cabildo Ma. Feliz Emilline ", position: "Councilor", votes: "No votes yet",photo: "/images/Candidates/OUS/Con 1.jpeg" },
  { name: "De Guzman Alaine Jean", position: "Councilor", votes: "No votes yet" ,photo: "/images/Candidates/OUS/Con 2.jpeg" },
  { name: "Dizon Romalyn", position: "Councilor", votes: "No votes yet" ,photo: "/images/Candidates/OUS/Con 3.jpg" },
  { name: "Ocon Judy Ann", position: "Councilor", votes: "No votes yet" ,photo: "/images/Candidates/OUS/Con 4.png" },
  { name: "Pangilinan Yana Odessa", position: "Councilor", votes: "No votes yet" ,photo: "/images/Candidates/OUS/Con 5.jpeg" },
  { name: "Pascual Khris Chelsea", position: "Councilor", votes: "No votes yet",photo: "/images/Candidates/OUS/Con 6.jpg"  },
  { name: "Sistua Moshii", position: "Councilor", votes: "No votes yet",photo: "/images/Candidates/OUS/Con 7.jpeg"  },
]},
  },
};
// --- SORTING FUNCTIONALITY ADDED BELOW ---

/**
 * Parses a candidate's vote count into a number for sorting.
 * @param vote - The vote count, which can be a number or a string.
 * @returns The numerical value of the votes.
 */
const getVoteCount = (vote: number | string): number => {
  if (typeof vote === 'number') {
    return vote;
  }
  // Treat "No votes yet" as 0 so it appears last
  if (vote === "No votes yet") {
    return 0;
  }
  // Remove commas and parse the string to an integer
  return parseInt(vote.replace(/,/g, ''), 10);
};

/**
 * Sorts all councilor lists within the resultsData object in place.
 * @param data - The resultsData object.
 */
export const sortAllCouncilors = (data: typeof resultsData) => {
  const sorter = (a: Candidate, b: Candidate) => getVoteCount(b.votes) - getVoteCount(a.votes);

  // Sort the SKM Councilors
  data.skm.Councilors.sort(sorter);

  // Sort the Councilors for each college
  for (const collegeKey in data.colleges) {
    if (Object.prototype.hasOwnProperty.call(data.colleges, collegeKey)) {
      data.colleges[collegeKey].Councilors.sort(sorter);
    }
  }
};

// --- USAGE EXAMPLE ---
// To sort your data, simply call the function like this:
sortAllCouncilors(resultsData);

// Now, resultsData.skm.Councilors and the councilors for each college are sorted.
// For example, you can check the sorted SKM councilors:
console.log(resultsData.skm.Councilors);