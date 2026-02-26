import React from 'react';
import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-[50px] rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="p-4 bg-azure/10 text-azure rounded-xl">
                        <GraduationCap size={40} />
                    </div>

                    <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-2xl font-bold text-lightest-slate">
                                Bachelor of Science in Computer Science
                            </h3>
                            <div className="text-cyan font-mono text-sm mt-2 md:mt-0 px-3 py-1 bg-cyan/10 rounded-full inline-block">
                                May 2024
                            </div>
                        </div>

                        <h4 className="text-lg text-azure font-medium mb-6">
                            University Name
                        </h4>

                        <div className="space-y-4">
                            <p className="text-slate">
                                Focus on distributed systems, software engineering principles, and database management.
                                Consistently applied theoretical knowledge to practical projects emphasizing high availability
                                and backend performance.
                            </p>

                            <div>
                                <h5 className="text-sm font-semibold text-light-slate mb-2">Relevant Coursework:</h5>
                                <div className="flex flex-wrap gap-2 text-sm text-slate font-mono">
                                    {['Cloud Computing', 'Database Systems', 'Software Architecture', 'Computer Networks', 'Operating Systems', 'Cybersecurity Fundamentals'].map((course, i) => (
                                        <span key={i} className="px-3 py-1 bg-[#112240] rounded border border-white/5">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;
