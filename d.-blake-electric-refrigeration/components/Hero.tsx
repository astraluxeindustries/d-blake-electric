import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=2000"
          alt="Commercial HVAC System"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-dark-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Est. 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Commercial
            </span><br />
            Refrigeration & <br />
            <span className="text-primary">Comfort Control</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            From Comfort Control and Commercial Refrigeration to Lighting and Efficiency Updates. 
            We Have You Covered for all your Commercial heating and air conditioning needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
                <Button variant="primary" className="w-full sm:w-auto">
                    Get a Quote
                </Button>
            </a>
            <a href="#services">
                <Button variant="outline" className="w-full sm:w-auto">
                    View Services
                </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;