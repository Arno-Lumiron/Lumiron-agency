'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Btn } from '@/components/shared/btn';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-line transition-shadow duration-300',
        'bg-[rgba(245,241,232,.92)] backdrop-blur-[12px]',
        scrolled && 'shadow-sm'
      )}
      role="banner"
    >
      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]" aria-label="Navigation principale">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-[22px] font-medium tracking-[-0.02em] lowercase text-encre" aria-label="Lumiron — Retour à l'accueil">
          <span className="w-2 h-2 rounded-full bg-coral flex-shrink-0" aria-hidden="true" />
          lumiron
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-[13px] text-encre list-none m-0 p-0" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-coral transition-colors duration-150 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-coral hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Btn variant="primary" href="#contact" className="hidden md:inline-flex text-[12px]">
            Réserver une démo →
          </Btn>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-encre"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivoire border-t border-line px-5 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-encre hover:text-coral transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Btn variant="primary" href="#contact" className="mt-2 self-start text-[12px]">
            Réserver une démo →
          </Btn>
        </div>
      )}
    </header>
  );
}
