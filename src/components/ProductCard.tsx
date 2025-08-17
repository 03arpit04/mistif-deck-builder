import { Heart, TrendingUp, Star, ChevronUp, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
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
  onSwipeRight: (id: string) => void;
  onSwipeLeft: (id: string) => void;
  onWhy: (id: string) => void;
  onCompare: (id: string) => void;
}

export const ProductCard = ({
  id,
  title,
  brand,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  whyForYou,
  pros,
  cons,
  category,
  onSwipeRight,
  onSwipeLeft,
  onWhy,
  onCompare,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className="mistif-card relative w-full max-w-sm mx-auto rounded-xl p-6 mistif-swipe-card">
      {/* Category Badge */}
      <Badge variant="secondary" className="absolute top-4 left-4 z-10 bg-primary/10 text-primary border-primary/20">
        {category}
      </Badge>

      {/* Discount Badge */}
      {discount > 0 && (
        <Badge className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground">
          {discount}% OFF
        </Badge>
      )}

      {/* Product Image */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{brand}</p>
          <h3 className="font-display font-semibold text-lg leading-tight text-foreground line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount.toLocaleString()} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Why For You */}
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-sm text-foreground font-medium mb-1">Why this for you</p>
          <p className="text-sm text-muted-foreground">{whyForYou}</p>
        </div>

        {/* Pros & Cons Preview */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-medium text-foreground mb-1">Pros</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {pros.slice(0, 2).map((pro, index) => (
                <li key={index} className="flex items-start gap-1">
                  <TrendingUp className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground mb-1">Cons</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {cons.slice(0, 2).map((con, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="w-3 h-3 text-destructive mt-0.5 flex-shrink-0">-</span>
                  <span className="line-clamp-1">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onWhy(id)}
            className="flex items-center gap-1 border-primary/20 hover:bg-primary/10"
          >
            <ChevronUp className="w-4 h-4" />
            Why?
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onCompare(id)}
            className="flex items-center gap-1 border-secondary/20 hover:bg-secondary/10"
          >
            <ArrowUpRight className="w-4 h-4" />
            Compare
          </Button>
        </div>

        {/* Swipe Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button 
            variant="outline" 
            onClick={() => onSwipeLeft(id)}
            className="text-muted-foreground hover:text-foreground"
          >
            Skip
          </Button>
          <Button 
            onClick={() => onSwipeRight(id)}
            className="mistif-button-primary"
          >
            <Heart className="w-4 h-4 mr-1" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};