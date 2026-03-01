import { useParams, Link } from "react-router-dom";
import { perfumes } from "../data/perfumes.js";
import { Star, ShoppingBag, Heart, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetail() {
  const { id } = useParams();
  const fragrance = perfumes.find((f) => f.id === parseInt(id));

  if (!fragrance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Fragrance Not Found
          </h1>
          <Button asChild variant="default">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedFragrances = perfumes
    .filter(
      (f) =>
        f.id !== fragrance.id &&
        f.occasions.some((o) => fragrance.occasions.includes(o)),
    )
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Header Navigation */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/products"
            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-muted/5 rounded-lg overflow-hidden h-96 md:h-full">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800?text=" +
                  encodeURIComponent(fragrance.name);
              }}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-secondary font-medium tracking-widest text-sm uppercase">
                Premium Fragrance
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">
                {fragrance.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
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
              <span className="text-muted">
                ({fragrance.reviews} customer reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted leading-relaxed">
              {fragrance.description}
            </p>

            {/* Price and Actions */}
            <div className="space-y-4 border-y border-border py-6">
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-sm text-muted mb-1">Price</p>
                  <p className="text-4xl font-bold text-primary">
                    ₹{fragrance.price}
                  </p>
                </div>
                <p className="text-sm text-muted mb-1 ml-auto">100ml Bottle</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <ShoppingBag size={20} />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">
                  Longevity
                </p>
                <p className="text-muted">{fragrance.longevity}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-2">
                  Best For
                </p>
                <div className="flex flex-wrap gap-2">
                  {fragrance.occasions.map((occasion) => (
                    <span
                      key={occasion}
                      className="px-3 py-1 bg-muted/10 text-primary border border-black text-sm rounded-full"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedFragrances.length > 0 && (
          <div className="py-16">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                You Might Also Like
              </h2>
              <p className="text-muted">
                Similar fragrances for similar occasions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedFragrances.map((related) => (
                <Card
                  key={related.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/products/${related.id}`} className="group">
                    <div className="relative h-72 bg-muted/10 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/500x600?text=" +
                            encodeURIComponent(related.name);
                        }}
                      />
                    </div>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-semibold text-primary">
                        {related.name}
                      </h3>
                      <p className="text-muted text-sm">₹{related.price}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
