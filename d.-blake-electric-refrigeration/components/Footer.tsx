import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
                <span className="text-2xl font-extrabold text-white tracking-tighter">
                    D. BLAKE
                </span>
                <span className="block text-xs tracking-[0.2em] text-primary font-medium mt-1">
                    ELECTRIC & REFRIGERATION
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving St. George and surrounding areas with premium commercial refrigeration, HVAC, and electrical services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary text-sm transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">{CONTACT_INFO.address}</li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="text-primary hover:text-white text-sm transition-colors font-bold">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            Copyright © {new Date().getFullYear()} D. Blake Electric & Refrigeration, Inc - All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;