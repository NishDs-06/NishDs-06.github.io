import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation-utils";

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
    },
    { // Example Dummy 2 mentioned in history
        id: 4,
        title: "Neon Task Manager",
        category: "Productivity",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
        description: "A sleek task management app with real-time sync and drag-and-drop kanban boards.",
        technologies: ["Vue.js", "Firebase", "Pinia"],
        link: "#",
        github: "#"
    }
];

export const ProjectsSection = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" className="py-24 relative z-10 min-h-screen snap-start flex flex-col justify-center">
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
                        {projects.map((project) => (
                            <motion.div
                                layoutId={`card-${project.id}`}
                                key={project.id}
                                onClick={() => setSelectedId(project.id)}
                                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-primary/50 transition-colors"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div className="aspect-video w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <motion.img
                                        layoutId={`image-${project.id}`}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold tracking-wider text-primary uppercase">{project.category}</span>
                                    </div>
                                    <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-muted-foreground line-clamp-2 text-sm">{project.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="w-full max-w-3xl bg-[#0f0f11] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10 max-h-[90vh] flex flex-col"
                            >
                                {(() => {
                                    const project = projects.find((p) => p.id === selectedId);
                                    if (!project) return null;
                                    return (
                                        <>
                                            <motion.button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-4 right-4 z-30 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors border border-white/10"
                                            >
                                                <X size={20} />
                                            </motion.button>

                                            <motion.div className="relative h-64 md:h-96 w-full shrink-0">
                                                <motion.img
                                                    layoutId={`image-${project.id}`}
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent"></div>
                                            </motion.div>

                                            <div className="p-8 overflow-y-auto">
                                                <div className="flex flex-col gap-6">
                                                    <div>
                                                        <motion.h3 layoutId={`title-${project.id}`} className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                            {project.title}
                                                        </motion.h3>
                                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary border border-primary/20">
                                                            {project.category}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-300 leading-relaxed text-lg">
                                                        {project.description}
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

                                                    <div className="pt-6 flex gap-4 mt-auto">
                                                        <a href={project.link} className="flex-1 cosmic-button flex items-center justify-center gap-2 text-center group">
                                                            <ExternalLink size={18} />
                                                            <span>Live Demo</span>
                                                        </a>
                                                        <a href={project.github} className="flex-1 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-white font-medium hover:border-white/30">
                                                            <Github size={18} /> Source Code
                                                        </a>
                                                    </div>
                                                </div>
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
