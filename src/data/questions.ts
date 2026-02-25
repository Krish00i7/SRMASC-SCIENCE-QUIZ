export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the speed of light in vacuum?",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
    correctAnswer: 1,
    category: "Physics",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2,
    category: "Space",
  },
  {
    id: 3,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
    correctAnswer: 2,
    category: "Biology",
  },
  {
    id: 4,
    question: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dinitrogen Acid",
      "Deoxyribose Nucleic Atom",
      "Dynamic Nuclear Acid",
    ],
    correctAnswer: 0,
    category: "Biology",
  },
  {
    id: 5,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "Biology",
  },
  {
    id: 6,
    question: "What is the chemical symbol for water?",
    options: ["HO", "H₂O", "OH₂", "H₃O"],
    correctAnswer: 1,
    category: "Physics",
  },
  {
    id: 7,
    question: "How many planets are in our Solar System?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    category: "Space",
  },
  {
    id: 8,
    question: "What technology is used to make computer chips?",
    options: ["Biotechnology", "Nanotechnology", "Semiconductor Technology", "Quantum Computing"],
    correctAnswer: 2,
    category: "Technology",
  },
  {
    id: 9,
    question: "Which force keeps us on the ground?",
    options: ["Magnetic Force", "Friction", "Gravity", "Centripetal Force"],
    correctAnswer: 2,
    category: "Physics",
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    correctAnswer: 3,
    category: "Biology",
  },
  {
    id: 11,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2,
    category: "Physics",
  },
  {
    id: 12,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: 3,
    category: "Biology",
  },
  {
    id: 13,
    question: "What is the closest star to Earth?",
    options: ["Proxima Centauri", "Sirius", "The Sun", "Alpha Centauri"],
    correctAnswer: 2,
    category: "Space",
  },
  {
    id: 14,
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Tech Transfer Program",
      "HyperText Transmission Platform",
      "High Transfer Text Protocol",
    ],
    correctAnswer: 0,
    category: "Technology",
  },
  {
    id: 15,
    question: "Which blood cells help fight infections?",
    options: ["Red Blood Cells", "Platelets", "White Blood Cells", "Plasma"],
    correctAnswer: 2,
    category: "Biology",
  },
];