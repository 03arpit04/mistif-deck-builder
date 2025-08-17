import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  whyForYou: string;
  pros: string[];
  cons: string[];
  category: string;
}

interface SwipeDeckProps {
  products: Product[];
  onSwipeRight: (productId: string) => void;
  onSwipeLeft: (productId: string) => void;
  onComplete: () => void;
}

export const SwipeDeck = ({ products, onSwipeRight, onSwipeLeft, onComplete }: SwipeDeckProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedProducts, setSwipedProducts] = useState<string[]>([]);
  const [savedCount, setSavedCount] = useState(0);

  const currentProduct = products[currentIndex];
  const progress = ((currentIndex + 1) / products.length) * 100;
  const hasNext = currentIndex < products.length - 1;

  const handleSwipeRight = (productId: string) => {
    onSwipeRight(productId);
    setSwipedProducts(prev => [...prev, productId]);
    setSavedCount(prev => prev + 1);
    nextCard();
  };

  const handleSwipeLeft = (productId: string) => {
    onSwipeLeft(productId);
    setSwipedProducts(prev => [...prev, productId]);
    nextCard();
  };

  const nextCard = () => {
    if (hasNext) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleWhy = (productId: string) => {
    // Show detailed explanation modal/drawer
    console.log('Show why for product:', productId);
  };

  const handleCompare = (productId: string) => {
    // Show comparison view
    console.log('Show comparison for product:', productId);
  };

  useEffect(() => {
    // Preload next images for smooth experience
    if (currentIndex < products.length - 1) {
      const nextImage = new Image();
      nextImage.src = products[currentIndex + 1].image;
    }
  }, [currentIndex, products]);

  if (!currentProduct) {
    return (
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-display font-semibold">Deck Complete!</h3>
        <p className="text-muted-foreground">
          You've saved {savedCount} products. Ready to build your playlist?
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto space-y-6">
      {/* Header with Progress */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-background/50">
            {currentIndex + 1} of {products.length}
          </Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{savedCount} saved</span>
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-card" />
      </div>

      {/* Product Card */}
      <div className="relative">
        <ProductCard
          {...currentProduct}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
          onWhy={handleWhy}
          onCompare={handleCompare}
        />
        
        {/* Next Card Preview */}
        {hasNext && (
          <div className="absolute -z-10 top-2 left-2 right-2 bottom-2 mistif-card rounded-xl opacity-20 scale-95" />
        )}
      </div>

      {/* Swipe Instructions */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Swipe or use buttons below</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <span>← Skip</span>
          <span>↑ Why?</span>
          <span>→ Save</span>
          <span>↓ Compare</span>
        </div>
      </div>
    </div>
  );
};