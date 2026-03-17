"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Copy, Check, ExternalLink } from "lucide-react";
import { bankDetails, homeItems, registries, type HomeItem } from "@/lib/registry-data";

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
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-lg bg-ivory/95 backdrop-blur-xl border border-gold/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 border-b border-gold/10 flex justify-between items-center bg-white/50">
              <h3 className="text-2xl font-serif text-charcoal">{title}</h3>
              <button 
                onClick={onClose} 
                className="p-2 text-charcoal/40 hover:text-gold hover:bg-gold/5 rounded-full transition-all"
              >
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

const BankDetailsView = ({ isHoneymoon = false }: { isHoneymoon?: boolean }) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(text);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <div className="space-y-6">
      <p className="text-charcoal-light font-light leading-relaxed text-center italic opacity-80">
        &quot;Your generosity means the world to us. Thank you for being a part of our journey.&quot;
      </p>
      <div className="grid gap-6">
        {bankDetails.map((details, idx) => (
          <div key={idx} className="glass p-6 border border-gold/10 rounded-lg space-y-4 shadow-sm relative overflow-hidden group hover:border-gold/30 transition-all duration-300">
            <div className="absolute top-0 right-0 px-3 py-1 bg-gold/10 text-[9px] uppercase tracking-widest text-gold rounded-bl-lg font-bold">
              {details.owner}
            </div>
            <div className="flex justify-between items-end pt-2">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Account Number</span>
                <span className="text-2xl font-serif tracking-widest text-charcoal leading-none">
                  {details.account}
                </span>
              </div>
              <button 
                onClick={() => copyToClipboard(details.account)}
                className="p-3 bg-gold/5 hover:bg-gold/15 rounded-full transition-all transform active:scale-95"
              >
                {copiedAccount === details.account ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-gold" />
                )}
              </button>
            </div>
            <div className="pt-4 border-t border-gold/5 flex justify-between text-[11px] uppercase tracking-wider text-charcoal/60">
              <span className="font-semibold">{details.bank}</span>
              <span className="text-right">{details.name}</span>
            </div>
          </div>
        ))}
      </div>
      {isHoneymoon && (
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 text-center font-bold">
          Reference: Honeymoon Gift
        </p>
      )}
    </div>
  );
};

const HomeEssentialsView = () => {
    const [pledgedItem, setPledgedItem] = useState<HomeItem | null>(null);
    const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(text);
        setTimeout(() => setCopiedAccount(null), 2000);
    };

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
                        <div className="text-center p-6 glass border border-gold/20 rounded-xl bg-gold/5">
                            <span className="text-[10px] uppercase tracking-widest text-gold mb-2 block font-bold">Wonderful choice!</span>
                            <h4 className="text-xl font-serif mb-1">{pledgedItem.name}</h4>
                            <p className="text-sm text-charcoal/60">{pledgedItem.price}</p>
                        </div>
                        
                        <div className="space-y-4 text-left">
                            <p className="text-[11px] text-charcoal/60 leading-relaxed text-center mb-4">
                                Please transfer the amount for the <strong>{pledgedItem.name}</strong> to any of the accounts below.
                            </p>
                            <div className="grid gap-4">
                                {bankDetails.map((details, idx) => (
                                    <div key={idx} className="p-5 bg-white/50 border border-gold/10 rounded-lg space-y-3 shadow-sm relative overflow-hidden active:border-gold/30 transition-all">
                                        <div className="absolute top-0 right-0 px-2 py-0.5 bg-gold/5 text-[8px] uppercase tracking-widest text-gold rounded-bl-sm font-bold">
                                            {details.owner}
                                        </div>
                                        <div className="flex justify-between items-end pt-1">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] uppercase tracking-tighter text-gold mb-1 font-bold">Account Number</span>
                                                <span className="text-xl font-serif tracking-widest leading-none">{details.account}</span>
                                            </div>
                                            <button 
                                                onClick={() => copyToClipboard(details.account)}
                                                className="p-2 border border-gold/10 rounded-full hover:bg-gold/10 transition-colors"
                                            >
                                                {copiedAccount === details.account ? (
                                                    <Check size={16} className="text-green-600" />
                                                ) : (
                                                    <Copy size={16} className="text-gold" />
                                                )}
                                            </button>
                                        </div>
                                        <div className="flex justify-between text-[10px] uppercase tracking-widest text-charcoal/40 pt-2 border-t border-gold/5">
                                            <span className="font-semibold">{details.bank}</span>
                                            <span>{details.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            onClick={() => setPledgedItem(null)}
                            className="w-full text-[10px] uppercase tracking-[0.3em] text-gold py-4 hover:bg-gold/5 transition-all border border-gold/15 rounded-lg hover:border-gold/30 font-bold"
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
                        className="grid gap-4"
                    >
                        <p className="text-sm text-charcoal/60 italic mb-2 text-center">Select an item to pledge and see transfer details.</p>
                        <div className="space-y-3 pr-2 custom-scrollbar max-h-[400px] overflow-y-auto">
                            {homeItems.map((gift) => (
                                <div key={gift.id} className="flex items-center gap-4 p-4 bg-white/40 border border-gold/5 rounded-xl hover:border-gold/30 hover:bg-white/60 transition-all group">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-ivory shadow-inner">
                                        <img src={gift.image} alt={gift.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-serif text-charcoal">{gift.name}</h4>
                                        <span className="text-xs text-gold/80 font-bold">{gift.price}</span>
                                    </div>
                                    <button 
                                        onClick={() => setPledgedItem(gift)}
                                        className="px-5 py-2.5 bg-charcoal text-ivory text-[9px] uppercase tracking-widest hover:bg-gold transition-all rounded-lg font-bold shadow-lg"
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
};

// --- Main Component ---

export default function Registry() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case "honeymoon": return <BankDetailsView isHoneymoon />;
      case "cash": return <BankDetailsView />;
      case "home": return <HomeEssentialsView />;
      default: return null;
    }
  };

  return (
    <section id="registry" className="py-24 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block font-bold">Our Registry</span>
          <h2 className="text-4xl md:text-6xl font-serif">Wedding Gifts</h2>
          <p className="mt-8 text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed opacity-70">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we have registry options tailored for your convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {registries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col p-12 bg-white/50 border border-gold/10 rounded-2xl hover:bg-champagne/10 hover:border-gold/30 transition-all duration-700 text-center relative overflow-hidden backdrop-blur-sm shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/0 group-hover:bg-gold/40 transition-all duration-700" />
              <div className="text-gold mb-10 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
              <p className="text-charcoal-light font-light leading-relaxed mb-10 h-20 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>

              <button 
                onClick={() => setActiveModal(item.id)}
                className="mt-auto inline-flex items-center justify-center px-8 py-5 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 rounded-xl gap-3 group/btn shadow-lg"
              >
                {item.cta}
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100" />
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-charcoal text-ivory rounded-2xl text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto">
            <Gift className="text-gold mb-8 animate-pulse" size={48} />
            <h3 className="text-2xl font-serif mb-6 text-ivory tracking-wide">A Special Note</h3>
            <p className="font-light text-ivory/80 leading-relaxed italic text-lg">
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
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(var(--gold-rgb), 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </section>
  );
}
