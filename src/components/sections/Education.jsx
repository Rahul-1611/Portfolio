import React from 'react';
import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Master of Science in Computer Science",
            university: "George Mason University, Fairfax, VA",
            date: "May 2026",
            description: "Advanced coursework focusing on complex software systems, artificial intelligence, and cloud architectures. Engaging in research and practical implementation of scalable backend services.",
            coursework: ['Advanced Cloud Computing', 'Machine Learning', 'Distributed Systems', 'Advanced Database Systems']
        },
        {
            id: 2,
            degree: "Bachelor of Engineering in Computer Engineering",
            university: "Atharva College of Engineering, Mumbai, India",
            date: "May 2024",
            description: "Focus on distributed systems, software engineering principles, and database management. Consistently applied theoretical knowledge to practical projects emphasizing high availability and backend performance.",
            coursework: ['Cloud Computing', 'Database Systems', 'Software Architecture', 'Computer Networks', 'Operating Systems', 'Cybersecurity Fundamentals']
        }
    ];

    return (
        <Section id="education" title="Education">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="glass p-6 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(100,255,218,0.15)] hover:border-cyan/50 transition-all duration-300 w-full flex flex-col h-full"
                    >
                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-cyan/20 transition-colors" />

                        <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10 flex-grow">
                            <div className="p-4 bg-azure/10 text-azure rounded-xl group-hover:bg-azure group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                <GraduationCap size={40} />
                            </div>

                            <div className="flex-grow flex flex-col h-full w-full">
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-2 gap-3">
                                    <h3 className="text-xl sm:text-2xl font-bold text-lightest-slate group-hover:text-cyan transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-cyan font-mono text-xs sm:text-sm px-3 py-1 bg-cyan/10 rounded-full inline-block whitespace-nowrap border border-cyan/20 w-fit">
                                        {edu.date}
                                    </div>
                                </div>

                                <h4 className="text-base sm:text-lg text-azure font-medium mb-4 sm:mb-6">
                                    {edu.university}
                                </h4>

                                <div className="space-y-4 sm:space-y-6 flex-grow flex flex-col">
                                    <p className="text-sm sm:text-base text-slate leading-relaxed flex-grow">
                                        {edu.description}
                                    </p>

                                    {edu.coursework && edu.coursework.length > 0 && (
                                        <div className="pt-2">
                                            <h5 className="text-xs sm:text-sm font-semibold text-light-slate mb-3 uppercase tracking-wider">Relevant Coursework:</h5>
                                            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate font-mono">
                                                {edu.coursework.map((course, i) => (
                                                    <span key={i} className="px-2 sm:px-3 py-1.5 bg-[#112240]/80 rounded-md border border-white/10 hover:border-cyan/30 hover:text-lightest-slate transition-colors">
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
