import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { certifications } from '../../data/certifications';
import { Cloud, Code, Server, Award } from 'lucide-react';

// Icon mapping dictionary
const iconMap = {
    Cloud: Cloud,
    Code: Code,
    Server: Server,
};

const Certifications = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => {
                    const Icon = iconMap[cert.icon] || Award;
                    return (
                        <Card key={cert.id} index={index} className="flex items-center gap-6 p-6">
                            <div className="flex-shrink-0 p-4 bg-azure/10 rounded-full text-cyan">
                                <Icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-lightest-slate mb-1">
                                    {cert.name}
                                </h3>
                                <div className="text-sm text-slate mb-1 font-medium text-azure">
                                    {cert.issuer}
                                </div>
                                <div className="text-xs text-slate opacity-70 font-mono">
                                    Issued: {cert.date}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
};

export default Certifications;
