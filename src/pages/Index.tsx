import { useState, useCallback, useEffect } from "react";
import StartScreen from "@/components/quiz/StartScreen";
import QuestionScreen from "@/components/quiz/QuestionScreen";
import ResultScreen from "@/components/quiz/ResultScreen";
import { questions } from "@/data/questions";
import { Moon, Sun } from "lucide-react";

type Screen = "start" | "quiz" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const handleStart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setScreen("quiz");
  };

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) setScore((s) => s + 1);
  }, []);

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((q) => q + 1);
    } else {
      setScreen("result");
    }
  };

  const handleRestart = () => {
    setScreen("start");
  };

  return (
    <>
      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode((d) => !d)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      {screen === "start" && (
        <StartScreen onStart={handleStart} totalQuestions={questions.length} />
      )}
      {screen === "quiz" && (
        <QuestionScreen
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Index;
