import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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

    // Smooth scroll handler
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            // Check if lenis is available globally or fallback to native
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-4 bg-background/40 backdrop-blur-xl border-b border-white/5 shadow-sm"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
                <a className="text-4xl font-normal font-script text-white cursor-pointer hover:opacity-80 transition-opacity" href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
                    Nishanth D'souza
                </a>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            className="fixed inset-0 bg-background/90 z-40 flex flex-col items-center justify-center md:hidden"
                        >
                            <div className="flex flex-col space-y-8 text-xl text-center">
                                {navItems.map((item, key) => (
                                    <motion.a
                                        key={key}
                                        href={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.1 * key }}
                                        className="text-foreground/90 hover:text-primary transition-colors duration-300 font-semibold"
                                        onClick={() => setIsMenuOpen(false)}
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