import React from 'react';
import Section from './ui/Section';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white max-w-xl">
            Comprehensive Cooling & Heating Solutions
          </h3>
        </div>
        <a href="#contact">
            <Button variant="outline">Schedule Service</Button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon && (
                    <div className="p-2 bg-primary rounded-lg text-white">
                      <service.icon size={20} />
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-white">{service.title}</h4>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    Learn More <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;