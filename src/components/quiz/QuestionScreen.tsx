import { useEffect, useState, useCallback } from "react";
import type { Question } from "@/data/questions";

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const TIMER_DURATION = 20;
const AUTO_ADVANCE_DELAY = 1500;
const optionGradients = [
  "gradient-option-a",
  "gradient-option-b",
  "gradient-option-c",
  "gradient-option-d",
];
const optionLabels = ["A", "B", "C", "D"];

const QuestionScreen = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onNext,
}: QuestionScreenProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [answered, setAnswered] = useState(false);

  const handleTimeout = useCallback(() => {
    if (!answered) {
      setAnswered(true);
      onAnswer(false);
    }
  }, [answered, onAnswer]);

  // Auto-advance after answering or timeout
  useEffect(() => {
    if (!answered) return;
    const timeout = setTimeout(() => onNext(), AUTO_ADVANCE_DELAY);
    return () => clearTimeout(timeout);
  }, [answered, onNext]);

  useEffect(() => {
    setSelectedAnswer(null);
    setTimeLeft(TIMER_DURATION);
    setAnswered(false);
  }, [question.id]);

  useEffect(() => {
    if (answered) return;
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, answered, handleTimeout]);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    onAnswer(index === question.correctAnswer);
  };

  const getOptionClass = (index: number) => {
    if (!answered) return optionGradients[index];
    if (index === question.correctAnswer) return "gradient-correct";
    if (index === selectedAnswer && index !== question.correctAnswer) return "gradient-wrong";
    return "opacity-40 " + optionGradients[index];
  };

  const timerPercent = (timeLeft / TIMER_DURATION) * 100;
  const timerColor =
    timeLeft > 10 ? "hsl(var(--primary))" : timeLeft > 5 ? "hsl(var(--accent))" : "hsl(var(--destructive))";

  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      {/* Header */}
      <div className="text-center mb-2">
        <p className="text-sm font-bold tracking-wide uppercase text-primary text-glow">
          SRM ARTS AND SCIENCE COLLEGE
        </p>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          DEPARTMENT OF COMPUTER SCIENCE
        </p>
      </div>

      {/* Progress & Timer */}
      <div className="max-w-2xl w-full mx-auto mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-muted-foreground">
            Question {questionIndex + 1}/{totalQuestions}
          </span>
          <span className="text-sm font-bold text-muted-foreground">
            {question.category}
          </span>
          <span
            className="text-2xl font-black tabular-nums"
            style={{ color: timerColor }}
          >
            {timeLeft}s
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-linear"
            style={{
              width: `${timerPercent}%`,
              backgroundColor: timerColor,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col">
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={answered}
              className={`${getOptionClass(index)} text-foreground font-semibold text-left p-5 md:p-6 rounded-xl transition-all duration-300 ${
                !answered
                  ? "hover:scale-[1.03] hover:shadow-lg active:scale-95 cursor-pointer"
                  : "cursor-default"
              } flex items-center gap-4`}
            >
              <span className="w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center text-base font-bold shrink-0">
                {optionLabels[index]}
              </span>
              <span className="text-base md:text-lg">{option}</span>
              {answered && index === question.correctAnswer && (
                <span className="ml-auto text-lg">✓</span>
              )}
              {answered &&
                index === selectedAnswer &&
                index !== question.correctAnswer && (
                  <span className="ml-auto text-lg">✗</span>
                )}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <div className="text-center space-y-2">
            <p className="text-lg font-bold">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-success">🎉 Correct!</span>
              ) : selectedAnswer === null ? (
                <span className="text-destructive">⏰ Time's up!</span>
              ) : (
                <span className="text-destructive">❌ Wrong Answer</span>
              )}
            </p>
            <p className="text-sm text-muted-foreground animate-pulse">Moving to next...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;
