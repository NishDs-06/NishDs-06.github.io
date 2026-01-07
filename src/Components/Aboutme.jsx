import { Code, Cpu, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export const Aboutme = () => {
  return (
    <section id="about" className="py-24 px-4 relative min-h-screen snap-start flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">About</span>
            <span> Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.2} className="space-y-10">
            <h3 className="text-2xl font-semibold leading-relaxed">
              Driven by focus, consistency, and the pursuit of mastery.
            </h3>

            <p className="text-muted-foreground leading-loose">
              I make things happen, make them better, and make them look good doing it.
              Confidence is easy when the work speaks first.
            </p>

            <p className="text-muted-foreground leading-loose">
              I’ve designed, coded, deployed, debugged — whatever the scene demanded. Frontend polish, backend logic, RAG setups, cloud workflows… I stepped into all of it. Every build became another chapter, another upgrade, another reason to level up.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-start">
              <a href="#contact" className="cosmic-button capitalize text-center"> Get in touch </a>
              <a href="#" className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                Download CV
              </a>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-8">
            <StaggerItem className="group">
              <div className="gradient-border p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">Development</h4>
                    <p className="text-muted-foreground text-sm">Building responsive UIs and practical apps using HTML/CSS/SCSS, Python, and Flask. Turning ideas into clean, working builds.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="group">
              <div className="gradient-border p-6 card-hover shadow-lg shadow-primary/5 group-hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">Personal Interests & Skills</h4>
                    <p className="text-muted-foreground text-sm">Exploring design, UI, Linux workflows, automation, and AI tools like RAG. Always improving how things look, feel, and work.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="group">
              <div className="gradient-border p-6 card-hover shadow-lg shadow-primary/5 group-hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">Electronics & VLSI</h4>
                    <p className="text-muted-foreground text-sm">Studying circuits and hardware design while learning Verilog, VHDL, and digital logic to grow in chip-level engineering.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};