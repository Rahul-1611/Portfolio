import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import { certifications } from '../../data/certifications';
import { Cloud, Code, BrainCircuit, GitMerge, Award, ArrowUpRight, ChevronDown } from 'lucide-react';

// Icon mapping dictionary
const iconMap = {
    cloud: Cloud,
    code: Code,
    ai: BrainCircuit,
    devops: GitMerge,
};

const Certifications = () => {
    const defaultVisibleCount = 3;
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    const hasMore = visibleCount < certifications.length;

    return (
        <Section id="certifications" title="Certifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-12 relative z-10">
                <AnimatePresence>
                    {certifications.slice(0, visibleCount).map((cert, index, currentArray) => {
                        const Icon = iconMap[cert.category] || Award;

                        // Check if this card is the very last one and if the total number of currently displayed cards is odd
                        // If so, it should center itself to form the T-Layout
                        const isLastAndOdd = index === currentArray.length - 1 && currentArray.length % 2 !== 0;

                        return (
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                className={`glass p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(100,255,218,0.15)] hover:border-cyan/50 bg-navy/80 hover:bg-navy/90 flex flex-col group h-full w-full ${isLastAndOdd ? 'lg:col-span-2 lg:w-[calc(50%-1rem)] lg:justify-self-center' : ''
                                    }`}
                            >
                                <div className="absolute top-6 right-6 text-slate opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-cyan transition-all duration-300">
                                    <ArrowUpRight size={24} />
                                </div>

                                {/* Logo and Title Row */}
                                <div className="flex items-center gap-5 mb-4 pr-10">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-azure/10 flex items-center justify-center text-cyan group-hover:bg-azure group-hover:text-white transition-colors duration-300 shadow-inner">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-lightest-slate group-hover:text-cyan transition-colors leading-tight">
                                        {cert.name}
                                    </h3>
                                </div>

                                {/* Description Line */}
                                <div className="text-slate mb-6 flex-grow">
                                    <p>{cert.description}</p>
                                </div>

                                {/* Sub-information Footer */}
                                <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-3">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 text-sm font-medium text-azure">
                                            <span className="text-white/60 text-xs uppercase tracking-wider">Issuer:</span>
                                            {cert.issuer}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate/70 font-mono text-sm">
                                            <span className="text-white/60 text-xs font-sans uppercase tracking-wider">Date:</span>
                                            {cert.date}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="inline-block px-3 py-1 rounded-full bg-azure/10 text-cyan text-xs font-mono font-medium tracking-wide uppercase border border-cyan/10">
                                            {cert.category}
                                        </span>

                                        {cert.keywords && cert.keywords.length > 0 && (
                                            cert.keywords.map((keyword, i) => (
                                                <span key={i} className="inline-block px-2 py-1 rounded-md bg-white/5 text-light-slate text-xs border border-white/10">
                                                    {keyword}
                                                </span>
                                            ))
                                        )}
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                            </motion.a>
                        );
                    })}
                </AnimatePresence>
            </div>

            {hasMore && (
                <div className="mt-12 flex justify-center w-full relative z-10">
                    <button
                        onClick={loadMore}
                        className="group flex flex-col items-center gap-2 text-cyan font-mono text-sm hover:text-white transition-colors"
                    >
                        <span>Load More</span>
                        <div className="w-10 h-10 rounded-full border border-cyan/30 flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/10 transition-all">
                            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>
            )}
        </Section>
    );
};

export default Certifications;
