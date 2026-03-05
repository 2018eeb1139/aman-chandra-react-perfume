import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { perfumes } from "../data/perfumes.js";
import {
  ArrowRight,
  BottleWine,
  Crown,
  ShieldCheck,
  Toolbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const featuredFragrances = perfumes.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-accent min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-secondary font-medium tracking-widest text-sm mb-4 uppercase">
            Discover Luxury
          </p>
          <h1 className="text-balance   text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Exquisite Fragrances for you and your Loved one's
          </h1>
          <p className="text-lg sm:text-xl text-accent/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Elevate your senses with our collection of premium perfumes, crafted
            from the finest ingredients around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-white flex items-center gap-2 border-white border"
            >
              <Link to="/products">
                Explore Our Collection
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-widest text-sm mb-2 uppercase">
            Our Selection
          </p>
          <h2 className="  text-4xl sm:text-5xl font-bold text-primary mb-4">
            Featured Fragrances
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Discover our most beloved scents, handpicked for their exceptional
            quality and timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredFragrances.map((perfume) => (
            <ProductCard key={perfume.id} fragrance={perfume} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-background border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-secondary font-medium tracking-widest text-sm mb-2 uppercase">
                  About Our Brand
                </p>
                <h2 className="  text-4xl sm:text-5xl font-bold text-primary">
                  Crafted with Passion
                </h2>
              </div>
              <p className="text-muted text-lg leading-relaxed">
                At Aman's Perfume, we believe that fragrance is more than just a
                scent—it's a form of self-expression. Each bottle contains hours
                of careful craftsmanship and the finest ingredients sourced from
                around the world.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Our perfumers have dedicated their lives to creating fragrances
                that tell a story and evoke emotion. We invite you to experience
                the luxury that only the finest ingredients can provide.
              </p>
            </div>
            <div className="bg-muted/10 rounded-lg h-96 flex items-center justify-center">
              <div className="flex flex-col items-center   text-center space-y-4">
                <div>
                  <Crown size={64} />
                </div>

                <p className="text-muted">Premium Quality Since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="  text-4xl sm:text-5xl font-bold text-primary mb-4">
            Why Choose Aman's Perfumes?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Ingredients",
              description:
                "We source only the finest natural and synthetic ingredients from suppliers worldwide.",
              icon: <BottleWine />,
            },
            {
              title: "Expert Craftsmanship",
              description:
                "Our master perfumers have decades of combined experience in fragrance creation.",
              icon: <Toolbox />,
            },
            {
              title: "Exceptional Quality",
              description:
                "Every bottle undergoes rigorous quality control to ensure perfection.",
              icon: <ShieldCheck />,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0 space-y-4">
                <div className="text-4xl text-secondary">{item.icon}</div>
                <CardTitle className="  text-xl text-primary">
                  {item.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="  text-4xl sm:text-5xl font-bold">
            Ready to Discover Your Signature Scent?
          </h2>
          <p className="text-lg text-accent/80">
            Explore our complete collection and find the fragrance that speaks
            to you.
          </p>
          <Button
            asChild
            variant="default"
            size="lg"
            className="border-white border inline-flex items-center gap-2"
          >
            <Link to="/products">
              Shop Now
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
