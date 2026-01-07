import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden snap-start">
            {/* Background elements if any? */}

            <motion.div
                style={{ y }}
                className="container max-w-4xl mx-auto text-center z-10 relative"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="block md:inline mr-2"
                        >
                            Hi, I'm
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-primary block md:inline mr-2"
                        >
                            Nishanth
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-gradient block md:inline"
                        >
                            D'souza
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Engineer exploring tech, design, and everything that inspires.
                        Turning ideas into clean digital work.<br className="hidden md:block" />
                        Always choosing to <span className="text-primary text-xl font-bold">Do What Excites</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="pt-8"
                    >
                        <a href="#projects" className="cosmic-button capitalize inline-block">
                            View my work
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </motion.div>
        </section>
    );
};