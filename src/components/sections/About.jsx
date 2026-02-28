import React from 'react';
import Section from '../layout/Section';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="max-w-3xl space-y-6 text-slate leading-relaxed text-lg mx-auto">
                <p>
                    Hello! I am a passionate developer who enjoys building robust, scalable infrastructure
                    and intelligent backend systems. My journey in tech started with a curiosity for how
                    complex digital ecosystems orchestrate millions of requests seamlessly behind the scenes.
                </p>
                <p>
                    Currently, I am intensely focused on architecting solutions across various domains
                    including <span className="text-cyan font-medium">Cloud</span>,
                    <span className="text-emerald-400 font-medium"> AI</span>, and
                    <span className="text-indigo-400 font-medium"> Backend Engineering</span>.
                    I thrive in environments where I can break down monolithic challenges into elegant,
                    event-driven microservices.
                </p>
                <p>
                    Beyond merely writing code, my goal is to design resilient architectures
                    that are secure by default, effortlessly scalable, and highly performant.
                </p>

                {/* Socials / Links */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/50 mt-8">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate hover:text-cyan transition-colors group">
                        <div className="p-3 bg-navy rounded-full border border-slate-700/50 group-hover:border-cyan/50 group-hover:bg-cyan/10 transition-all">
                            <Github size={20} />
                        </div>
                        <span className="font-mono text-sm">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate hover:text-azure transition-colors group">
                        <div className="p-3 bg-navy rounded-full border border-slate-700/50 group-hover:border-azure/50 group-hover:bg-azure/10 transition-all">
                            <Linkedin size={20} />
                        </div>
                        <span className="font-mono text-sm">LinkedIn</span>
                    </a>
                    <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate hover:text-[#FFA116] transition-colors group">
                        <div className="p-3 bg-navy rounded-full border border-slate-700/50 group-hover:border-[#FFA116]/50 group-hover:bg-[#FFA116]/10 transition-all">
                            <Code2 size={20} />
                        </div>
                        <span className="font-mono text-sm">LeetCode</span>
                    </a>
                    <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-slate hover:text-emerald-400 transition-colors group">
                        <div className="p-3 bg-navy rounded-full border border-slate-700/50 group-hover:border-emerald-400/50 group-hover:bg-emerald-400/10 transition-all">
                            <Mail size={20} />
                        </div>
                        <span className="font-mono text-sm">Email</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default About;
