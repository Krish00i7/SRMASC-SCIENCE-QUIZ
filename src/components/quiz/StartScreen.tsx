import { Atom, Rocket, Microscope, Cpu } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const StartScreen = ({ onStart, totalQuestions }: StartScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-black tracking-wide uppercase text-primary mb-2 text-glow">
          SRM ARTS AND SCIENCE COLLEGE
        </h1>
        <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-foreground mb-1">
          DEPARTMENT OF COMPUTER SCIENCE
        </p>
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          Science Expo Project
        </p>
      </div>

      {/* Main Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full text-center">
        {/* Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl gradient-option-a flex items-center justify-center">
            <Atom className="w-6 h-6 text-foreground" />
          </div>
          <div className="w-12 h-12 rounded-xl gradient-option-b flex items-center justify-center">
            <Rocket className="w-6 h-6 text-foreground" />
          </div>
          <div className="w-12 h-12 rounded-xl gradient-option-c flex items-center justify-center">
            <Microscope className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="w-12 h-12 rounded-xl gradient-option-d flex items-center justify-center">
            <Cpu className="w-6 h-6 text-foreground" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-3 text-glow text-primary">
          Science Quiz
        </h1>
        <p className="text-muted-foreground mb-2 text-lg">
          Test your knowledge in Physics, Biology, Space & Tech!
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          {totalQuestions} Questions · 20 seconds each
        </p>

        <button
          onClick={onStart}
          className="gradient-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-2xl w-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.4)] active:scale-95"
        >
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
