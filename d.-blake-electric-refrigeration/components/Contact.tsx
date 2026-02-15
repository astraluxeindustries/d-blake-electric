import React from 'react';
import Section from './ui/Section';
import { CONTACT_INFO } from '../constants';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Form */}
        <div>
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact Us</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Visit Us</h4>
                <p className="text-gray-400 text-sm max-w-[200px]">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Call Us</h4>
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email Us</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

             <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Hours</h4>
                <p className="text-gray-400 text-sm">Mon-Fri: 8am - 5pm</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-dark-900 p-8 rounded-2xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-4">Have a question?</h4>
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email*" 
                className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              ></textarea>
            </div>
            <Button variant="primary" className="w-full">Send Message</Button>
            <p className="text-xs text-gray-500 mt-2">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </div>

        {/* Map */}
        <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src={CONTACT_INFO.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Office Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default Contact;