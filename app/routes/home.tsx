import React, { useState, useEffect, useRef } from 'react';

const ArrowIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SparkleIcon = ({ className }) => (
  <svg className={className} width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"></path>
  </svg>
);

const FilePdfIcon = ({ className }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-6');
          observerRef.current.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up-el').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="font-sans bg-[#f7f7f8] text-[#181d2d] antialiased overflow-x-hidden selection:bg-[#8ecfc5] selection:text-[#181d2d]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700;800&display=swap');
        
        body { font-family: 'DM Sans', system-ui, sans-serif; }
        
        @keyframes draw-strike { to { width: 100%; } }
        .animate-strike::after {
          content: ''; position: absolute; left: 0; top: 52%; height: 3px;
          background: #8ecfc5; border-radius: 2px; width: 0;
          animation: draw-strike .45s cubic-bezier(.25,.46,.45,.94) forwards 1s;
        }
        
        @keyframes caret {
          0%,6% { width: 0; border-color: #181d2d; }
          46%,65% { width: 100%; border-color: #181d2d; }
          86%,100% { width: 100%; border-color: transparent; }
        }
        .animate-caret {
          font-family: 'DM Mono', monospace;
          animation: caret 6s infinite steps(52, end);
        }
        
        @keyframes photo-in { 0%,36%{ opacity:0; transform:translateY(6px); } 50%,100%{ opacity:1; transform:translateY(0); } }
        .animate-photo-in { animation: photo-in 6s ease infinite; }
        
        @keyframes pdf-float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-8px); } }
        .animate-pdf-float { animation: pdf-float 5s ease-in-out infinite; }
        
        @keyframes marquee-run { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee-run { animation: marquee-run 22s linear infinite; }
        
        @keyframes sc-scroll {
          0%,12% { transform: translateY(0); }
          42%,65% { transform: translateY(-130px); }
          92%,100%{ transform: translateY(0); }
        }
        .animate-sc-scroll { animation: sc-scroll 12s ease-in-out infinite; }
      `}} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#181d2d]/90 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex items-center justify-between h-[66px]">
            <a href="#" className="text-[1.0625rem] font-extrabold text-white no-underline tracking-tight">Clic Diag</a>
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              <li><a href="#steps" className="text-sm font-medium text-white/55 hover:text-white transition-colors">Comment ca marche</a></li>
              <li><a href="#features" className="text-sm font-medium text-white/55 hover:text-white transition-colors">Fonctionnalites</a></li>
              <li><a href="#platform" className="text-sm font-medium text-white/55 hover:text-white transition-colors">Plateformes</a></li>
            </ul>
            <button className="inline-flex items-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:-translate-y-[1px]">
              Demander une demo
              <ArrowIcon />
            </button>
          </div>
        </div>
      </nav>

      <section className="min-h-screen bg-[#181d2d] relative overflow-hidden flex items-center pt-28 pb-20" style={{
        backgroundImage: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(142,207,197,.06) 0%, transparent 60%), radial-gradient(circle 1px at center, rgba(255,255,255,.04) 1px, transparent 1px)',
        backgroundSize: 'auto, 32px 32px'
      }}>
        <div className="max-w-[1200px] mx-auto px-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center w-full">
            
            <div>
              <div className="text-[.7rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] mb-7 flex items-center gap-2.5">
                <span className="w-5 h-[1.5px] bg-[#8ecfc5] rounded-[2px]"></span>
                Rapports techniques
              </div>
              <h1 className="text-[clamp(2.75rem,4.5vw,4rem)] font-extrabold text-white leading-[1.08] tracking-[-.03em] mb-6">
                Fini <span className="relative inline-block text-white/45 animate-strike">Word</span>.<br/>
                Vos rapports,<br/>
                <span className="text-[#8ecfc5]">generés</span><br/>
                en quelques clics.
              </h1>
              <p className="text-[1.075rem] text-white/50 leading-[1.7] max-w-[420px] mb-11">
                Structurez vos observations, intégrez vos photos, laissez l'IA reformuler. Un PDF professionnel prêt a envoyer.
              </p>
              <div className="flex items-center gap-3.5 flex-wrap">
                <button className="inline-flex items-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(142,207,197,.4)]">
                  Demander une demo
                  <ArrowIcon />
                </button>
                <button className="inline-flex items-center gap-2 bg-transparent text-white/75 border-[1.5px] border-white/20 hover:border-white/50 hover:text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all">
                  Voir la demo
                </button>
              </div>
              <p className="text-[.72rem] text-white/30 mt-5">Sans engagement · Prise en main en 10 minutes</p>
            </div>

            <div className="relative hidden lg:block perspective-[1400px]">
              <div className="relative transform -rotate-y-6 rotate-x-2 origin-right transition-transform duration-600 hover:-rotate-y-2 hover:rotate-x-1">
                <div className="bg-white border border-white/10 rounded-2xl p-7 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,.08),0_30px_80px_rgba(0,0,0,.45),0_8px_20px_rgba(0,0,0,.2)]">
                  <div className="flex gap-1.5 mb-5 pb-4 border-b border-[#f1f2f4]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fcd34d]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]"></div>
                  </div>
                  <div className="text-[.6rem] font-bold uppercase tracking-[.08em] text-[#9ca3af] mb-2">1 Structure</div>
                  <div className="bg-[#f9fafb] border border-[#f0f1f2] rounded-[9px] px-4 py-3 mb-3.5">
                    <div className="text-[.58rem] font-bold uppercase tracking-[.06em] text-[#9ca3af] mb-1.5">Observation</div>
                    <div className="text-[.7rem] text-[#374151] whitespace-nowrap overflow-hidden inline-block border-r-2 border-[#181d2d] animate-caret">
                      Une fissure verticale est observée sur le mur porteur.
                    </div>
                  </div>
                  <div className="w-[120px] aspect-[4/3] bg-gradient-to-br from-[#f3f4f6] to-[#e9eaec] border border-[#e9eaec] rounded-lg mb-3.5 relative overflow-hidden animate-photo-in after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-40% after:to-white/30"></div>
                  <div className="pl-4 border-l-2 border-[#f0f1f2]">
                    <div className="text-[.6rem] font-bold uppercase tracking-[.08em] text-[#9ca3af] mb-1.5">1.1 Préconisation</div>
                    <div className="bg-[#f9fafb] border border-[#f0f1f2] rounded-lg px-4 py-[.7rem] flex items-center justify-between gap-3">
                      <p className="text-[.7rem] text-[#4b5563] font-medium">Surveiller l'evolution de la fissure.</p>
                      <div className="inline-flex items-center gap-1 bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 text-[#1a6b63] text-[.62rem] font-bold px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                        <SparkleIcon className="text-[#1a6b63]" />
                        Améliorer
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-12 w-[240px] bg-white border border-[#181d2d]/10 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,.28)] animate-pdf-float z-10">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#f1f2f4] mb-4">
                    <div className="w-9 h-9 bg-[#181d2d]/5 rounded-lg flex items-center justify-center shrink-0">
                      <FilePdfIcon className="text-[#181d2d]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#181d2d]">Rapport_Diag.pdf</div>
                      <div className="text-[10px] text-[#9ca3af] mt-0.5">Généré · 12 pages</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="h-1.5 bg-[#e9eaec] rounded-full w-[70%]"></div>
                    <div className="h-1.5 bg-[#e9eaec] rounded-full w-full"></div>
                    <div className="h-1.5 bg-[#f3f4f6] rounded-full w-[82%]"></div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[#f3f4f6] flex gap-2.5">
                    <div className="flex-1 h-8 bg-[#181d2d] rounded-lg flex items-center justify-center text-[10px] font-bold text-white cursor-pointer">
                      Télécharger
                    </div>
                    <div className="flex-1 h-8 bg-[#f3f4f6] rounded-lg cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#8ecfc5] overflow-hidden py-3.5">
        <div className="flex whitespace-nowrap animate-marquee-run" aria-hidden="true">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Structuration automatique<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Photos intégrées<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Rédaction assistée par IA<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Génération PDF en 1 clic<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Synchronisation mobile<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Numérotation automatique<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
              <div className="inline-flex items-center gap-4 px-8 text-[.8rem] font-bold text-[#181d2d] tracking-[.01em] shrink-0">Rapports professionnels<span className="w-1 h-1 rounded-full bg-[#181d2d]/30 shrink-0"></span></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="bg-white border-b border-[#e5e7eb] py-20">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="px-12 md:border-x border-[#e5e7eb] border-b md:border-b-0 py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600">
              <span className="text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block">3<span className="text-[#8ecfc5]">h</span></span>
              <span className="text-[.875rem] text-[#64748b] font-medium">économisées par rapport en moyenne</span>
            </div>
            <div className="px-12 md:border-r border-[#e5e7eb] border-b md:border-b-0 py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-100">
              <span className="text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block">0</span>
              <span className="text-[.875rem] text-[#64748b] font-medium">mise en forme manuelle requise</span>
            </div>
            <div className="px-12 md:border-r border-[#e5e7eb] py-8 md:py-0 text-center fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-200">
              <span className="text-[clamp(3rem,4.5vw,4.5rem)] font-extrabold text-[#181d2d] tracking-[-.04em] leading-none mb-2 block">1<span className="text-[#8ecfc5] text-[clamp(1.5rem,2vw,2rem)] ml-2 align-middle">clic</span></span>
              <span className="text-[.875rem] text-[#64748b] font-medium">pour générer un PDF professionnel</span>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="bg-[#f7f7f8] py-28">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="mb-16">
            <div className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5">
              <span className="w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block"></span>
              Comment ca marche
            </div>
            <h2 className="text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-[#181d2d]">De l'observation au PDF.<br/>Quatre étapes.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative before:hidden lg:before:block before:content-[''] before:absolute before:top-[2.375rem] before:left-[12.5%] before:right-[12.5%] before:h-[1px] before:bg-[#e5e7eb] before:z-0">
            <div className="relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600">
              <div className="w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10">
                <svg className="stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                <span className="absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal">01</span>
              </div>
              <h3 className="text-[.9375rem] font-bold text-[#181d2d] mb-2">Ajouter des photos</h3>
              <p className="text-[.875rem] text-[#64748b] leading-[1.65]">Importez vos clichés directement dans chaque observation depuis votre téléphone ou ordinateur.</p>
            </div>

            <div className="relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[80ms]">
              <div className="w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10">
                <svg className="stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                <span className="absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal">02</span>
              </div>
              <h3 className="text-[.9375rem] font-bold text-[#181d2d] mb-2">Structurer</h3>
              <p className="text-[.875rem] text-[#64748b] leading-[1.65]">Créez sections et sous-sections librement. La numérotation se met à jour automatiquement.</p>
            </div>

            <div className="relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[160ms]">
              <div className="w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10">
                <svg className="stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"></path><path d="M5 3l1 2.5L8 6.5 5.5 7.5 4.5 10 3.5 7.5 1 6.5 3.5 5.5z" opacity=".4"></path></svg>
                <span className="absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal">03</span>
              </div>
              <h3 className="text-[.9375rem] font-bold text-[#181d2d] mb-2">Reformuler avec l'IA</h3>
              <p className="text-[.875rem] text-[#64748b] leading-[1.65]">En un clic, l'IA améliore la rédaction de vos observations. Vous gardez toujours le contrôle.</p>
            </div>

            <div className="relative pr-7 group fade-up-el opacity-0 translate-y-6 transition-all duration-600 delay-[240ms]">
              <div className="w-[46px] h-[46px] rounded-full bg-white border-[1.5px] border-[#e5e7eb] flex items-center justify-center mb-8 relative z-10 transition-colors duration-250 group-hover:border-[#8ecfc5] group-hover:bg-[#8ecfc5]/10">
                <svg className="stroke-[#9ca3af] transition-colors duration-250 group-hover:stroke-[#1a6b63]" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <span className="absolute -top-2 -right-2 text-[.55rem] font-extrabold bg-[#181d2d] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center tracking-normal">04</span>
              </div>
              <h3 className="text-[.9375rem] font-bold text-[#181d2d] mb-2">Générer le PDF</h3>
              <p className="text-[.875rem] text-[#64748b] leading-[1.65]">Exportez un document PDF mis en page, professionnel, prêt a envoyer a votre client.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="showcase" className="bg-[#181d2d] py-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="mb-16">
            <div className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] flex items-center gap-3 mb-3.5">
              <span className="w-[18px] h-[1.5px] bg-[#8ecfc5] rounded-[2px] block"></span>
              Apercu produit
            </div>
            <h2 className="text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-white">Le rapport devient<br/>l'espace de travail.</h2>
            <p className="text-[1.0625rem] text-white/40 max-w-[460px] leading-[1.7]">Organisez vos observations exactement comme elles apparaîtront dans le document final.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-5 h-auto lg:h-[560px]">
            
            <div className="bg-[#1e2436] border border-white/5 rounded-[18px] p-[1.875rem] flex flex-col overflow-hidden h-[400px] lg:h-auto">
              <div className="text-[.6rem] font-bold uppercase tracking-[.1em] text-white/25 mb-6 pb-4 border-b border-white/5 shrink-0">Editeur</div>
              <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 animate-sc-scroll">
                  <div className="text-base font-bold text-white mb-4 tracking-tight">1 Facade</div>
                  <div className="pl-5 border-l-2 border-white/5 mb-10">
                    <div className="text-[.72rem] font-semibold text-white/35 mb-2.5">1.1 Fissure verticale</div>
                    <div className="bg-black/25 border border-white/5 rounded-lg p-3 mb-3">
                      <div className="text-[.58rem] font-bold uppercase text-white/20 mb-1.5">Observation</div>
                      <p className="text-[.7rem] text-white/55 leading-[1.5]">Fissuration traversante mesurée a 2 mm d'ouverture au niveau de l'allège.</p>
                    </div>
                    <div className="w-[90px] aspect-[4/3] bg-black/25 border border-white/5 rounded-md mt-2"></div>
                    <div className="mt-6">
                      <div className="text-[.72rem] font-semibold text-white/35 mb-2.5">1.2 Humidité</div>
                      <div className="bg-black/25 border border-white/5 rounded-lg p-3 mb-3">
                        <div className="text-[.58rem] font-bold uppercase text-white/20 mb-1.5">Observation</div>
                        <p className="text-[.7rem] text-white/55 leading-[1.5]">Traces de remontées capillaires importantes sur le soubassement.</p>
                      </div>
                      <div className="w-[90px] aspect-[4/3] bg-black/25 border border-white/5 rounded-md mt-2"></div>
                    </div>
                  </div>
                  <div className="text-base font-bold text-white mb-4 tracking-tight">2 Toiture</div>
                  <div className="pl-5 border-l-2 border-white/5 mb-10">
                    <div className="text-[.72rem] font-semibold text-white/35 mb-2.5">2.1 Etanchéité</div>
                    <div className="bg-black/25 border border-white/5 rounded-lg p-3 mb-3">
                      <div className="text-[.58rem] font-bold uppercase text-white/20 mb-1.5">Observation</div>
                      <p className="text-[.7rem] text-white/55 leading-[1.5]">Défaut d'étanchéité constaté en périphérie de la souche de cheminée.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1e2436] border border-white/5 rounded-[18px] p-[1.875rem] flex flex-col overflow-hidden bg-white h-[400px] lg:h-auto">
              <div className="text-[.6rem] font-bold uppercase tracking-[.1em] text-[#9ca3af] mb-6 pb-4 border-b border-[#f0f1f2] shrink-0">PDF Généré</div>
              <div className="flex-1 border border-[#e9eaec] rounded-[10px] overflow-hidden relative">
                <div className="absolute top-5 inset-x-5 animate-sc-scroll">
                  <div className="text-[.9375rem] font-extrabold text-[#181d2d] pb-2.5 border-b-2 border-[#181d2d] mb-5 tracking-tight">Rapport d'Expertise Technique</div>
                  <div className="mb-6">
                    <div className="text-[.8rem] font-bold text-[#181d2d] mb-3.5">1. Facade</div>
                    <div className="text-[.6875rem] font-bold text-[#374151] mb-1.5">1.1 Fissure verticale</div>
                    <p className="text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3">Fissuration traversante mesurée a 2 mm d'ouverture au niveau de l'allège.</p>
                    <div className="w-full aspect-[2.5] bg-[#f3f4f6] border border-[#e9eaec] rounded-md mb-4.5"></div>
                    
                    <div className="text-[.6875rem] font-bold text-[#374151] mb-1.5 mt-4">1.2 Humidité</div>
                    <p className="text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3">Traces de remontées capillaires importantes sur le soubassement.</p>
                    <div className="w-full aspect-[2.5] bg-[#f3f4f6] border border-[#e9eaec] rounded-md mb-4.5"></div>
                  </div>
                  <div>
                    <div className="text-[.8rem] font-bold text-[#181d2d] mb-3.5">2. Toiture</div>
                    <div className="text-[.6875rem] font-bold text-[#374151] mb-1.5">2.1 Etanchéité</div>
                    <p className="text-[.6875rem] text-[#6b7280] leading-[1.55] mb-3">Défaut d'étanchéité constaté en périphérie de la souche de cheminée.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-28">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="mb-16">
            <div className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5">
              <span className="w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block"></span>
              Fonctionnalités
            </div>
            <h2 className="text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3 text-[#181d2d]">Concu pour aller vite.</h2>
            <p className="text-[1.0625rem] text-[#64748b] max-w-[460px] leading-[1.7]">Chaque détail est pensé pour vous faire gagner du temps sur le terrain et au bureau.</p>
          </div>

          <div className="flex flex-col gap-0 mt-16">
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-t border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600">
              <div className="order-2 md:order-1">
                <div className="text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4">Structure</div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]">Hiérarchie libre,<br/>numérotation automatique.</h3>
                <p className="text-base text-[#64748b] leading-[1.7] mb-6">Créez autant de niveaux que nécessaire. L'outil numérote et réorganise tout seul dès que vous bougez une section.</p>
                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]">
                      <CheckIcon className="text-[#1a6b63]" />
                    </span>
                    Sections et sous-sections illimitées
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]">
                      <CheckIcon className="text-[#1a6b63]" />
                    </span>
                    Glisser-déposer pour réorganiser
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]">
                      <CheckIcon className="text-[#1a6b63]" />
                    </span>
                    Numérotation mise a jour en temps réel
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8">
                <div className="w-full">
                  <div className="mb-5">
                    <div className="text-[.75rem] font-bold text-[#181d2d] mb-2 pb-2 border-b border-[#e5e7eb]">1. Facade</div>
                    <div className="px-3 py-2 rounded-[7px] border border-[#8ecfc5]/40 bg-[#8ecfc5]/10 text-[#1a6b63] mb-1.5 text-[.7rem] flex items-center justify-between">1.1 Fissure verticale</div>
                    <div className="pl-5">
                      <div className="px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between">Observation</div>
                      <div className="px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between">Photo</div>
                      <div className="px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between">Préconisation</div>
                    </div>
                    <div className="px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mt-1.5 text-[.7rem] flex items-center justify-between">1.2 Humidité</div>
                  </div>
                  <div>
                    <div className="text-[.75rem] font-bold text-[#181d2d] mb-2 pb-2 border-b border-[#e5e7eb]">2. Toiture</div>
                    <div className="px-3 py-2 rounded-[7px] border border-[#e5e7eb] bg-white text-[#64748b] mb-1.5 text-[.7rem] flex items-center justify-between">2.1 Etanchéité</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-t border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600">
              <div className="order-2">
                <div className="text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4">Photos</div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]">Importez, placez,<br/>c'est dans le PDF.</h3>
                <p className="text-base text-[#64748b] leading-[1.7] mb-6">Associez vos photos directement a chaque observation. Elles s'insèrent automatiquement au bon endroit dans le document généré.</p>
                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Import depuis mobile ou ordinateur
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Plusieurs photos par observation
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Redimensionnement automatique pour le PDF
                  </li>
                </ul>
              </div>
              <div className="order-1 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#dde1e7] to-[#c5cad4] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20"></div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#d4dae0] to-[#bfc5cf] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20"></div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#e0e4ea] to-[#cdd3db] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20"></div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#d8dde5] to-[#c8cfd9] rounded-[9px] border border-[#e5e7eb] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:from-50% after:to-white/20"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center py-16 border-y border-[#e5e7eb] fade-up-el opacity-0 translate-y-6 transition-all duration-600">
              <div className="order-2 md:order-1">
                <div className="text-[.65rem] font-bold uppercase tracking-[.1em] text-[#1a6b63] mb-4">Intelligence artificielle</div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]">Rédaction professionnelle,<br/>en un clic.</h3>
                <p className="text-base text-[#64748b] leading-[1.7] mb-6">Saisissez vos notes brutes, l'IA les reformule dans un langage technique et professionnel. Vous validez, vous conservez le contrôle.</p>
                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Reformulation contextuelle par observation
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Vocabulaire technique du bâtiment
                  </li>
                  <li className="flex items-start gap-2.5 text-[.875rem] text-[#64748b] font-medium leading-[1.5]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 flex items-center justify-center shrink-0 mt-[1px]"><CheckIcon className="text-[#1a6b63]" /></span>
                    Toujours éditable après reformulation
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-[#f7f7f8] border border-[#e5e7eb] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative p-8">
                <div className="flex flex-col gap-3 w-full">
                  <div className="bg-white border border-[#e5e7eb] rounded-[9px] px-4 py-3.5">
                    <div className="text-[.58rem] font-bold uppercase tracking-[.06em] text-[#9ca3af] mb-1.5">Note brute</div>
                    <div className="text-[.7rem] text-[#374151] leading-[1.5]">fissure mur gauche, 2mm env, verticale, bas de fenetre</div>
                  </div>
                  <div className="flex items-center gap-2 text-[.65rem] font-bold text-[#1a6b63] px-1">
                    <SparkleIcon className="text-[#1a6b63]" />
                    IA reformule
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  <div className="bg-[#8ecfc5]/10 border border-[#8ecfc5]/35 rounded-[9px] px-4 py-3.5">
                    <div className="text-[.58rem] font-bold uppercase tracking-[.06em] text-[#1a6b63] mb-1.5">Observation reformulée</div>
                    <div className="text-[.7rem] text-[#1a6b63] font-medium leading-[1.5]">Fissuration verticale traversante d'une ouverture estimée a 2 mm, localisée sous l'appui de fenêtre du mur porteur gauche.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="platform" className="bg-[#f7f7f8] py-28 border-t border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
            <div>
              <div className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[#1a6b63] flex items-center gap-3 mb-3.5">
                <span className="w-[18px] h-[1.5px] bg-[#1a6b63] rounded-[2px] block"></span>
                Multi-plateforme
              </div>
              <h2 className="text-[clamp(1.875rem,3vw,2.5rem)] font-extrabold tracking-[-.03em] mb-3.5 text-[#181d2d]">Sur chantier ou au bureau.</h2>
              <p className="text-[1.0625rem] text-[#64748b] leading-[1.7] max-w-[400px]">Commencez sur le terrain depuis votre téléphone, finalisez sur votre ordinateur. Tout synchronisé, en temps réel.</p>
              <ul className="flex flex-col gap-3 m-0 p-0 list-none mt-8">
                <li className="flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium">
                  <span className="w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0"><CheckIcon className="text-[#1a6b63] w-2.5 h-2.5" /></span>
                  Synchronisation temps réel entre appareils
                </li>
                <li className="flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium">
                  <span className="w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0"><CheckIcon className="text-[#1a6b63] w-2.5 h-2.5" /></span>
                  Prise de photo directement depuis l'app mobile
                </li>
                <li className="flex items-center gap-3 text-[.875rem] text-[#64748b] font-medium">
                  <span className="w-[22px] h-[22px] bg-[#8ecfc5]/10 rounded-full flex items-center justify-center shrink-0"><CheckIcon className="text-[#1a6b63] w-2.5 h-2.5" /></span>
                  Interface adaptée a chaque appareil
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-[195px] h-[390px] bg-white rounded-[36px] border-[7px] border-[#181d2d] p-3 relative shadow-[0_24px_60px_rgba(24,29,45,.15)] shrink-0">
                <div className="w-[68px] h-[13px] bg-[#181d2d] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[10px]"></div>
                <div className="mt-[18px]">
                  <div className="text-[.7rem] font-bold text-[#181d2d] mb-2.5">1.1 Fissure</div>
                  <div className="w-full h-[85px] bg-gradient-to-br from-[#e0e4ea] to-[#cdd3db] rounded-[10px] border border-[#e5e7eb] mb-2.5"></div>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-2.5">
                    <div className="h-[5px] bg-[#e5e7eb] rounded-[3px] mb-1 w-full"></div>
                    <div className="h-[5px] bg-[#e5e7eb] rounded-[3px] w-[70%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 h-[270px] bg-white rounded-[14px] border border-[#e5e7eb] shadow-[0_8px_30px_rgba(24,29,45,.08)] overflow-hidden flex flex-col w-full md:w-auto mt-8 md:mt-0">
                <div className="flex items-center gap-[5px] px-4 py-2.5 border-b border-[#f1f2f4] shrink-0">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#e5e7eb]"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-[#e5e7eb]"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-[#e5e7eb]"></div>
                </div>
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-[120px] border-r border-[#f1f2f4] p-3.5 flex flex-col gap-[7px] shrink-0">
                    <div className="h-[7px] bg-[#eff0f1] rounded w-full"></div>
                    <div className="h-[7px] bg-[#eff0f1] rounded w-[78%]"></div>
                    <div className="h-[7px] bg-[#eff0f1] rounded w-[88%]"></div>
                    <div className="h-[7px] bg-[#eff0f1] rounded w-[65%]"></div>
                  </div>
                  <div className="flex-1 p-3.5 flex flex-col gap-2">
                    <div className="h-3 bg-[#e9eaec] rounded w-[40%]"></div>
                    <div className="h-[5px] bg-[#f3f4f6] rounded w-full mt-1"></div>
                    <div className="h-[5px] bg-[#f3f4f6] rounded w-[84%]"></div>
                    <div className="h-[72px] bg-[#f9fafb] border border-[#e9eaec] rounded-lg mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#181d2d] py-32 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_70%_at_50%_100%,rgba(142,207,197,.1)_0%,transparent_60%)]">
        <div className="max-w-[640px] mx-auto text-center relative z-10 px-10">
          <div className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[#8ecfc5] flex items-center justify-center gap-3 mb-5">
            <span className="w-[18px] h-[1.5px] bg-[#8ecfc5] rounded-[2px] block"></span>
            Commencer maintenant
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-[-.035em] text-white mb-5 leading-[1.1]">
            Plus jamais<br/>un rapport dans <span className="text-[#8ecfc5]">Word</span>.
          </h2>
          <p className="text-[1.075rem] text-white/45 leading-[1.7] mb-12">Rejoignez les professionnels qui gagnent déja des heures sur chaque rapport technique.</p>
          <div className="flex items-center justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-[#8ecfc5] hover:brightness-105 text-[#181d2d] px-7 py-3 rounded-lg font-semibold text-base transition-all hover:-translate-y-[1px]">
              Demander une démonstration
              <ArrowIcon />
            </button>
          </div>
          <p className="text-[.72rem] text-white/30 mt-5">Sans engagement · Aucune carte requise · Prise en main en 10 minutes</p>
        </div>
      </section>

      <footer className="bg-[#181d2d] border-t border-white/5 py-8">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex items-center justify-between">
            <a href="#" className="text-base font-extrabold text-white/50 tracking-[-.035em] no-underline">Clic Diag</a>
            <span className="text-[.78rem] text-white/30">2026 Clic Diag. Tous droits réservés.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}