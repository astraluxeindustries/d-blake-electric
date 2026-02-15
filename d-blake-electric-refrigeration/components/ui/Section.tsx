import React from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className, darker = false }) => {
  return (
    <section 
      id={id} 
      className={clsx(
        "py-20 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden",
        darker ? "bg-dark-900" : "bg-dark-800",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;