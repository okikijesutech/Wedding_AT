"use client";

import { motion } from "framer-motion";
import { Gift, Home, Plane, CreditCard } from "lucide-react";

const registries = [
  {
    title: "Honeymoon Fund",
    description: "Help us create unforgettable memories as we start our journey together.",
    icon: <Plane size={32} />,
    link: "#",
    cta: "Contribute"
  },
  {
    title: "Home Essentials",
    description: "We've curated a list of things we need for our new home.",
    icon: <Home size={32} />,
    link: "#",
    cta: "View Registry"
  },
  {
    title: "Cash Gift",
    description: "If you'd prefer to give a cash gift, you can find our details here.",
    icon: <CreditCard size={32} />,
    link: "#",
    cta: "Get Details"
  }
];

export default function Registry() {
  return (
    <section id="registry" className="py-24 md:py-40 bg-ivory">
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
            we have registered at the following places.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {registries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-12 bg-champagne/5 border border-gold/10 rounded-sm text-center hover:bg-champagne/10 transition-all duration-500"
            >
              <div className="text-gold mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
              <p className="text-charcoal-light font-light leading-relaxed mb-8 h-20">
                {item.description}
              </p>
              <a 
                href={item.link}
                className="inline-block px-8 py-4 bg-charcoal text-ivory text-[10px] uppercase tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm"
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-charcoal text-ivory rounded-sm text-center"
        >
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
            <Gift className="text-gold mb-6" size={40} />
            <h3 className="text-2xl font-serif mb-4 text-ivory">A Special Note</h3>
            <p className="font-light text-ivory/70 leading-relaxed italic">
              &quot;We are incredibly thankful for your love and support as we begin our life together. 
              The most important thing to us is having you there to celebrate our special day.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
