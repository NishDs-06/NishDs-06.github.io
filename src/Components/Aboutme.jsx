import { Code, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "../lib/animation-utils";

export const Aboutme = () => {
  return (
    <section id="about" className="py-24 relative min-h-screen snap-start flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient-primary">About</span> <span className="text-white">Me</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div variants={slideInLeft} className="space-y-10 z-10">
              <h3 className="text-3xl font-light leading-relaxed text-white">
                Driven by <span className="font-semibold text-primary">focus</span>, consistency, and the pursuit of <span className="font-semibold text-primary">mastery</span>.
              </h3>

              <p className="text-muted-foreground leading-loose text-lg">
                I make things happen, make them better, and make them look good doing it.
                Confidence is easy when the work speaks first.
              </p>

              <p className="text-muted-foreground leading-loose text-lg">
                I’ve designed, coded, deployed, debugged — whatever the scene demanded. Frontend polish, backend logic, RAG setups, cloud workflows… I stepped into all of it. Every build became another chapter, another upgrade, another reason to level up.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-start">
                <a href="#contact" className="cosmic-button group capitalize text-center w-full sm:w-auto"> Get in touch </a>
                <a href="#" className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-center w-full sm:w-auto hover:border-white/30">
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Code className="text-primary h-6 w-6" />,
                  title: "Development",
                  desc: "Building responsive UIs and practical apps using HTML/CSS/SCSS, Python, and Flask. Turning ideas into clean, working builds."
                },
                {
                  icon: <Sparkles className="text-primary h-6 w-6" />,
                  title: "Curiosity & Design",
                  desc: "Exploring design, UI, Linux workflows, automation, and AI. Always improving how things look, feel, and work."
                },
                {
                  icon: <Cpu className="text-primary h-6 w-6" />,
                  title: "Electronics & VLSI",
                  desc: "Studying circuits and hardware design while learning Verilog and digital logic to grow in chip-level engineering."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};