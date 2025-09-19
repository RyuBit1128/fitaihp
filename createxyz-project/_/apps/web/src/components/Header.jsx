"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "サービス", href: "/#services" },
    { label: "導入事例", href: "/#cases" },
    { label: "ビジョン", href: "/#vision" },
    { label: "会社案内", href: "/about" },
    { label: "お問い合わせ", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left group - Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center">
              <img
                src="https://ucarecdn.com/39217977-356d-4a47-b999-a052e6c3019d/-/format/auto/"
                alt="FitAI"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Right group - Navigation items (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-black/80 font-medium text-[15px] hover:text-black transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                {item.label}
              </a>
            ))}

            {/* Contact button */}
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-[14px] font-medium transition-colors duration-200"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              無料相談
            </a>
          </nav>

          {/* Hamburger menu (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-150 rounded-md"
          >
            <Menu size={24} className="text-black" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black/80 font-medium text-[15px] hover:text-black transition-colors cursor-pointer"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-[14px] font-medium transition-colors duration-200 w-fit"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                無料相談
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
