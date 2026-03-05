import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductCard({ fragrance }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/products/${fragrance.id}`}>
      <div className="group cursor-pointer h-full">
        <Card className="overflow-hidden relative hover:shadow-lg transition-shadow">
          {/* Image Container */}
          <div className="relative h-64 sm:h-72 bg-muted/10 overflow-hidden">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x600?text=" +
                  encodeURIComponent(fragrance.name);
              }}
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-3 right-3 bg-accent/90 hover:bg-accent"
              onClick={handleLike}
            >
              <Heart
                size={20}
                className={`transition-all ${
                  isLiked
                    ? "fill-secondary text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              />
            </Button>
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2 text-white"
              >
                <ShoppingBag size={16} />
                View Details
              </Button>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-4 sm:p-6 space-y-3">
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                {fragrance.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">
                {fragrance.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(fragrance.rating)
                        ? "fill-secondary text-secondary"
                        : "text-muted/30"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-primary">
                {fragrance.rating}
              </span>
              <span className="text-xs text-muted">
                ({fragrance.reviews} reviews)
              </span>
            </div>

            {/* Details */}
            <div className="text-xs text-muted space-y-1 pt-2">
              <p>
                <span className="font-semibold text-primary">Longevity:</span>{" "}
                {fragrance.longevity}
              </p>
              <p>
                <span className="font-semibold text-primary">Volume:</span>{" "}
                {fragrance.volume}
              </p>
            </div>

            {/* Price */}
            <div className="pt-2 border-t border-border">
              <p className="text-2xl font-semibold text-primary">
                ₹{fragrance.price}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
