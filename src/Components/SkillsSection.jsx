import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation-utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 60, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 79, category: "frontend" },
  { name: "Flask", level: 50, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative min-h-screen snap-start flex flex-col justify-center">
      {/* Background Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30vh] h-[30vh] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-medium border",
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-neon mb-2 scale-105"
                  : "bg-white/5 text-muted-foreground border-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 content-start">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                key={skill.name}
                className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Internal Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                    <span className="text-2xl font-bold text-white/10 group-hover:text-white/20 transition-colors">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-purple-400 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};