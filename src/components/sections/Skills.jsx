import React, { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section';
import { skillsData } from '../../data/skills';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(skillsData[0].categoryId);
    const contentRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        contentRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const handleTabClick = (categoryId) => {
        const targetElement = document.getElementById(categoryId);
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Section id="skills" title="Skills & Expertise">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative mt-12">

                {/* Left Side: Category Tabs (Sticky) */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar gap-2 lg:gap-0 z-10 bg-navy/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none -mx-6 px-6 lg:mx-0 lg:px-0">

                        {/* Mobile Progress Line indicator - hidden on desktop */}
                        <div className="absolute left-6 top-12 bottom-4 w-px bg-slate-800/50 hidden lg:block"></div>

                        {skillsData.map((category) => (
                            <button
                                key={`tab-${category.categoryId}`}
                                onClick={() => handleTabClick(category.categoryId)}
                                className={`
                                    relative flex-none lg:w-full text-left px-4 lg:px-6 py-3 lg:py-5 border-b-2 lg:border-b-0 lg:border-l-2 text-sm lg:text-base font-mono transition-all duration-300 group
                                    ${activeTab === category.categoryId
                                        ? 'border-cyan text-cyan bg-[#112240] rounded-t-md lg:rounded-none lg:rounded-r-md'
                                        : 'border-slate-800 text-slate hover:bg-[#112240]/50 hover:text-lightest-slate'
                                    }
                                `}
                            >
                                <div className="font-semibold text-lg mb-1">{category.title}</div>
                                <div className="hidden lg:block text-xs font-sans text-slate mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {category.subtitle}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Skills Content */}
                <div className="lg:w-2/3 flex flex-col gap-24 lg:gap-32 pb-32">
                    {skillsData.map((category, index) => (
                        <div
                            key={`content-${category.categoryId}`}
                            id={category.categoryId}
                            ref={(el) => (contentRefs.current[index] = el)}
                            className={`scroll-mt-32 relative transition-all duration-700 ease-in-out ${activeTab === category.categoryId
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12 pointer-events-none'
                                }`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-cyan mb-2">{category.title}</h3>
                                <p className="text-slate">{category.subtitle}</p>
                            </div>

                            <div className="flex flex-wrap gap-3 lg:gap-4">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 text-sm font-mono text-lightest-slate bg-transparent border border-slate-700 rounded-full transition-all duration-300 hover:border-cyan hover:text-cyan hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {index === skillsData.length - 1 && (
                                <div className="mt-12 text-slate/50 font-mono text-xs italic">
                                    // edit skills in src/data/skills.js
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Skills;
