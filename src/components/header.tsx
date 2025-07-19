"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import posthog from "posthog-js";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  {
    name: "Resources",
    dropdown: [
      { name: "Blogs", href: "/blog" },
      { name: "Research", href: "/research" },
      { name: "Tutorials", href: "/tutorials" },
    ],
  },
  { name: "What's New", href: "/updates" },
];

export function SiteHeader({
  onNavigate,
}: {
  onNavigate?: (href: string) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (item: { href: string }) => {
    posthog.capture("nav_clicked", { href: item.href });
    if (item.href.startsWith("#")) {
      if (onNavigate) {
        onNavigate(item.href);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="fixed z-50 w-full border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16 relative">
        {/* Logo kiri */}
        <Link
          className="text-2xl bg-clip-text flex items-center bg-gradient-to-br from-white from-30% to-white/40"
          href="/"
        >
          Raditya Naufal
        </Link>

        {/* Navigation tengah */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          {navigation.map((item) =>
            item.dropdown ? (
              <div className="relative" key={item.name}>
                <button
                  className="flex items-center gap-1 text-md font-medium text-white/70 hover:text-white transition-colors"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  {openDropdown === item.name ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div
                  className={`absolute left-0 mt-2 w-40 rounded-md bg-black border border-zinc-700 shadow-lg z-50 transition-all duration-200 ease-out transform ${
                    openDropdown === item.name
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-zinc-800"
                      onClick={() =>
                        posthog.capture("nav_clicked", { href: sub.href })
                      }
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-medium text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-md font-medium text-white/70 hover:text-white transition-colors"
                onClick={() =>
                  posthog.capture("nav_clicked", { href: item.href })
                }
              >
                {item.name === "What's New" ? (
                  <>
                    {item.name} 🚀
                  </>
                ) : (
                  item.name
                )}
              </Link>
            )
          )}
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          type="button"
          className="md:hidden text-white inline-flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-1 bg-black/80 backdrop-blur-xl border-t border-white/10">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <div className="space-y-1">
                    <button
                      className="flex items-center justify-between w-full text-base font-medium text-white"
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp className="w-4 h-4 text-white" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white" />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-white/80 hover:underline"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="block text-base font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-white hover:text-white/70 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name === "What's New" ? (
                      <>
                        {item.name} 🚀
                      </>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
