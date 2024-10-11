'use client'
import { useEffect, useState } from "react";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <button id="ui-to-top" onClick={scrollToTop} className={`ui-to-top mdi mdi-arrow-up active scrollToTopButton ${isVisible ? 'visible' : ''}`}></button>
  )
}

export default ScrollToTop