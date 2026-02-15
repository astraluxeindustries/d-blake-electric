import React, { useState } from 'react';
import Section from './ui/Section';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" darker className="py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Common Questions</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">FAQ</h3>
          <p className="text-gray-400 mt-4">Please contact us if you cannot find an answer to your question.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-dark-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;