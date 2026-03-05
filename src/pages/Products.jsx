import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { perfumes } from "../data/perfumes.js";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Products() {
  const [sortBy, setSortBy] = useState("featured");

  const filteredFragrances = perfumes;

  const sortedFragrances = [...filteredFragrances].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="  text-4xl sm:text-5xl font-bold mb-2">
            Our Collection
          </h1>
          <p className="text-accent/80">
            Discover the complete range of Luxe Essence fragrances
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Sort By */}
              <div>
                <h3 className="font-semibold text-lg text-primary mb-4">
                  Sort By
                </h3>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-accent text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3 text-muted pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              {/* Info Box */}
              <Card>
                <CardContent className="p-4 space-y-2">
                  <p className="text-sm text-muted">
                    Showing {sortedFragrances.length} of {perfumes.length}{" "}
                    fragrances
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {sortedFragrances.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedFragrances.map((fragrance) => (
                  <ProductCard key={fragrance.id} fragrance={fragrance} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <p className="text-2xl text-primary mb-2">
                      No fragrances found
                    </p>
                    <p className="text-muted">Try adjusting your filters</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
