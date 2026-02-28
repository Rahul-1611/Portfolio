import React from 'react';
import Section from '../layout/Section';

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
            </div>
        </Section>
    );
};

export default About;
