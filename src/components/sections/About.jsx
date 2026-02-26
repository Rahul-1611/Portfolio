import React from 'react';
import Section from '../layout/Section';
import { Server, Database, Cloud, Shield, Settings, Code } from 'lucide-react';

const About = () => {
    const skills = [
        { category: "Cloud Services (Azure)", items: ["Functions", "Blob Storage", "Cosmos DB", "App Service", "Key Vault", "Event Grid"], icon: Cloud },
        { category: "Backend Development", items: ["Node.js", "Python", "RESTful APIs", "Microservices", "Event-Driven Arch.", "Serverless"], icon: Server },
        { category: "Databases", items: ["SQL Server", "Cosmos DB", "PostgreSQL", "Redis"], icon: Database },
        { category: "DevOps & Security", items: ["Git", "GitHub Actions", "Azure DevOps", "Docker", "RBAC", "Managed Identities"], icon: Shield },
    ];

    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-2 gap-12 text-slate lg:gap-24">
                <div className="space-y-6 text-lg">
                    <p>
                        Hello! I'm Rahul, a software developer deeply passionate about cloud infrastructure and backend engineering. My interest in cloud computing started when I realized the power of decentralized, scalable systems that can handle massive throughput without traditional server limitations.
                    </p>
                    <p>
                        Currently, I am intensely focused on <span className="text-cyan">Microsoft Azure</span>. Though I am early in my professional career, I have dedicated myself to mastering cloud-native design patterns, secure architectures, and automated deployments. I build systems that are not just functional, but resilient and secure by design.
                    </p>
                    <p>
                        I am driven by complex technical challenges, whether it's optimizing a serverless function's cold start time, securing cross-service communication using Managed Identities, or designing a database sharding strategy for high availability.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-lightest-slate mb-6">Technical Arsenal</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skills.map((skillSet, index) => {
                            const Icon = skillSet.icon;
                            return (
                                <div key={index} className="glass p-5 rounded-lg border-t-2 border-t-azure/30">
                                    <div className="flex items-center gap-3 mb-4 text-lightest-slate">
                                        <Icon className="text-azure" size={24} />
                                        <h4 className="font-semibold">{skillSet.category}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm font-mono">
                                        {skillSet.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-cyan text-xs">▹</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
