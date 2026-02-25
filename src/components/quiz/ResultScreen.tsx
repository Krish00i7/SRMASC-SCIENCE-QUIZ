import { Trophy, RotateCcw, Star } from "lucide-react";

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) return { text: "Perfect Score! 🏆", emoji: "🌟" };
    if (percentage >= 80) return { text: "Excellent Work!", emoji: "🎉" };
    if (percentage >= 60) return { text: "Good Job!", emoji: "👍" };
    if (percentage >= 40) return { text: "Keep Practicing!", emoji: "💪" };
    return { text: "Better Luck Next Time!", emoji: "📚" };
  };

  const message = getMessage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-sm font-bold tracking-wide uppercase text-primary text-glow">
          SRM ARTS AND SCIENCE COLLEGE
        </p>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          DEPARTMENT OF COMPUTER SCIENCE
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full text-center">
        {/* Trophy */}
        <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
          Quiz Complete!
        </h2>
        <p className="text-xl text-muted-foreground mb-2">{message.text} {message.emoji}</p>
        <p className="text-lg text-accent font-semibold mb-4">
          Thank You! 🙏
        </p>

        {/* Score Circle */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 327} 327`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-primary">{percentage}%</span>
            <span className="text-sm text-muted-foreground">{score}/{totalQuestions}</span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.ceil(percentage / 20)
                  ? "text-accent fill-accent"
                  : "text-muted"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onRestart}
          className="gradient-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.4)] active:scale-95 flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
