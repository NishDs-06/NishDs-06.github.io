import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 relative z-10 overflow-hidden min-h-screen snap-start flex flex-col justify-center">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 border border-white/5 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-md hover:border-white/10"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600 mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or just want to admire the stars together? Send me a message.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-hidden transition-all text-white placeholder:text-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-hidden transition-all text-white placeholder:text-gray-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-hidden transition-all text-white placeholder:text-gray-500 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button type="button" className="cosmic-button flex items-center gap-2 group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <Mail size={16} />
                            <span>ndszz306@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <MessageSquare size={16} />
                            <span>@nishanth_dsv</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};
