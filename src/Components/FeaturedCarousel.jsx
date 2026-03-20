import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import projectsData from '../data/projects.json'
import { fadeUp } from '../lib/animation-utils'

export const FeaturedCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const featuredProjects = projectsData.filter(p => p.featured)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [emblaApi, onSelect])

    if (featuredProjects.length === 0) return null

    return (
        <section className="py-24 relative z-10 overflow-hidden bg-black/20">
            <div className="container-custom">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Spotlight <span className="text-gradient-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground">Some of my best work, highlighted for you.</p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0f0f11]" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {featuredProjects.map((project) => (
                                <div className="flex-[0_0_100%] min-w-0 relative" key={project.id}>
                                    <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/60 to-transparent" />

                                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                            <div className="max-w-3xl">
                                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-5">
                                                    {project.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-4">
                                                    {project.link !== "#" && (
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="cosmic-button flex items-center gap-2 text-sm px-6 py-2">
                                                            <ExternalLink size={16} /> Live Demo
                                                        </a>
                                                    )}
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm flex items-center gap-2 transition-colors">
                                                        <Github size={16} /> Source Code
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-primary/50 text-white backdrop-blur-md border border-white/10 transition-all z-20 hidden md:block"
                        onClick={scrollPrev}
                    >
                        <ArrowLeft size={24} />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-primary/50 text-white backdrop-blur-md border border-white/10 transition-all z-20 hidden md:block"
                        onClick={scrollNext}
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
