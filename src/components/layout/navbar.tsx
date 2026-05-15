'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
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
        'fixed top-0 left-0 right-0 z-50 border-b border-line transition-shadow duration-300',
        'bg-[rgba(245,241,232,.92)] backdrop-blur-md',
        scrolled && 'shadow-sm'
      )}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-14" aria-label="Navigation principale">
        {/* Logo */}
        <Link href="/" aria-label="Lumiron — Retour à l'accueil">
          <Image
            src="/logo noir fond blanc v2.png"
            alt="Lumiron"
            width={77}
            height={23}
            priority
            className="h-5 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-[13px] text-encre list-none m-0 p-0" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-coral transition-colors duration-150 relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1.5px] after:bg-coral hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Btn variant="primary" href="#contact" className="hidden md:inline-flex text-[11px] px-3.5 py-2">
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
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-ivoire"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
              }}
              className="px-5 pb-6 pt-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
                  }}
                  className="text-[15px] text-encre hover:text-coral transition-colors py-2 border-b border-line/40 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
                }}
                className="mt-4"
              >
                <Btn variant="primary" href="#contact" className="self-start text-xs">
                  Réserver une démo →
                </Btn>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
