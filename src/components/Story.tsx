"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineEvents = [
  {
    date: "July 2025",
    title: "The First Meeting",
    description: "A simple notification that changed our lives forever. What began as a casual 'Hi' on Facebook Messenger blossomed into a deep, digital connection that eventually led us to this moment.",
    image: "/images/Photoshoot 2.jpeg",
  },
  {
    date: "Aug 2025",
    title: "Our First Date",
    description: "We met for the first time in person at a cozy restaurant. What was meant to be a simple dinner turned into hours of laughter and the realization that we were meant to be.",
    image: "/images/first_date.jpeg",
  },
  {
    date: "Jan 2026",
    title: "The Proposal",
    description: "A secret kept by many, shared with the most important people in our lives. Under the guise of a family dinner in January 2026, Àjìbọ́lá orchestrated a breathtaking surprise. Surrounded by friends and family, he asked the question that made forever our reality.",
    image: "/images/proposal.jpeg",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Our Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif">How It All Began</h2>
        </motion.div>

        <div className="space-y-32">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-lg font-serif italic text-gold">{event.date}</span>
                <h3 className="text-3xl md:text-4xl font-serif">{event.title}</h3>
                <p className="text-lg text-charcoal-light leading-relaxed font-light">
                  {event.description}
                </p>
                <div className="w-12 h-[1px] bg-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
