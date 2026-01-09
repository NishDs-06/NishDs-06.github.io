import { useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { fadeUp } from "../lib/animation-utils";
import { useScrollLock } from "../hooks/use-scroll-lock";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useScrollLock(isMenuOpen);

    // Smooth scroll handler
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            // Lenis will handle this via CSS scroll-behavior: auto if configured, 
            // or native smooth scroll as fallback
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const threshold = 50;
        setIsScrolled(latest > threshold);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform",
                isScrolled
                    ? "py-3 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-glass"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="w-full px-6 md:px-12 flex items-center justify-between">
                <a
                    className="relative group text-4xl md:text-5xl font-display font-bold italic text-white cursor-pointer tracking-tighter"
                    href="#hero"
                    onClick={(e) => handleScroll(e, "#hero")}
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">ND</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex space-x-4 lg:space-x-6">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="px-5 py-2.5 rounded-full text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-white/80 hover:text-white transition-colors z-50 relative"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#0a0a0b] z-[60] flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Background Elements for Menu */}
                        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] opacity-30" />

                        <div className="flex flex-col space-y-6 text-center relative z-10">
                            {navItems.map((item, key) => (
                                <motion.a
                                    key={key}
                                    href={item.href}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={key} // Delays can be handled by index * delay in variant if simplified
                                    transition={{ delay: key * 0.1 }}
                                    className="text-3xl text-white/90 font-light hover:text-primary transition-colors duration-300"
                                    onClick={(e) => handleScroll(e, item.href)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};