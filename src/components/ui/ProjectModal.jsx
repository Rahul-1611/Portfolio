import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import Badge from './Badge';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const hasImages = project.images && project.images.length > 0;

    const nextImage = (e) => {
        e.stopPropagation();
        if (hasImages) {
            setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (hasImages) {
            setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-[90vw] md:w-[70vw] h-[80vh] md:h-[70vh] bg-dark-navy/90 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-slate hover:text-cyan rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Image Slider */}
                    <div className="w-full md:w-1/2 h-64 md:h-full relative bg-black/50 group">
                        {hasImages ? (
                            <>
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-full object-cover"
                                />
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                        {/* Indicators */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {project.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-cyan' : 'bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate">
                                No images available
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="w-full md:w-1/2 h-full p-8 overflow-y-auto custom-scrollbar flex flex-col">
                        <h2 className="text-3xl font-bold text-lightest-slate mb-4">
                            {project.title}
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.architecture?.map((tech, i) => (
                                <Badge key={i}>{tech}</Badge>
                            ))}
                        </div>

                        <div className="text-slate space-y-4 mb-8 flex-grow">
                            <p className="text-lg text-light-slate">{project.description}</p>
                            <div className="h-px w-full bg-white/10 my-4"></div>
                            <h3 className="text-xl text-lightest-slate font-semibold mt-4">About</h3>
                            <p className="leading-relaxed whitespace-pre-line">
                                {project.details || project.description}
                            </p>

                            {project.highlights && project.highlights.length > 0 && (
                                <>
                                    <h3 className="text-xl text-lightest-slate font-semibold mt-6">Key Highlights</h3>
                                    <ul className="space-y-2 mt-2">
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-cyan mt-1 text-xs">▹</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                        <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 flex-1 py-3 bg-cyan text-navy font-semibold rounded-lg hover:bg-cyan/90 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 flex-1 py-3 bg-white/10 text-lightest-slate font-semibold rounded-lg hover:bg-white/20 transition-colors"
                                >
                                    <Github size={20} />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
