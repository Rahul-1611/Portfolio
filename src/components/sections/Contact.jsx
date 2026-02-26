import React from 'react';
import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" className="text-center md:text-left">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
                    Ready to Build Together?
                </h3>

                <p className="text-lg text-slate max-w-2xl mb-12">
                    I am currently pursuing new opportunities as a Cloud Engineer or Backend Developer.
                    Whether you have an open role, a complex cloud architecture problem, or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:your.email@example.com"
                    className="px-8 py-4 bg-transparent border border-cyan text-cyan font-bold rounded-md hover:bg-cyan/10 transition-all duration-300 inline-block mb-16"
                >
                    Say Hello
                </a>

                <div className="w-full flex justify-center gap-12 pt-8 border-t border-white/10">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-slate hover:text-cyan transition-colors group">
                        <div className="p-4 bg-navy-light rounded-full group-hover:bg-cyan/10 transition-colors">
                            <Github size={28} />
                        </div>
                        <span className="font-mono text-sm">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-slate hover:text-azure transition-colors group">
                        <div className="p-4 bg-navy-light rounded-full group-hover:bg-azure/10 transition-colors">
                            <Linkedin size={28} />
                        </div>
                        <span className="font-mono text-sm">LinkedIn</span>
                    </a>
                    <a href="mailto:your.email@example.com" className="flex flex-col items-center gap-3 text-slate hover:text-cyan transition-colors group">
                        <div className="p-4 bg-navy-light rounded-full group-hover:bg-cyan/10 transition-colors">
                            <Mail size={28} />
                        </div>
                        <span className="font-mono text-sm">Email</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
