import { Wrench, Wind, Zap, Thermometer, ShieldCheck, Clock, PenTool } from 'lucide-react';
import { ServiceItem, FAQItem, FeatureItem, Testimonial } from './types';

export const CONTACT_INFO = {
  phone: "435-673-2559",
  email: "Office@DBlakeElectric.com",
  address: "685 North Red Rock Road, Saint George, Utah 84770, United States",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.476483679883!2d-113.5936838847051!3d37.12648897988293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca44c7e6c1c1cd%3A0x1b1b1b1b1b1b1b1b!2s685%20N%20Red%20Rock%20Rd%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hvac-install',
    title: "Installation & Replacement",
    description: "We will provide a thorough exam before deciding to replace your unit. If needed, our skilled technicians have been trained to install the highest rated appliances.",
    image: "https://images.unsplash.com/photo-1581094794329-cd1361daca69?auto=format&fit=crop&q=80&w=800",
    icon: Wrench
  },
  {
    id: 'repair-maintenance',
    title: "Repair & Maintenance",
    description: "Not only will we keep everything running at full capacity but we will offer insight on what you can do to keep your unit maintained between visits.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    icon: Clock
  },
  {
    id: 'air-quality',
    title: "Air Quality",
    description: "Avoid common household allergens with a scheduled filter replacements, and damper adjustments.",
    image: "https://images.unsplash.com/photo-1585747861443-e9d6d539589d?auto=format&fit=crop&q=80&w=800",
    icon: Wind
  },
  {
    id: 'commercial-service',
    title: "Commercial Installation & Service",
    description: "We offer complete Service, Repair, and Replacement of most commercial food service equipment including ice machines and refrigeration.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    icon: Zap
  },
  {
    id: 'sourcing',
    title: "Sourcing & Supply",
    description: "Looking to build out your commercial space? We can help you source/supply, and install all needed components for whatever your project may be, specifically cold storage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    icon: Thermometer
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Reliable HVAC Professionals",
    description: "Whether you need a maintenance check or an emergency repair on a heating or cooling unit, we are available to handle all of your heating, cooling, and ventilation needs. We strive to exceed your expectations by ensuring that each of our clients receives individualized service.",
    icon: ShieldCheck
  },
  {
    title: "Individualized HVAC Options",
    description: "We will work with you to find HVAC solutions that fit your heating and cooling needs. We will provide you with a full consultation to explain all of your available options so that you can choose the system that’s right for your home or business.",
    icon: PenTool
  },
  {
    title: "Customer Satisfaction Guaranteed",
    description: "We serve both residential and commercial clients and offer a variety of money-saving solutions. We combine our use of the highest quality parts and equipment, and our dedication to delivering exceptional service to provide you with top quality service.",
    icon: Wrench
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How often should my systems be serviced?",
    answer: "It is generally recommended to service your HVAC systems at least once a year. Ideally, air conditioning units should be checked in the spring before the summer heat hits, and heating systems should be inspected in the fall before winter arrives. Regular maintenance ensures efficiency and longevity."
  },
  {
    question: "How do I reduce my cooling costs?",
    answer: "To reduce cooling costs, ensure your home is well-insulated, use a programmable thermostat to regulate temperatures when you are away, keep blinds closed during the hottest part of the day, and change air filters regularly. Upgrading to a more energy-efficient unit can also provide significant long-term savings."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Restaurant Owner",
    content: "D. Blake Electric & Refrigeration saved us during a heatwave when our walk-in freezer went down. They were onsite within an hour and fixed the issue. Truly reliable professionals.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Property Manager",
    content: "We use them for all our commercial properties in St. George. The maintenance plans are comprehensive and their technicians are always polite and knowledgeable.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    role: "Homeowner",
    content: "Excellent service on our new AC installation. They walked us through all the options and didn't try to upsell us on things we didn't need. Highly recommended.",
    rating: 5
  }
];