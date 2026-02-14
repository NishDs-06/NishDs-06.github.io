import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
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
          <span className="text-xs font-semibold tracking-wider text-primary uppercase">
            {project.category}
          </span>
        </div>
        <motion.h3
          layoutId={`title-${project.id}`}
          className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors"
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  );
};
