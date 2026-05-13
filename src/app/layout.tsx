import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: { icon: '/logo.png' },
  title: 'Lumiron · Agence IA sur-mesure',
  description:
    'Lumiron conçoit et déploie des agents IA, outils sur mesure et intégrations métier pour les entreprises qui veulent gagner en productivité.',
  openGraph: {
    title: 'Lumiron · Agence IA sur-mesure',
    description:
      'Agents conversationnels, outils sur-mesure et intégrations métier. Live en 4 semaines, hébergé en France, conforme RGPD.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${instrumentSerif.variable} h-full scroll-smooth overflow-x-hidden`}>
      <body className="min-h-full flex flex-col pt-18">
        {children}
        <Script id="wave-reveal" strategy="afterInteractive">{`
(function(){
  function splitNode(node, ctx){
    var kids = Array.from(node.childNodes);
    kids.forEach(function(child){
      if(child.nodeType === 3){
        var text = child.nodeValue;
        if(!text) return;
        var frag = document.createDocumentFragment();
        child.nodeValue.split(/(\\s+)/).forEach(function(part){
          if(!part) return;
          if(/^\\s+$/.test(part)){ frag.appendChild(document.createTextNode(part)); return; }
          var word = document.createElement('span');
          word.className = 'word';
          for(var k=0;k<part.length;k++){
            var ch = document.createElement('span');
            ch.className = 'ch';
            ch.style.setProperty('--i', ctx.i++);
            ch.textContent = part[k];
            word.appendChild(ch);
          }
          frag.appendChild(word);
        });
        node.replaceChild(frag, child);
      } else if(child.nodeType === 1 && child.tagName !== 'BR'){
        splitNode(child, ctx);
      }
    });
  }

  function init(){
    var heads = document.querySelectorAll('.wave-reveal');
    heads.forEach(function(h){ splitNode(h, { i: 0 }); });

    if(!('IntersectionObserver' in window)){
      heads.forEach(function(h){ h.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -12% 0px' });

    heads.forEach(function(h){ io.observe(h); });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
        `}</Script>
      </body>
    </html>
  );
}
