import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { SecteursSection } from '@/components/sections/secteurs-section';
import { OffreSection } from '@/components/sections/offre-section';
import { ProduitsSection } from '@/components/sections/produits-section';
import { StatsSection } from '@/components/sections/stats-section';
import { AvisSection } from '@/components/sections/avis-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SecteursSection />
        <OffreSection />
        <ProduitsSection />
        <StatsSection />
        <AvisSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
