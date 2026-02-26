import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm text-slate">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-cyan transition-colors">
                    <Mail size={20} />
                </a>
            </div>
            <p>
                Designed and built by <span className="text-light-slate">Rahul</span>
            </p>
            <p className="text-xs mt-2 opacity-60">
                Aspiring Cloud Engineer & Software Developer
            </p>
        </footer>
    );
};

export default Footer;
