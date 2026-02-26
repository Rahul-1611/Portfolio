import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-cyan font-mono mb-6 ml-1"
                >
                    Hi, my name is
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-lightest-slate mb-4"
                >
                    Rahul.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-slate mb-8 max-w-3xl leading-tight"
                >
                    I architect secure & scalable cloud solutions.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-slate max-w-2xl mb-12 leading-relaxed"
                >
                    I'm a software developer and aspiring Cloud Engineer specializing in Microsoft Azure.
                    I focus on building resilient backend systems, serverless computing architectures,
                    and integrating secure cloud-native services.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-transparent border-2 border-cyan text-cyan font-medium rounded-md hover:bg-cyan/10 transition-colors"
                    >
                        Explore My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-azure/10 text-white font-medium rounded-md border border-azure/50 hover:bg-azure/20 transition-colors"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
