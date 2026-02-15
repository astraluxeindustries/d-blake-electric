import React from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
            </h3>
            <p className="text-gray-400 text-lg mb-8">
                We take pride in building long-lasting relationships with our clients through trust, reliability, and superior service quality.
            </p>
            <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-white">5.0</div>
                <div className="flex flex-col">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                    </div>
                    <span className="text-gray-400 text-sm">Based on customer feedback</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-dark-900 p-6 rounded-xl border border-white/5 relative"
                >
                    <Quote className="absolute top-4 right-4 text-primary/20" size={40} />
                    <div className="flex text-yellow-500 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <span className="text-primary text-sm">{testimonial.role}</span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;