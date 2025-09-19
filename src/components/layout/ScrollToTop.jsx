import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            className="scroll-top"
            onClick={scrollToTop}
            style={{ opacity: isVisible ? '1' : '0', visibility: isVisible ? 'visible' : 'hidden' }}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up" aria-hidden="true"></i>
        </button>
    );
};

export default ScrollToTop;