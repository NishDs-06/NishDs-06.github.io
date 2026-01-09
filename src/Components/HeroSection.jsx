import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animation-utils";
import { useRef } from "react";

export const HeroSection = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
    const yArrow = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityArrow = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden snap-start selection:bg-white/20"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-[pulse-subtle_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-[pulse-subtle_10s_ease-in-out_infinite_reverse]" />
            </div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="container max-w-5xl mx-auto text-center z-10 relative"
            >
                <div className="space-y-6">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 shadow-glass">
                        <motion.span variants={fadeUp} className="text-sm font-medium text-white/80 tracking-wide">
                            Portfolio 2026
                        </motion.span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        <motion.span
                            variants={fadeUp}
                            className="inline-block mr-3 text-white"
                        >
                            Hi, I'm
                        </motion.span>
                        <motion.span
                            variants={fadeUp}
                            className="inline-block mr-3 text-gradient-primary"
                        >
                            Nishanth
                        </motion.span>
                        <motion.span
                            variants={fadeUp}
                            className="inline-block text-white"
                        >
                            D'souza
                        </motion.span>
                    </h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance"
                    >
                        Engineer exploring tech, design, and everything that inspires.
                        Turning ideas into clean digital work.<br className="hidden md:block" />
                        Always choosing to <span className="text-primary font-bold">Do What Excites</span>
                    </motion.p>

                    <motion.div variants={fadeUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" className="cosmic-button group w-full sm:w-auto">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View My Work
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto border border-transparent hover:border-white/10">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                style={{ y: yArrow, opacity: opacityArrow }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
            </motion.div>
        </section>
    );
};