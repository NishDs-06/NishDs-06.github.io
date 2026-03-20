import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation-utils";
import { useScrollLock } from "../hooks/use-scroll-lock";
import projectsData from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState(null);
    useScrollLock(!!selectedId);

    // Filter projects if needed, or just use all
    // const displayProjects = projectsData; 

    return (
        <section id="projects" className="py-24 relative z-10 min-h-screen snap-start flex flex-col justify-center">
            {/* Background enhancement */}
            <div className="absolute top-[10%] left-0 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />


            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Featured <span className="text-gradient-primary">Projects</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A curated selection of work that blends complex logic with clean design.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedId(project.id)}
                            />
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-12 py-10 md:px-24 md:py-16">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-[#0f0f11]/98 backdrop-blur-md"
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="w-full max-w-5xl bg-[#0f0f11] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10 max-h-[90vh] flex flex-col"
                            >
                                {(() => {
                                    const project = projectsData.find((p) => p.id === selectedId);
                                    if (!project) return null;
                                    return (
                                        <>
                                            <motion.button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/20 shadow-lg"
                                            >
                                                <X size={22} />
                                            </motion.button>

                                            <motion.div className="relative h-64 md:h-80 w-full shrink-0">
                                                <motion.img
                                                    layoutId={`image-${project.id}`}
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent"></div>
                                            </motion.div>

                                            <div className="px-8 py-6 overflow-y-auto flex-1 min-h-0">
                                                <div className="flex flex-col gap-6">
                                                    <div>
                                                        <motion.h3 layoutId={`title-${project.id}`} className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                            {project.title}
                                                        </motion.h3>
                                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20">
                                                            {project.category}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                                        {project.longDescription || project.description}
                                                    </p>

                                                    <div className="space-y-3">
                                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Technologies Used</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.map((tech) => (
                                                                <span key={tech} className="px-4 py-1.5 bg-white/5 text-white/90 text-sm rounded-lg border border-white/10">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sticky footer — always visible */}
                                            <div className="shrink-0 px-10 py-5 border-t border-white/10 bg-[#0f0f11] flex gap-4">
                                                {project.link !== "#" && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 cosmic-button flex items-center justify-center gap-2 text-center group">
                                                        <ExternalLink size={18} />
                                                        <span>Live Demo</span>
                                                    </a>
                                                )}
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-white font-medium hover:border-white/30">
                                                    <Github size={18} /> Source Code
                                                </a>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

