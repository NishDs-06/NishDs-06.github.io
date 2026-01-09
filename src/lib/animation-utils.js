

/**
 * Common Animation Variants for Framer Motion
 * Performance-first: uses only transform and opacity.
 */

export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom easing for premium feel
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

/**
 * reducedMotion is handled automatically by Framer Motion if `useReducedMotion` hook is used,
 * but explicit variants help keep logic clean.
 * 
 * To force reduced motion in these variants, you'd typically override them at the component level
 * or use a wrapper. However, Framer Motion v10+ handles "reduce" preference automatically 
 * if you use the `layout` prop or standard animations, often disabling transforms.
 * 
 * For these manuals variants, we will rely on Framer Motion's internal handling 
 * or simple conditional logic in components if strictly needed.
 */
