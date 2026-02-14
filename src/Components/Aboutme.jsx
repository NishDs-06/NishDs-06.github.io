import { Code, Cpu, Sparkles, GraduationCap, Terminal, Server } from "lucide-react";
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
            <motion.div variants={slideInLeft} className="space-y-8 z-10">
              <h3 className="text-3xl font-light leading-relaxed text-white">
                Driven by <span className="font-semibold text-primary">systems thinking</span>, logical design, and infrastructure.
              </h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I approach problems <strong>Systems-first, not tool-first</strong>. Whether it's digital logic, automation pipelines, or full-stack web architectures, my focus is on how components interact, fail, and scale.
                </p>
                <p>
                  From designing <strong>VLSI circuits</strong> to deploying <strong>self-hosted infrastructure</strong>, I believe in understanding the stack from the hardware up. I don't just write code; I build reliable, structured systems.
                </p>
              </div>

              {/* Education Block */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-6 mt-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">B.Tech in Electronics Engineering (VLSI Focus)</h4>
                    <p className="text-gray-400">Manipal Institute of Technology, Bengaluru</p>
                    <p className="text-sm text-primary/80 mt-1 font-mono">Expected Graduation: 2028</p>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      Focused on digital systems, logic design, and hardware-level system thinking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-start">
                <a href="#contact" className="cosmic-button group capitalize text-center w-full sm:w-auto"> Get in touch </a>
                <a href="/resume.pdf" target="_blank" className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-center w-full sm:w-auto hover:border-white/30">
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Terminal className="text-primary h-6 w-6" />,
                  title: "System-Level Debugging",
                  desc: "Deep diving into logs, network traffic, and system behavior to fix complex issues at the root."
                },
                {
                  icon: <Server className="text-primary h-6 w-6" />,
                  title: "Infrastructure & Automation",
                  desc: "Building reliability through automation workflows, API integrations, and self-hosted environments."
                },
                {
                  icon: <Cpu className="text-primary h-6 w-6" />,
                  title: "Digital Logic & VLSI",
                  desc: "Designing and simulating hardware circuits (Verilog) to understand computing at its core."
                },
                {
                  icon: <Code className="text-primary h-6 w-6" />,
                  title: "Web Structure & Usability",
                  desc: "Creating clean, functional web interfaces that serve the system's purpose effectively."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all shadow-inner shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1.5 text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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