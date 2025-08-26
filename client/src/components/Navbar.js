// src/components/Navbar.js
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <header
    className={`fixed top-0 lext-0 w-full z-50 transition-colors duration-300 ${
    scrolled
    ? "bg-gradient-to-r from-cyan-700 to-gray-900 shadow-md"
  : "bg-transparent"
  }`}
  >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          My Portfolio
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900/95 border-t border-white/10">
          <ul className="mx-4 py-3 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 text-gray-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
