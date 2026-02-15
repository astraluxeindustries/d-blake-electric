import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1513828583688-601bf041b8c8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1503431103-6cee55ea71e8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1581093450064-08aaeaa3d449?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1533250228229-4c92eb295a62?auto=format&fit=crop&q=80&w=600"
];

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" darker>
      <div className="text-center mb-12">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Work</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Recent Projects</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group aspect-square overflow-hidden rounded-lg"
          >
            <img 
              src={src} 
              alt={`Gallery Project ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-dark-900/80 p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;