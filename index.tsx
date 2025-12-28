
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Phone, MapPin, Clock, Menu, X, 
  Heart, Award, ChevronRight, Check, Navigation,
  Target, ShieldCheck, Thermometer, Fingerprint, Sparkles, Info
} from 'lucide-react';

// --- Palette Definition ---
const colors = {
  darkBrown: "#3D261C", // Warm mocha brown
  lightBrown: "#8B5E3C",
  gold: "#D4AF37",
  darkRed: "#7C0A02", // Primary Button Color
  veryDarkRed: "#2A0401", // Almost black red for subtitle and nav
  cream: "#F9F6F0",   // Main Bright Color
  white: "#FFFFFF",
  black: "#0D0705"
};

// --- Translations ---
const translations = {
  de: {
    nav_home: "Start",
    nav_treatments: "Behandlungen",
    nav_contact: "Kontakt",
    nav_book: "Buchen",
    hero_title: "Thai Massage für Frauen",
    hero_subtitle: "im Oerather Mühlenfeld",
    hero_tagline: "Nacken · Rücken · Wärme · Regeneration",
    hero_btn: "Behandlungen entdecken",
    
    phil_label: "🌿 Traditionelle Thaimassage",
    phil_title: "Nacken · Rücken · Wärme · Regeneration",
    phil_desc: "Verspannungen im Nacken- und Rückenbereich beeinträchtigen Wohlbefinden, Schlaf und Konzentration. Unsere Behandlungen konzentrieren sich ausschließlich auf diese Zonen – gezielt, professionell and wirkungsvoll. Wir verbinden traditionelle Thai-Massagegriffe mit Wärmeanwendungen und Kräuterkraft, um Muskulatur zu lockern, Stress abzubauen und neue Energie zu schenken.",
    
    quality_title: "Unser Qualitätsversprezen",
    quality_item1_title: "Zertifiziert",
    quality_item1_desc: "Traditionelle Ausbildung mit langjähriger Erfahrung.",
    quality_item2_title: "Individuell",
    quality_item2_desc: "Jede Massage wird auf Ihre Bedürfnisse abgestimmt.",
    quality_item3_title: "Atmosphäre",
    quality_item3_desc: "Ruhige, hygienische und warme Räumlichkeiten.",
    quality_item4_title: "Diskret",
    quality_item4_desc: "Ein geschützter Raum exklusiv für Frauen.",

    hinweis_title: "Hinweis",
    hinweis_line1: "Unsere Massagen dienen der Entspannung und dem Wohlbefinden.",
    hinweis_line2: "Sie ersetzen keine ärztliche oder therapeutische Behandlung.",
    hinweis_line3: "Keine Erotik – keine medizinischen Heilversprechen.",

    treatments_label: "Unsere Leistungen",
    treatments_title: "Behandlungen",
    price_label: "PREISE",
    invest: "Investition",
    duration: "Dauer",
    contact_label: "KONTAKT",
    contact_title: "Besuchen Sie uns",
    reservation_label: "RESERVIERUNG ERFORDERLICH",
    opening_label: "ÖFFNUNGSZEITEN: DIENSTAG – FREITAG",
    opening_note: "NACH TELEFONISCHER RÜCKSPRACHE.",
    call_btn: "TERMINE VEREINBAREN",
    book_now: "BOOK NOW",
    disclaimer: "Ausschliesslich Seriöse Behandlungen",
    
    service1_title: "Nacken- & Rückenmassage",
    service1_tag: "TARGETED. DEEP ACTING. RELIEVING.",
    service1_intro: "DIESE BEHANDLUNG RICHTET SICH GEZIELT AN MENSCHEN MIT:",
    service1_bullets: [
      "Nacken- und Schulterverspannungen",
      "Rückenbeschwerden",
      "sitzender Tätigkeit oder körperlicher Belastung",
      "stressbedingten Spannungen"
    ],
    service1_note: "Durch Drucktechniken, Dehnungen and Mobilisation wird die Muskulatur gelockert und die Durchblutung gefördert.",
    service1_effect_title: "WIRKUNG",
    service1_effects: [
      "Spürbare Entlastung",
      "Verbesserte Beweglichkeit",
      "Tiefe Entspannung"
    ],
    service2_title: "Kombinationsbehandlung",
    service2_tag: "MAXIMUM EFFECT FOR NECK & BACK",
    service2_intro: "UNSERE KOMBINATIONSMASSAGE VEREINT:",
    service2_bullets: [
      "klassische Thai-Nacken-Rückenmassage",
      "intensive Tiefenwärme with Hot-Stones",
      "entspannender Abschluss with Kräuterstempeln"
    ],
    service2_note: "Ideal bei starken, langanhaltenden Verspannungen oder zur intensiven Regeneration."
  },
  en: {
    nav_home: "Home",
    nav_treatments: "Treatments",
    nav_contact: "Contact",
    nav_book: "Book Now",
    hero_title: "Thai Massage for Women",
    hero_subtitle: "in Oerather Mühlenfeld",
    hero_tagline: "Neck · Back · Warmth · Regeneration",
    hero_btn: "Explore Treatments",
    
    phil_label: "🌿 Traditional Thai Massage",
    phil_title: "Neck · Back · Heat · Regeneration",
    phil_desc: "Tension in the neck and back area affects well-being, sleep, and concentration. Our treatments focus exclusively on these zones – targeted, professional, and effective. We combine traditional Thai massage techniques with heat applications and herbal power to loosen muscles, reduce stress, and restore energy.",
    
    quality_title: "Our Quality Promise",
    quality_item1_title: "Certified",
    quality_item1_desc: "Traditional training with years of experience.",
    quality_item2_title: "Individuell",
    quality_item2_desc: "Every massage is tailored to your specific needs.",
    quality_item3_title: "Atmosphere",
    quality_item3_desc: "Quiet, hygienic, and pleasantly warm rooms.",
    quality_item4_title: "Discreet",
    quality_item4_desc: "A protected and exclusive space for women.",

    hinweis_title: "Notice",
    hinweis_line1: "Our massages serve relaxation and well-being.",
    hinweis_line2: "They do not replace medical or therapeutic treatment.",
    hinweis_line3: "No erotic services – no medical healing promises.",

    treatments_label: "Our Services",
    treatments_title: "Treatments",
    price_label: "PRICE",
    invest: "Investment",
    duration: "Duration",
    contact_label: "CONTACT",
    contact_title: "Visit Us",
    reservation_label: "RESERVATION REQUIRED",
    opening_label: "OPENING HOURS: TUESDAY – FRIDAY",
    opening_note: "AFTER TELEPHONE CONSULTATION.",
    call_btn: "ARRANGE APPOINTMENTS",
    book_now: "BOOK NOW",
    disclaimer: "Exclusively Professional Treatments",
    
    service1_title: "Neck & Back Massage",
    service1_tag: "TARGETED. DEEP ACTING. RELIEVING.",
    service1_intro: "THIS TREATMENT IS SPECIFICALLY AIMED AT PEOPLE WITH:",
    service1_bullets: [
      "Neck and shoulder tension",
      "Back problems",
      "Sedentary work or physical strain",
      "Stress-related tension"
    ],
    service1_note: "Through pressure techniques and mobilization, muscles are loosened and circulation is promoted.",
    service1_effect_title: "EFFECT",
    service1_effects: [
      "Noticeable relief",
      "Improved mobility",
      "Deep relaxation"
    ],
    service2_title: "Combination Treatment",
    service2_tag: "MAXIMUM EFFECT FOR NECK & BACK",
    service2_intro: "OUR COMBINATION MASSAGE COMBINES:",
    service2_bullets: [
      "Classic Thai neck & back massage",
      "Intensive deep heat with Hot-Stones",
      "Relaxing finish with herbal stamps"
    ],
    service2_note: "Ideal for strong, long-lasting tension or intensive regeneration."
  }
};

const shopInfo = {
  name: "Thai massage für Frauen im Oerather Mühlenfeld",
  logoUrl: "https://img2.pic.in.th/logo1ceb0440312f4c5ef.png",
  address: "Dinslakener Ring 27, 41812 Erkelenz",
  city: "41812 ERKELENZ",
  phone: "0151 64319130",
  phoneLink: "tel:015164319130",
  hours: "Dienstag – Freitag",
  hoursNote: "Nach telefonischer Rücksprache.",
  googleMapsUrl: "https://share.google/pdqx9aad1WD1dfox6"
};

const App = () => {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-[${colors.cream}] text-[${colors.darkBrown}] selection:bg-[${colors.gold}] selection:text-[${colors.darkBrown}] antialiased`}>
      {/* Premium Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? `bg-[${colors.cream}]/95 backdrop-blur-md shadow-lg py-3 border-b border-[${colors.gold}]/20` : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-left">
          <div className="flex items-center cursor-pointer group gap-2 md:gap-4" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={shopInfo.logoUrl} 
              alt="Logo" 
              className={`transition-all duration-500 ${scrolled ? 'h-9 md:h-12' : 'h-11 md:h-16'} w-auto`}
            />
            <div className="flex flex-col">
               <span className={`text-[9px] sm:text-[12px] md:text-[16px] font-serif font-bold tracking-[0.05em] uppercase block leading-tight text-[${colors.darkRed}] group-hover:text-[${colors.gold}] transition-colors`}>Thai Massage für Frauen</span>
               <span style={{ color: colors.veryDarkRed }} className="text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.15em] font-medium opacity-90">im Oerather Mühlenfeld</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="nav-link text-[#2A0401] hover:brightness-150"
            >
              {t.nav_home}
            </button>
            <button 
              onClick={() => scrollToSection('behandlungen')} 
              className="nav-link text-[#2A0401] hover:brightness-150"
            >
              {t.nav_treatments}
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')} 
              className="nav-link text-[#2A0401] hover:brightness-150"
            >
              {t.nav_contact}
            </button>
            
            <div className={`h-6 w-px ${scrolled ? `bg-[${colors.darkBrown}]/10` : 'bg-white/10'} mx-2`}></div>
            
            <div className={`flex items-center gap-1 ${scrolled ? `bg-[${colors.darkBrown}]/5` : 'bg-white/5'} p-1 rounded-full border ${scrolled ? `border-[${colors.darkBrown}]/10` : 'border-white/10'}`}>
              <button onClick={() => setLang('de')} className={`px-2.5 py-1 rounded-full text-[9px] font-bold transition-all ${lang === 'de' ? `bg-[${colors.gold}] text-[${colors.darkBrown}]` : 'text-stone-500 hover:text-[#D4AF37]'}`}>DE</button>
              <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-full text-[9px] font-bold transition-all ${lang === 'en' ? `bg-[${colors.gold}] text-[${colors.darkBrown}]` : 'text-stone-500 hover:text-[#D4AF37]'}`}>EN</button>
            </div>

            <a href={shopInfo.phoneLink} className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-105 bg-[${colors.darkRed}] text-white hover:brightness-125`}>
              {t.nav_book}
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${scrolled ? `text-[${colors.darkRed}]` : 'text-white'}`}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`fixed inset-x-0 top-[60px] bg-[${colors.cream}] border-t border-[${colors.gold}]/10 py-10 px-8 flex flex-col space-y-8 animate-in slide-in-from-top duration-300 shadow-2xl h-screen z-[60]`}>
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false);}} className={`mobile-nav-link text-[${colors.veryDarkRed}] text-xl`}>{t.nav_home}</button>
            <button onClick={() => scrollToSection('behandlungen')} className={`mobile-nav-link text-[${colors.veryDarkRed}] text-xl`}>{t.nav_treatments}</button>
            <button onClick={() => scrollToSection('kontakt')} className={`mobile-nav-link text-[${colors.veryDarkRed}] text-xl`}>{t.nav_contact}</button>
            
            <div className="pt-4 border-t border-stone-200">
               <div className="flex gap-4 mb-8">
                  <button onClick={() => setLang('de')} className={`flex-1 py-3 rounded-xl text-[10px] font-bold ${lang === 'de' ? `bg-[${colors.gold}] text-[${colors.darkBrown}]` : 'bg-stone-100 text-stone-500'}`}>DEUTSCH</button>
                  <button onClick={() => setLang('en')} className={`flex-1 py-3 rounded-xl text-[10px] font-bold ${lang === 'en' ? `bg-[${colors.gold}] text-[${colors.darkBrown}]` : 'bg-stone-100 text-stone-500'}`}>ENGLISH</button>
               </div>
               <a href={shopInfo.phoneLink} className={`w-full py-5 bg-[${colors.darkRed}] text-center font-bold tracking-widest rounded-xl text-[11px] uppercase text-white shadow-xl block`}>
                  {t.nav_book}
               </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero section - Height set to 45vh on mobile for wider aspect ratio/zoom out effect */}
        <section id="hero" className="relative h-[45vh] md:h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000" 
               alt="Woman receiving Thai Hot Stone Massage" 
               className="w-full h-full object-cover object-center" 
             />
             <div className={`absolute inset-0 bg-gradient-to-b from-[${colors.darkBrown}]/40 via-transparent to-[${colors.cream}]`}></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-5xl animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
            {/* Main Hero Logo - Closer to text */}
            <img 
              src={shopInfo.logoUrl} 
              alt="Hero Logo" 
              className="h-16 md:h-48 w-auto mb-0 md:mb-1 drop-shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000"
            />
            
            <h1 className="font-serif text-white mb-0.5 md:mb-6 leading-tight">
               <span className="text-[18px] sm:text-4xl md:text-8xl block tracking-tight font-bold mb-0.5">{t.hero_title}</span>
               <span className="text-white text-[7px] sm:text-sm md:text-xl block font-serif font-bold italic uppercase tracking-[0.1em] md:tracking-[0.15em] opacity-95 mt-0 md:mt-2">
                 {t.hero_subtitle}
               </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-12">
               <div className="w-2 md:w-8 h-px bg-white/40"></div>
               <p className="text-white text-[5px] md:text-sm font-bold tracking-[0.05em] md:tracking-[0.3em] uppercase opacity-80">
                 {t.hero_tagline}
               </p>
               <div className="w-2 md:w-8 h-px bg-white/40"></div>
            </div>
            <button 
              onClick={() => scrollToSection('behandlungen')} 
              className={`px-4 md:px-14 py-2 md:py-5 rounded-full font-bold tracking-[0.05em] md:tracking-[0.3em] uppercase text-[6.5px] md:text-[11px] shadow-2xl transition-all hover:scale-105 active:scale-95 bg-[${colors.darkRed}] text-white hover:brightness-125`}
            >
              {t.hero_btn}
            </button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={`py-16 md:py-32 px-6 bg-[${colors.cream}] relative overflow-hidden`}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10 text-left">
             <div className="w-full md:w-2/5 group order-2 md:order-1">
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/2] border-4 md:border-8 border-[${colors.gold}]/10">
                  <img 
                    src="https://img2.pic.in.th/2025-12-24-1.webp" 
                    alt="Traditional Thai Massage Experience" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
             </div>
             <div className="w-full md:w-3/5 space-y-4 md:space-y-6 order-1 md:order-2">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] md:text-[14px] font-black tracking-[0.1em] uppercase text-[${colors.darkRed}]`}>{t.phil_label}</span>
                  </div>
                  <h2 className={`text-[18px] md:text-5xl font-serif text-[${colors.darkBrown}] leading-tight`}>{t.phil_title}</h2>
                </div>
                <div className={`w-16 md:w-20 h-1 bg-[${colors.gold}]/50`}></div>
                <p className="text-stone-600 text-sm md:text-lg font-light leading-relaxed whitespace-pre-line">{t.phil_desc}</p>
                <div className="pt-2 md:pt-4">
                  <button onClick={() => scrollToSection('behandlungen')} className={`flex items-center gap-2 md:gap-3 text-[${colors.gold}] font-bold tracking-widest text-[10px] md:text-xs uppercase group hover:gap-5 transition-all`}>
                     {t.hero_btn} <ChevronRight size={14} />
                   </button>
                </div>
             </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="behandlungen" className={`py-24 md:py-32 px-4 md:px-8 bg-[${colors.darkBrown}]`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-20 text-left md:text-center">
              <span className={`text-[9px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-[${colors.gold}] block`}>{t.treatments_label}</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white">{t.treatments_title}</h2>
              <div className={`w-16 md:w-24 h-px bg-[${colors.gold}]/30 mx-auto md:mx-auto`}></div>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className={`group relative rounded-[2rem] md:rounded-[2.5rem] bg-[${colors.cream}] overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-500`}>
                <div className="w-full md:w-[65%] p-6 md:p-12 flex flex-col space-y-4 md:space-y-6 text-left">
                  <div className="inline-flex">
                    <span className={`bg-[${colors.darkBrown}] text-[${colors.gold}] text-[7px] md:text-[9px] font-bold tracking-[0.1em] md:tracking-[0.15em] px-3 py-1 rounded-full uppercase`}>
                      {t.service1_tag}
                    </span>
                  </div>
                  <h3 className={`text-2xl md:text-5xl font-serif text-[${colors.darkBrown}] leading-tight`}>{t.service1_title}</h3>
                  <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">{t.service1_note}</p>
                  <div className={`w-full h-px bg-[${colors.darkBrown}]/10`}></div>
                  
                  {/* Service 1 Details */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check size={10} className={`text-[${colors.gold}]`} />
                        <span className={`text-[${colors.gold}] text-[8px] md:text-[9px] font-black tracking-[0.1em] uppercase`}>{t.service1_intro}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {t.service1_bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1 h-1 rounded-full bg-[${colors.gold}] shrink-0`}></div>
                            <span className="text-[${colors.darkBrown}] font-medium text-xs md:text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Wirkung Section for Service 1 - Smaller and less prominent */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[${colors.gold}] text-[7px] md:text-[8px] font-bold tracking-[0.05em] uppercase opacity-60`}>{t.service1_effect_title}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {t.service1_effects.map((effect, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Check size={10} className={`text-[${colors.gold}] shrink-0 opacity-50`} />
                            <span className="text-[${colors.darkBrown}] font-medium text-[9px] md:text-[11px] uppercase tracking-wider opacity-70">{effect}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-[35%] bg-white border-t md:border-t-0 md:border-l border-[${colors.gold}]/5 p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6 md:space-y-8`}>
                  <div className="space-y-1">
                    <span className={`text-[${colors.gold}] text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase`}>{t.price_label}</span>
                    <div className="flex items-start justify-center text-[${colors.darkBrown}]">
                      <span className="text-xl md:text-2xl font-serif mt-1 md:mt-2 mr-0.5">€</span>
                      <span className="text-5xl md:text-7xl font-serif leading-none">50</span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-stone-50 text-[${colors.darkBrown}] px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[9px] font-black tracking-widest uppercase border border-stone-100">60 MIN</span>
                    </div>
                  </div>
                  <a href={shopInfo.phoneLink} className={`w-full py-4 rounded-xl bg-[${colors.darkRed}] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl`}>
                    {t.book_now}
                  </a>
                </div>
              </div>

              <div className={`group relative rounded-[2rem] md:rounded-[2.5rem] bg-[${colors.cream}] overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-500`}>
                <div className="w-full md:w-[65%] p-6 md:p-12 flex flex-col space-y-4 md:space-y-6 text-left">
                  <div className="inline-flex">
                    <span className={`bg-[${colors.darkBrown}] text-[${colors.gold}] text-[7px] md:text-[9px] font-bold tracking-[0.1em] md:tracking-[0.15em] px-3 py-1 rounded-full uppercase`}>
                      {t.service2_tag}
                    </span>
                  </div>
                  <h3 className={`text-2xl md:text-5xl font-serif text-[${colors.darkBrown}] leading-tight`}>{t.service2_title}</h3>
                  <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">{t.service2_note}</p>
                  <div className={`w-full h-px bg-[${colors.darkBrown}]/10`}></div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Check size={10} className={`text-[${colors.gold}]`} />
                      <span className={`text-[${colors.gold}] text-[8px] md:text-[9px] font-black tracking-[0.1em] uppercase`}>{t.service2_intro}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {t.service2_bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full bg-[${colors.gold}] shrink-0`}></div>
                          <span className="text-[${colors.darkBrown}] font-medium text-xs md:text-sm">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-[35%] bg-white border-t md:border-t-0 md:border-l border-[${colors.gold}]/5 p-8 md:p-10 flex flex-col justify-center space-y-6 md:space-y-8`}>
                   <div className="text-center space-y-6 md:space-y-8">
                      <span className={`text-[${colors.gold}] text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase`}>{t.price_label}</span>
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                        <div className="space-y-1 text-center">
                          <div className="flex items-start justify-center text-[${colors.darkBrown}]">
                            <span className="text-lg md:text-xl font-serif mt-1 mr-0.5">€</span>
                            <span className="text-4xl md:text-6xl font-serif leading-none">75</span>
                          </div>
                          <div className="mt-1">
                            <span className="bg-stone-50 text-[${colors.darkBrown}] px-2.5 py-1 rounded-full text-[7px] md:text-[8px] font-black tracking-widest uppercase border border-stone-100">90 MIN</span>
                          </div>
                        </div>
                        <div className="space-y-1 text-center">
                          <div className="flex items-start justify-center text-[${colors.darkBrown}]">
                            <span className="text-lg md:text-xl font-serif mt-1 mr-0.5">€</span>
                            <span className="text-4xl md:text-6xl font-serif leading-none">100</span>
                          </div>
                          <div className="mt-1">
                            <span className="bg-stone-50 text-[${colors.darkBrown}] px-2.5 py-1 rounded-full text-[7px] md:text-[8px] font-black tracking-widest uppercase border border-stone-100">120 MIN</span>
                          </div>
                        </div>
                      </div>
                   </div>
                  <a href={shopInfo.phoneLink} className={`w-full py-4 rounded-xl bg-[${colors.darkRed}] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl text-center`}>
                    {t.book_now}
                  </a>
                </div>
              </div>

              {/* Hinweis (Notice) Box - Smaller Typography as requested */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 transition-all hover:bg-white/10">
                <div className={`p-3 md:p-4 rounded-full bg-[${colors.gold}]/10 text-[${colors.gold}] shrink-0`}>
                   <Info size={24} md:size={28} strokeWidth={1.5} />
                </div>
                <div className="space-y-2 text-center md:text-left">
                   <h4 className={`text-white text-lg md:text-xl font-serif font-bold tracking-wide`}>{t.hinweis_title}</h4>
                   <div className="space-y-1">
                      <p className="text-white/70 text-[10px] md:text-[13px] font-light leading-relaxed">{t.hinweis_line1}</p>
                      <p className="text-white/70 text-[10px] md:text-[13px] font-light leading-relaxed">{t.hinweis_line2}</p>
                      <p className={`text-[${colors.gold}] text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] pt-0.5 opacity-80`}>{t.hinweis_line3}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Promise Section */}
        <section className={`py-12 md:py-16 px-6 bg-[${colors.cream}] border-t border-[${colors.gold}]/5`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2 mb-8 md:mb-10 text-left md:text-center">
              <h2 className={`text-xl md:text-4xl font-serif text-[${colors.darkBrown}]`}>{t.quality_title}</h2>
              <div className={`w-10 md:w-12 h-1 bg-[${colors.gold}]/60 mx-auto md:mx-auto rounded-full`}></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col items-center text-center shadow-sm border border-stone-100/50 transition-all hover:shadow-md hover:border-[${colors.gold}]/20">
                  {i === 1 && <Award size={28} className={`text-[${colors.gold}] mb-3 md:mb-4`} strokeWidth={1.25} />}
                  {i === 2 && <Fingerprint size={28} className={`text-[${colors.gold}] mb-3 md:mb-4`} strokeWidth={1.25} />}
                  {i === 3 && <Thermometer size={28} className={`text-[${colors.gold}] mb-3 md:mb-4`} strokeWidth={1.25} />}
                  {i === 4 && <ShieldCheck size={28} className={`text-[${colors.gold}] mb-3 md:mb-4`} strokeWidth={1.25} />}
                  <h4 className={`text-[9px] md:text-[11px] font-black tracking-[0.1em] text-[${colors.darkBrown}] mb-2 md:mb-3 uppercase`}>{t[`quality_item${i}_title`]}</h4>
                  <p className="text-stone-500 text-[10px] md:text-[13px] font-light leading-relaxed">{t[`quality_item${i}_desc`]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="kontakt" className={`py-24 md:py-32 px-6 bg-[${colors.darkBrown}]`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              <div className={`bg-[${colors.white}] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col space-y-6 md:space-y-8 relative overflow-hidden shadow-2xl`}>
                <div className="space-y-1 md:space-y-2 text-left">
                  <span className={`text-[${colors.gold}] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]`}>{t.contact_label}</span>
                  <h2 className={`text-3xl md:text-4xl font-serif text-[${colors.darkBrown}]`}>{t.contact_title}</h2>
                </div>
                
                <div className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#331E15] group cursor-pointer transition-all hover:brightness-125" onClick={() => window.open(shopInfo.googleMapsUrl, '_blank')}>
                  <div className={`p-2 md:p-3 rounded-lg bg-[#3D251A] text-[${colors.gold}]`}><MapPin size={20} md:size={24} /></div>
                  <div className="flex flex-col text-left">
                    <span className="text-white text-sm md:text-lg font-bold leading-tight">{shopInfo.address}</span>
                    <span className={`text-[${colors.gold}] text-[8px] md:text-[9px] font-black tracking-widest uppercase`}>{shopInfo.city}</span>
                  </div>
                </div>

                <div className="relative flex-1 min-h-[220px] md:min-h-[300px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer" onClick={() => window.open(shopInfo.googleMapsUrl, '_blank')}>
                   <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                    alt="Map Location Visual" 
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-black/20"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-[${colors.gold}] shadow-2xl flex items-center justify-center ring-4 md:ring-8 ring-[${colors.gold}]/20 animate-bounce`}>
                        <MapPin size={22} md:size={28} color="#FFF" />
                      </div>
                   </div>
                </div>
                <div className={`absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-[${colors.gold}]`}></div>
              </div>

              <div className={`flex flex-col justify-center items-center text-center p-8 md:p-14 space-y-8 md:space-y-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl`}>
                <div className="space-y-1 md:space-y-2">
                  <span className={`text-[${colors.gold}] text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] drop-shadow-sm`}>{t.reservation_label}</span>
                </div>

                <div className={`w-20 h-20 md:w-32 md:h-32 rounded-full bg-[${colors.gold}]/10 flex items-center justify-center ring-4 md:ring-8 ring-white/5 shadow-inner`}>
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full bg-[${colors.gold}]/20 flex items-center justify-center animate-pulse`}>
                    <Phone size={36} md:size={48} className={`text-[${colors.gold}]`} />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-white font-bold tracking-tight drop-shadow-lg">{shopInfo.phone}</h2>

                <a 
                  href={shopInfo.phoneLink} 
                  className={`px-10 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl bg-[#5C0801] text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-3xl hover:brightness-125 transition-all active:scale-95`}
                >
                  {t.call_btn}
                </a>

                <div className="space-y-1 md:space-y-2 pt-2 md:pt-4">
                  <p className={`text-[${colors.gold}] text-[11px] md:text-[13px] font-black tracking-[0.15em] uppercase whitespace-nowrap`}>{t.opening_label}</p>
                  <p className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase italic">{t.opening_note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-12 md:py-16 px-6 bg-[${colors.cream}] border-t border-[${colors.gold}]/20 text-[${colors.darkBrown}]`}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12 text-center">
          
          <div className="space-y-4 flex flex-col items-center">
            <img 
              src={shopInfo.logoUrl} 
              alt="Logo Footer" 
              className="h-16 md:h-20 w-auto"
            />
            <div className="space-y-1">
              <h4 className={`font-serif text-xl md:text-2xl tracking-[0.1em] uppercase text-[${colors.darkRed}]`}>Thai Massage</h4>
              <p className={`text-[9px] text-[${colors.darkBrown}]/40 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold`}>im Oerather Mühlenfeld</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className={`text-[${colors.darkBrown}] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] hover:text-[${colors.gold}] transition-all`}
            >
              {t.nav_home}
            </button>
            <button 
              onClick={() => scrollToSection('behandlungen')} 
              className={`text-[${colors.darkBrown}] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] hover:text-[${colors.gold}] transition-all`}
            >
              {t.nav_treatments}
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')} 
              className={`text-[${colors.darkBrown}] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] hover:text-[${colors.gold}] transition-all`}
            >
              {t.nav_contact}
            </button>
          </div>

          <p className={`text-[8px] tracking-[0.2em] uppercase text-[${colors.darkBrown}]/30`}>© Thai Massage für Frauen. All Rights Reserved.</p>
        </div>
      </footer>

      <style>{`
        .nav-link {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: all 0.3s;
          position: relative;
        }
        .mobile-nav-link {
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          transition: all 0.3s;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
