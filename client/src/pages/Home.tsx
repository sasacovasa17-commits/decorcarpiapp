import { useState } from "react";
import { Link } from "wouter";
import {
  Camera, Search, ChevronDown, Phone,
  Home as HomeIcon, ClipboardList, Lightbulb,
  Settings, FolderOpen, Palette, HelpCircle,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const textures = [
    { name: "Auto Spaccante Craqueèle", img: "https://placeholder.co/300x300/222/d4af37?text=Craqueele" },
    { name: "Fila di Seta", img: "https://placeholder.co/300x300/222/d4af37?text=Seta" },
    { name: "Pietra Zen", img: "https://placeholder.co/300x300/222/d4af37?text=Zen" },
    { name: "Effetto Cimento", img: "https://placeholder.co/300x300/222/d4af37?text=Cimento" },
    { name: "Pelle di Elefante", img: "https://placeholder.co/300x300/222/d4af37?text=Pelle" },
    { name: "Stencil", img: "https://placeholder.co/300x300/222/d4af37?text=Stencil" },
    { name: "Effetto Perlato", img: "https://placeholder.co/300x300/222/d4af37?text=Perlato" },
    { name: "Pietra Spaccata", img: "https://placeholder.co/300x300/222/d4af37?text=Spaccata" },
    { name: "Stucco Venezian", img: "https://placeholder.co/300x300/222/d4af37?text=Venezian" },
    { name: "Pietra Bamboo", img: "https://placeholder.co/300x300/222/d4af37?text=Bamboo" },
    { name: "Marmorino", img: "https://placeholder.co/300x300/222/d4af37?text=Marmorino" },
    { name: "Marmorino Premium", img: "https://placeholder.co/300x300/222/d4af37?text=Premium" }
  ];

  const projects = [
    { title: "Soggiorno Moderno", desc: "Effetto Cimento - finitura industriale e sofisticata" },
    { title: "Soggiorno Lussuoso", desc: "Stucco Veneziano - effetto marmoreo con venature dorate" },
    { title: "Soggiorno Elegante", desc: "Auto Spaccante Craqueèle - effetto naturale con venature" },
    { title: "Soggiorno Contemporaneo", desc: "Marmorino - finitura morbida e sofisticata" }
  ];

  const faqs = [
    { q: "Come funziona il calcolo del preventivo?", a: "Il calcolo si basa sulla metratura e sui materiali scelti." },
    { q: "Perché il prezzo può variare?", a: "Varia in base allo stato delle pareti e alla complessità del lavoro." },
    { q: "Quanto tempo ci vuole per completare un progetto?", a: "Mediamente dai 3 ai 7 giorni lavorativi." },
    { q: "Quali sono i vantaggi dello stucco veneziano?", a: "È traspirante, antimuffa e di grande valore estetico." },
    { q: "Il trattamento antimuffa è efficace?", a: "Sì, utilizziamo prodotti certificati ad alta resistenza." },
    { q: "Offrite garanzia sui vostri lavori?", a: "Sì, ogni intervento è coperto da garanzia di qualità." },
    { q: "Quali colori e texture sono disponibili?", a: "Oltre 50 varianti personalizzabili." },
    { q: "Come posso richiedere un preventivo?", a: "Tramite la sezione dedicata o contattandoci su WhatsApp." },
    { q: "Lavorate solo a Carpi?", a: "Operiamo a Carpi e in tutte le province limitrofe." },
    { q: "Come mantenere le finiture nel tempo?", a: "Pulizia semplice con panno umido e prodotti non aggressivi." }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-32 font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="pt-6 pb-4 flex flex-col items-center border-b border-zinc-900 bg-black/90 sticky top-0 z-[100]">
        <div className="flex gap-4 mb-6">
          <span className="text-xl grayscale-0">🇮🇹</span>
          <span className="text-xl grayscale opacity-40">🇷🇴</span>
          <span className="text-xl grayscale opacity-40">🇬🇧</span>
          <button className="bg-[#d4af37] text-black text-[10px] font-bold px-3 py-1 rounded-sm ml-2">
            ✨ PRO ACTIV
          </button>
        </div>
        <h1 className="text-[#d4af37] text-3xl font-serif tracking-[0.25em] mb-1">DECOR CARPI</h1>
        <p className="text-[9px] tracking-[0.4em] uppercase text-zinc-500">Visualizzatore Texture</p>
      </header>

      <main className="p-4 space-y-10">
        
        {/* ACTION BUTTONS */}
        <section className="text-center space-y-4 pt-4">
          <p className="text-sm text-zinc-400 px-4 leading-relaxed font-light">
            Fotografa la tua stanza e scopri come appare con qualsiasi texture o colore Decor Carpi
          </p>
          <Button className="w-full bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold h-14 rounded-none flex gap-3 text-xs tracking-widest uppercase transition-all">
            <Camera size={18} />
            Inizia la Visualizzazione
          </Button>
          <button className="w-full border border-zinc-800 py-4 text-[#d4af37] text-[10px] flex justify-center items-center gap-2 uppercase tracking-tighter">
            <Search size={14} />
            Cerca Ispirazione Decorativa
          </button>
        </section>

        {/* COME FUNZIONA */}
        <section className="space-y-6 px-2">
          <h3 className="text-[#d4af37] font-serif text-xl italic">Come funziona?</h3>
          <div className="space-y-5">
            {[
              { icon: <Camera size={20}/>, t: "Fotografa", d: "Scatta una foto alla tua stanza o caricane una dalla galleria" },
              { icon: <LayoutGrid size={20}/>, t: "Scegli la texture", d: "Seleziona tra 10 finiture decorative Decor Carpi" },
              { icon: <Settings size={20}/>, t: "L'AI genera", d: "L'intelligenza artificiale applica la texture sulle tue pareti" }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-5 group cursor-pointer">
                <div className="p-3 border border-[#d4af37]/40 rounded-full text-[#d4af37] group-hover:bg-[#d4af37]/10 transition-colors">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold tracking-wide uppercase">{step.t}</h4>
                  <p className="text-[11px] text-zinc-500 leading-snug">{step.d}</p>
                </div>
                <ChevronDown size={18} className="-rotate-90 text-zinc-700" />
              </div>
            ))}
          </div>
        </section>

        {/* FINITURE GRID */}
        <section>
          <h2 className="text-xl font-serif mb-5 text-[#d4af37] italic">Finiture disponibili</h2>
          <div className="grid grid-cols-3 gap-1">
            {textures.map((t, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-zinc-900">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-2">
                    <p className="text-[8px] leading-tight font-light uppercase tracking-tighter">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROGETTI */}
        <section>
          <h2 className="text-xl font-serif mb-5 text-[#d4af37] italic">I Nostri Progetti</h2>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Trasformazioni Realizzate</p>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <div key={i} className="space-y-2">
                <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white z-10"></div>
                  <img src="https://placeholder.co/400x300/333/666?text=Before+After" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[#d4af37] text-[11px] font-bold uppercase tracking-tighter">{p.title}</h4>
                <p className="text-[9px] text-zinc-500 leading-tight">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pb-10">
          <h2 className="text-xl font-serif mb-6 text-[#d4af37] italic">Domande Frequenti</h2>
          <div className="space-y-0.5">
            {faqs.map((f, i) => (
              <div key={i} className="bg-zinc-950/50 border border-zinc-900 mb-2 overflow-hidden" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex justify-between items-center p-4 cursor-pointer">
                  <span className="text-[11px] font-medium text-zinc-300 uppercase tracking-tighter">{f.q}</span>
                  <ChevronDown size={14} className={`text-[#d4af37] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                <div className={`px-4 transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-32 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-[11px] text-zinc-500 font-light border-t border-zinc-900 pt-3">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* NAVIGATION BAR - Full Design */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-zinc-800 px-2 py-3 z-[100]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {[
            { icon: <HomeIcon size={20}/>, label: "Home", active: true },
            { icon: <Palette size={20}/>, label: "Combina Stili" },
            { icon: <ClipboardList size={20}/>, label: "Prev." },
            { icon: <Lightbulb size={20}/>, label: "Ispir." },
            { icon: <Settings size={20}/>, label: "Impost." },
            { icon: <Phone size={20}/>, label: "Cont." },
            { icon: <FolderOpen size={20}/>, label: "Prog." }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all ${item.active ? "text-[#d4af37]" : "text-zinc-600 hover:text-zinc-400"}`}>
              {item.icon}
              <span className="text-[8px] font-medium tracking-tighter">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}