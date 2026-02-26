import React, { useState } from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ProjectModal from '../ui/ProjectModal';
import { projects } from '../../data/projects';
import { Github, Info } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects" title="Notable Work">
            <p className="text-slate max-w-2xl mb-12">
                My projects emphasize high availability, security, and scalable architecture.
                I focus on the "how" and "why" of the systems I build, leveraging modern cloud
                components to solve complex backend problems.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {projects.map((project, index) => (
                    <Card key={project.id} index={index} className="flex flex-col h-full group p-0 overflow-hidden">
                        {/* Image Top */}
                        <div className="w-full h-48 relative overflow-hidden bg-black/50">
                            {project.images && project.images.length > 0 ? (
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate">
                                    No Image
                                </div>
                            )}
                            <div className="absolute inset-0 bg-azure/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>

                        {/* Content Bottom */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-lightest-slate mb-3 group-hover:text-cyan transition-colors">
                                {project.title}
                            </h3>

                            <div className="text-sm text-slate mb-6 flex-grow">
                                <p className="line-clamp-3">{project.description}</p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-auto pt-4 border-t border-white/5 flex gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 text-lightest-slate rounded-lg transition-colors border border-white/10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={18} />
                                        <span className="text-sm font-semibold">GitHub</span>
                                    </a>
                                )}
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan/10 hover:bg-cyan/20 text-cyan rounded-lg transition-colors border border-cyan/20"
                                >
                                    <Info size={18} />
                                    <span className="text-sm font-semibold">Details</span>
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
};

export default Projects;
