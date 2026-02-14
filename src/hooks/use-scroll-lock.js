import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

export const useScrollLock = (isLocked) => {
    const lenis = useLenis();

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;

        if (isLocked) {
            lenis?.stop();
            document.body.style.overflow = 'hidden';
            // Prevent touch scrolling on mobile
            // document.documentElement.style.overflow = 'hidden';
        } else {
            lenis?.start();
            document.body.style.overflow = originalStyle;
            // document.documentElement.style.overflow = '';
        }

        return () => {
            lenis?.start();
            document.body.style.overflow = originalStyle;
            // document.documentElement.style.overflow = '';
        };
    }, [isLocked, lenis]);
};
