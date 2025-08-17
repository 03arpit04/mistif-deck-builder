import { useState } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import { SwipeDeck } from "@/components/SwipeDeck";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockProducts } from "@/data/mockProducts";
import { Package, TrendingUp, Clock, Users } from "lucide-react";

type AppState = "chat" | "loading" | "swipe" | "complete";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("chat");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [savedProducts, setSavedProducts] = useState<string[]>([]);
  const [currentDeck, setCurrentDeck] = useState(mockProducts);

  const handlePromptSubmit = (prompt: string) => {
    setCurrentPrompt(prompt);
    setAppState("loading");
    
    // Simulate API processing
    setTimeout(() => {
      setCurrentDeck(mockProducts);
      setAppState("swipe");
    }, 2000);
  };

  const handleSwipeRight = (productId: string) => {
    setSavedProducts(prev => [...prev, productId]);
  };

  const handleSwipeLeft = (productId: string) => {
    // Just track that it was seen
    console.log("Swiped left on:", productId);
  };

  const handleDeckComplete = () => {
    setAppState("complete");
  };

  const handleNewSearch = () => {
    setAppState("chat");
    setSavedProducts([]);
    setCurrentPrompt("");
  };

  const renderState = () => {
    switch (appState) {
      case "chat":
        return (
          <div className="space-y-12">
            <ChatInterface onSubmit={handlePromptSubmit} />
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="mistif-card p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Smart Curation</h3>
                <p className="text-sm text-muted-foreground">AI-powered matching based on your exact needs and context</p>
              </Card>
              
              <Card className="mistif-card p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Review Synthesis</h3>
                <p className="text-sm text-muted-foreground">Pros, cons, and insights from thousands of real reviews</p>
              </Card>
              
              <Card className="mistif-card p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Price Tracking</h3>
                <p className="text-sm text-muted-foreground">Get alerts when saved items drop in price</p>
              </Card>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-display font-bold text-foreground">50k+</div>
                <div className="text-sm text-muted-foreground">Products curated</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">User satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-foreground">15min</div>
                <div className="text-sm text-muted-foreground">Avg. decision time</div>
              </div>
            </div>
          </div>
        );

      case "loading":
        return (
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin mx-auto"></div>
              <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/5 mx-auto"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold text-foreground">Curating your deck...</h3>
              <p className="text-muted-foreground">Analyzing "{currentPrompt}" and matching products</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Parsing your intent</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
                <span>Ranking by relevance</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-700"></div>
                <span>Synthesizing reviews</span>
              </div>
            </div>
          </div>
        );

      case "swipe":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Your Daily Deck
              </Badge>
              <h2 className="text-2xl font-display font-semibold text-foreground">
                "{currentPrompt}"
              </h2>
              <p className="text-muted-foreground">Swipe through curated matches</p>
            </div>
            
            <SwipeDeck
              products={currentDeck}
              onSwipeRight={handleSwipeRight}
              onSwipeLeft={handleSwipeLeft}
              onComplete={handleDeckComplete}
            />
          </div>
        );

      case "complete":
        return (
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Users className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Deck Complete!
              </h3>
              <p className="text-muted-foreground">
                You saved {savedProducts.length} products
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => console.log("Build playlist")}
                className="w-full mistif-button-primary"
              >
                Build My Playlist
              </Button>
              <Button 
                variant="outline" 
                onClick={handleNewSearch}
                className="w-full"
              >
                New Search
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
              <p className="text-sm text-muted-foreground mb-2">Coming tomorrow:</p>
              <p className="text-sm font-medium text-foreground">
                Your Discovery Weekly with fresh picks based on today's swipes
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background font-ui">
      {/* Background Effects */}
      <div className="fixed inset-0 gradient-hero opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_50%)] opacity-5"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-border/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">Mistif</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden sm:flex">
                Daily Deck Available
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 py-12">
          <div className="max-w-6xl mx-auto">
            {renderState()}
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Discover better, decide faster with AI-powered product curation
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;