import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const FluidText = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <section ref={containerRef} className="py-20 overflow-hidden relative z-10">
            <div className="relative">
                <motion.div
                    style={{ x: x1 }}
                    className="flex whitespace-nowrap"
                >
                    <span className="text-[10rem] md:text-[15rem] font-bold text-white/5 leading-none">
                        CREATIVE DEVELOPER &#8226; DESIGNER &#8226;
                    </span>
                    <span className="text-[10rem] md:text-[15rem] font-bold text-white/5 leading-none">
                        CREATIVE DEVELOPER &#8226; DESIGNER &#8226;
                    </span>
                </motion.div>

                <motion.div
                    style={{ x: x2 }}
                    className="flex whitespace-nowrap mt-[-2rem] md:mt-[-4rem]"
                >
                    <span className="text-[10rem] md:text-[15rem] font-bold text-transparent text-stroke-2 text-stroke-white-10 leading-none">
                        INNOVATION &#8226; EXPERIENCE &#8226;
                    </span>
                    <span className="text-[10rem] md:text-[15rem] font-bold text-transparent text-stroke-2 text-stroke-white-10 leading-none">
                        INNOVATION &#8226; EXPERIENCE &#8226;
                    </span>
                </motion.div>
            </div>
        </section>
    );
};
