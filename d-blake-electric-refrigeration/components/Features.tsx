import React from 'react';
import Section from './ui/Section';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <Section id="about" darker>
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-wider uppercase text-sm mb-2"
        >
          Why Choose Us
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Dedicated to Excellence
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <feature.icon size={100} />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <feature.icon size={32} />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
              {feature.title}
            </h4>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;