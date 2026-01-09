import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animation-utils";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 relative z-10 overflow-hidden min-h-screen snap-start flex flex-col justify-center">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-subtle" />
            <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-float" />

            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="text-gradient-primary">Touch</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Have a project in mind or just want to admire the stars together? Send me a message.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="glass-card p-8 md:p-12 border border-white/5"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-hidden transition-all text-white placeholder:text-gray-600 focus:bg-black/40"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-hidden transition-all text-white placeholder:text-gray-600 focus:bg-black/40"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 group-focus-within:text-primary transition-colors">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-hidden transition-all text-white placeholder:text-gray-600 focus:bg-black/40 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button type="button" className="cosmic-button flex items-center gap-2 group w-full sm:w-auto justify-center">
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
                            <a href="mailto:ndszz306@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Mail size={16} className="text-white group-hover:text-primary" />
                                </div>
                                <span>ndszz306@gmail.com</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <MessageSquare size={16} className="text-white group-hover:text-primary" />
                                </div>
                                <span>@nishanth_dsv</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};
