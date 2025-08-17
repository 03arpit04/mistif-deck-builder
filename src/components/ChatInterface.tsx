import { useState } from "react";
import { Send, Mic, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ChatInterfaceProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

const SUGGESTION_CHIPS = [
  "Student rigs under ₹50k",
  "Oily-skin summer routine", 
  "Monsoon commute gear",
  "Work from home setup",
  "Fitness starter kit"
];

export const ChatInterface = ({ onSubmit, isLoading = false }: ChatInterfaceProps) => {
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
      setPrompt("");
    }
  };

  const handleChipClick = (suggestion: string) => {
    if (!isLoading) {
      onSubmit(suggestion);
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Prompt Input */}
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Find your perfect
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              products
            </span>
          </h1>
          <p className="text-lg text-muted-foreground font-ui">
            Tell us what you need, and we'll curate the perfect matches
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="relative group">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Need a lightweight laptop under ₹50k for college + Premiere Pro..."
              className="mistif-input h-14 pr-24 pl-6 text-lg rounded-2xl border-2 bg-card/50 backdrop-blur-sm"
              disabled={isLoading}
            />
            
            {/* Voice Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleVoiceToggle}
              className={`absolute right-12 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full ${
                isListening 
                  ? 'bg-secondary text-secondary-foreground' 
                  : 'hover:bg-secondary/20'
              }`}
              disabled={isLoading}
            >
              <Mic className="h-4 w-4" />
            </Button>

            {/* Submit Button */}
            <Button
              type="submit"
              size="sm"
              disabled={!prompt.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 rounded-xl mistif-button-primary"
            >
              {isLoading ? (
                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {SUGGESTION_CHIPS.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleChipClick(suggestion)}
            disabled={isLoading}
            className="rounded-full border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};