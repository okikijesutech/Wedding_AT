"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Home, Plane, CreditCard, X, Copy, Check, ExternalLink } from "lucide-react";

// --- Types & Data ---

const bankDetails = [
  {
    owner: "Groom's Account",
    account: "8125988097",
    bank: "Moniepoint",
    name: "Popoola Ajibola"
  },
  {
    owner: "Bride's Account",
    account: "0124683991",
    bank: "GTB",
    name: "Oluwasina Toluwalope Funmilayo"
  }
];

const homeItems = [
  { id: 1, name: "Premium Blender", price: "₦45,000", image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a05?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 2, name: "Microwave Oven", price: "₦85,000", image: "https://images.unsplash.com/photo-1574269909862-7e1d30bb91d5?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 3, name: "Dinner Set (24pc)", price: "₦35,000", image: "https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?auto=format&fit=crop&q=80&w=300&h=300" },
  { id: 4, name: "Comfy Bedding Set", price: "₦25,000", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=300&h=300" },
];

const registries = [
  {
    id: "honeymoon",
    title: "Honeymoon Fund",
    description: "Help us create unforgettable memories as we start our journey together.",
    icon: <Plane size={32} />,
    cta: "Contribute"
  },
  {
    id: "home",
    title: "Home Essentials",
    description: "Support us in building our brand new home with these essentials.",
    icon: <Home size={32} />,
    cta: "View Registry"
  },
  {
    id: "cash",
    title: "Cash Gift",
    description: "Direct transfers are a simple and cherished way to share your love.",
    icon: <CreditCard size={32} />,
    cta: "Get Details"
  }
];

// --- Sub-components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-ivory rounded-sm shadow-2xl overflow-hidden"
          >
            <div className="p-8 border-b border-gold/10 flex justify-between items-center bg-white">
              <h3 className="text-2xl font-serif text-charcoal">{title}</h3>
              <button onClick={onClose} className="text-charcoal/40 hover:text-gold transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---

export default function Registry() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pledgedItem, setPledgedItem] = useState<{name: string, price: string} | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeModal = () => {
    setActiveModal(null);
    setPledgedItem(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case "honeymoon":
      case "cash":
        return (
          <div className="space-y-6">
            <p className="text-charcoal-light font-light leading-relaxed text-center italic">
              "Your generosity means the world to us. Thank you for being a part of our journey."
            </p>
            <div className="grid gap-6">
              {bankDetails.map((details, idx) => (
                <div key={idx} className="p-6 bg-white border border-gold/10 rounded-sm space-y-4 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gold/10 text-[9px] uppercase tracking-widest text-gold rounded-bl-sm">
                    {details.owner}
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-medium mb-1">Account Number</span>
                      <span className="text-2xl font-serif tracking-widest text-charcoal leading-none">
                        {details.account}
                      </span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(details.account)}
                      className="p-3 bg-gold/5 hover:bg-gold/10 rounded-full transition-colors"
                    >
                      {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-gold" />}
                    </button>
                  </div>
                  <div className="pt-4 border-t border-gold/5 flex justify-between text-[11px] uppercase tracking-wider text-charcoal/60">
                    <span>{details.bank}</span>
                    <span className="text-right">{details.name}</span>
                  </div>
                </div>
              ))}
            </div>
            {activeModal === "honeymoon" && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 text-center uppercase">
                Reference: Honeymoon Gift
              </p>
            )}
          </div>
        );

      case "home":
        return (
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {pledgedItem ? (
                <motion.div 
                  key="pledge-success"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center p-6 bg-gold/5 border border-gold/10 rounded-sm">
                    <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block font-medium">Wonderful choice!</span>
                    <h4 className="text-xl font-serif mb-1">{pledgedItem.name}</h4>
                    <p className="text-sm text-charcoal/60">{pledgedItem.price}</p>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <p className="text-[11px] text-charcoal/60 leading-relaxed text-center mb-4">
                      Please transfer the amount for the <strong>{pledgedItem.name}</strong> to any of the accounts below.
                    </p>
                    <div className="grid gap-4">
                      {bankDetails.map((details, idx) => (
                        <div key={idx} className="p-5 bg-white border border-gold/10 rounded-sm space-y-3 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 px-2 py-0.5 bg-gold/5 text-[8px] uppercase tracking-widest text-gold rounded-bl-sm">
                            {details.owner}
                          </div>
                          <div className="flex justify-between items-end pt-1">
                            <div className="flex flex-col">
                              <span className="text-[9px] uppercase tracking-tighter text-gold mb-1">Account Number</span>
                              <span className="text-xl font-serif tracking-widest leading-none">{details.account}</span>
                            </div>
                            <button 
                              onClick={() => copyToClipboard(details.account)}
                              className="p-2 border border-gold/10 rounded-full hover:bg-gold/10 transition-colors"
                            >
                              {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-gold" />}
                            </button>
                          </div>
                          <div className="flex justify-between text-[10px] uppercase tracking-widest text-charcoal/40 pt-2 border-t border-gold/5">
                            <span>{details.bank}</span>
                            <span>{details.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setPledgedItem(null)}
                    className="w-full text-[10px] uppercase tracking-[0.3em] text-gold py-3 hover:bg-gold/5 transition-colors border border-gold/10 rounded-sm"
                  >
                    Back to Item List
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="item-list"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid gap-4 max-h-[400px]"
                >
                  <p className="text-sm text-charcoal/60 italic mb-2">Select an item to pledge and see transfer details.</p>
                  <div className="space-y-3 pr-2 custom-scrollbar overflow-y-auto">
                    {homeItems.map((gift) => (
                      <div key={gift.id} className="flex items-center gap-4 p-4 bg-white border border-gold/5 rounded-sm hover:border-gold/30 transition-colors group">
                        <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-ivory">
                          <img src={gift.image} alt={gift.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-serif text-charcoal">{gift.name}</h4>
                          <span className="text-xs text-gold/80">{gift.price}</span>
                        </div>
                        <button 
                          onClick={() => setPledgedItem(gift)}
                          className="px-4 py-2 bg-charcoal text-ivory text-[9px] uppercase tracking-wider hover:bg-gold transition-colors"
                        >
                          Pledge
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="registry" className="py-24 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Gifts</span>
          <h2 className="text-4xl md:text-6xl font-serif">Gift Registry</h2>
          <p className="mt-8 text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we have registry options tailored for your convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {registries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col p-12 bg-white/40 glass-card rounded-3xl hover:bg-white/60 hover:shadow-2xl hover:border-gold/30 transition-all duration-700 hover:-translate-y-2 text-center"
            >
              <div className="text-gold mb-10 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-charcoal-light font-light leading-relaxed mb-10 h-20 text-sm italic">
                {item.description}
              </p>

              <button 
                onClick={() => setActiveModal(item.id)}
                className="mt-auto inline-flex items-center justify-center px-8 py-5 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all duration-500 rounded-xl gap-3 group shadow-lg"
              >
                {item.cta}
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-charcoal text-ivory rounded-3xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl mx-auto">
            <Gift className="text-gold mb-8 drop-shadow-glow" size={48} />
            <h3 className="text-3xl font-serif mb-6 text-ivory tracking-wide">A Special Note</h3>
            <p className="font-light text-ivory/80 leading-relaxed italic text-lg opacity-90">
              &quot;We are incredibly thankful for your love and support as we begin our life together. 
              The most important thing to us is having you there to celebrate our special day.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={registries.find(r => r.id === activeModal)?.title || ""}
      >
        {renderModalContent()}
      </Modal>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(var(--gold-rgb), 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(var(--gold-rgb), 0.2);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
