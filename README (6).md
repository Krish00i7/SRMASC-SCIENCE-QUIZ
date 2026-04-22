# 🔬 SRMASC Science Quiz

> An interactive science quiz web app built for the **Science Expo** by the **Department of Computer Science, SRM Arts and Science College**.

🌐 **Live Demo:** [krish00i7.github.io/SRMASC-SCIENCE-QUIZ](https://krish00i7.github.io/SRMASC-SCIENCE-QUIZ/)  
📦 **Repo:** [github.com/Krish00i7/SRMASC-SCIENCE-QUIZ](https://github.com/Krish00i7/SRMASC-SCIENCE-QUIZ)

---

## 📸 Screens

| Start | Quiz | Results |
|-------|------|---------|
| College branding + category icons | Timed MCQ with progress | Score circle + star rating |

---

## ✨ Features

- 🧪 **15 curated science questions** across 4 categories — Biology, Physics, Space & Technology
- ⏱️ **20-second timer** per question to keep things competitive
- ✅ **Instant answer feedback** — correct/incorrect highlighted on selection
- 📊 **Animated results screen** with score circle, percentage, and dynamic performance message
- ⭐ **5-star rating system** based on your final score
- 🌙 **Dark / Light mode toggle** (defaults to dark)
- 📱 **Fully responsive** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (Radix UI) |
| Icons | Lucide React |
| Routing | React Router DOM v6 |
| Testing | Vitest + Testing Library |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── quiz/
│   │   ├── StartScreen.tsx     # Landing screen with college branding
│   │   ├── QuestionScreen.tsx  # MCQ with timer and answer feedback
│   │   └── ResultScreen.tsx    # Score circle, stars & play again
│   └── ui/                     # shadcn/ui base components
├── data/
│   └── questions.ts            # Question bank (15 questions, 4 categories)
├── pages/
│   ├── Index.tsx               # Main quiz state controller + dark mode toggle
│   └── NotFound.tsx
└── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Krish00i7/SRMASC-SCIENCE-QUIZ.git
cd SRMASC-SCIENCE-QUIZ

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Other Scripts

```bash
npm run build       # Production build
npm run preview     # Preview production build locally
npm run test        # Run tests
npm run lint        # Lint the codebase
```

---

## 🧠 Question Categories

| Category | Questions |
|----------|-----------|
| 🧬 Biology | 6 |
| ⚡ Physics | 4 |
| 🚀 Space | 3 |
| 💻 Technology | 2 |
| **Total** | **15** |

---

## 🏆 Score Messages

| Score | Message |
|-------|---------|
| 100% | Perfect Score! 🏆 |
| 80–99% | Excellent Work! 🎉 |
| 60–79% | Good Job! 👍 |
| 40–59% | Keep Practicing! 💪 |
| Below 40% | Better Luck Next Time! 📚 |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **[Krish00i7](https://github.com/Krish00i7)**  
**SRM Arts and Science College — Department of Computer Science**

</div>
