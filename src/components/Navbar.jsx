import { useState, useEffect } from 'react';

const WHATSAPP_URL = 'https://wa.me/254796908826';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-xl py-3' : 'bg-white/85 backdrop-blur-lg py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-[#111827] text-2xl font-black tracking-tight">Lynn<span className="text-[#ff7a1a]">.</span></a>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#374151] hover:text-[#ff7a1a] font-semibold relative group transition-colors duration-300">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff7a1a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-[#111827] text-white font-semibold hover:bg-[#ff7a1a] hover:shadow-lg transition-all duration-300">Hire Me</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#111827] focus:outline-none p-2" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4 opacity-100 bg-white shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'}`}>
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-[#374151] hover:text-[#ff7a1a] font-bold text-lg border-b border-gray-200 pb-2 transition-colors">{link}</a>
          ))}
          <div className="pt-4 pb-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="inline-block px-6 py-3 rounded-full bg-[#111827] text-white font-black hover:bg-[#ff7a1a] transition-colors w-full text-center shadow-lg">Hire Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
