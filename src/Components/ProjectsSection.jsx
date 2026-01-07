import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
    {
        id: 1,
        title: "AI Chatbot Assistant",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        description: "A powerful AI chatbot capable of natural conversations, context retention, and assisting with complex tasks. Built with modern NLP techniques.",
        technologies: ["React", "Python", "TensorFlow", "OpenAI API"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        description: "A full-featured online store with cart functionality, payment gateway integration, and a responsive admin dashboard.",
        technologies: ["Next.js", "Stripe", "Supabase", "Tailwind CSS"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Portfolio v1",
        category: "Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "The first iteration of my personal portfolio, showcasing my early journey and design evolution.",
        technologies: ["HTML", "SASS", "JavaScript", "GSAP"],
        link: "#",
        github: "#"
    }
];

export const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" className="py-20 relative z-10 min-h-screen snap-start flex flex-col justify-center">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore some of my recent work. Click on a card to learn more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-${project.id}`}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative cursor-pointer rounded-xl overflow-hidden glass-card border border-white/10"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div className="aspect-video w-full overflow-hidden">
                                <motion.img
                                    layoutId={`image-${project.id}`}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </motion.div>
                            <motion.div className="p-4 bg-background/40 backdrop-blur-md absolute bottom-0 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <motion.h3 layoutId={`title-${project.id}`} className="text-lg font-bold text-white">
                                    {project.title}
                                </motion.h3>
                                <p className="text-sm text-gray-300">{project.category}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="w-full max-w-2xl bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
                            >
                                {(() => {
                                    const project = projects.find((p) => p.id === selectedId);
                                    if (!project) return null;
                                    return (
                                        <>
                                            <motion.button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                                            >
                                                <X size={20} />
                                            </motion.button>

                                            <motion.div className="relative h-64 md:h-80 w-full">
                                                <motion.img
                                                    layoutId={`image-${project.id}`}
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>
                                            </motion.div>

                                            <div className="p-6 md:p-8">
                                                <motion.h3 layoutId={`title-${project.id}`} className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600 mb-2">
                                                    {project.title}
                                                </motion.h3>
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-purple-300 mb-4">
                                                    {project.category}
                                                </span>

                                                <p className="text-gray-300 mb-6 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                <div className="mb-8">
                                                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech) => (
                                                            <span key={tech} className="px-3 py-1 bg-primary/20 text-primary-foreground text-sm rounded-md border border-primary/20">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <a href={project.link} className="flex-1 cosmic-button flex items-center justify-center gap-2 text-center">
                                                        <ExternalLink size={18} /> Live Demo
                                                    </a>
                                                    <a href={project.github} className="flex-1 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-white">
                                                        <Github size={18} /> Source Code
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                            <div className="absolute inset-0 z-[-1]" onClick={() => setSelectedId(null)}></div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
