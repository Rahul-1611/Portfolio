import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 md:py-32 min-h-screen flex flex-col justify-center ${className}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate">
                            {title}
                        </h2>
                        <div className="h-px bg-white/10 flex-grow max-w-xs ml-4"></div>
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
