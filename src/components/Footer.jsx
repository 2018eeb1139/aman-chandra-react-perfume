import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Framer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-accent border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-accent font-bold">
                  <Framer />
                </span>
              </div>
              <span className="  text-lg font-semibold">Aman's Perfume</span>
            </div>
            <p className="text-accent/70 text-sm leading-relaxed">
              Premium fragrances crafted with the finest ingredients from around
              the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-accent/70 hover:text-secondary text-sm transition-colors"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/products/1"
                  className="text-accent/70 hover:text-secondary text-sm transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="  font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2 text-sm text-accent/70">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>X</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="  font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-accent/70">
                <Phone size={16} className="text-secondary" />
                +91 9876543210
              </li>
              <li className="flex items-center gap-2 text-sm text-accent/70">
                <Mail size={16} className="text-secondary" />
                contact@amans-perfume.com
              </li>
              <li className="flex items-start gap-2 text-sm text-accent/70">
                <MapPin size={16} className="text-secondary mt-0.5" />
                1/23 Awas Vikas, Kanpur, UP 208017
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-center items-center text-sm text-accent/60">
          <p className="text-center">
            &copy; 2026 Aman's Perfume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
