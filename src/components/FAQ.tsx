"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the dress code?",
    answer: "The dress code is Black Tie Optional. We would love for you to celebrate in style!",
  },
  {
    question: "Can I bring a plus one?",
    answer: "We have specific guest counts for each invitation. Please refer to your RSVP form for details.",
  },
  {
    question: "Is there a wedding registry?",
    answer: "Your presence is the greatest gift. If you wish to give, a contribution to our honeymoon fund would be appreciated.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-40 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gold/10 pb-12"
            >
              <h3 className="text-2xl font-serif mb-4">{faq.question}</h3>
              <p className="text-charcoal-light font-light leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
