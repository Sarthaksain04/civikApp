import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Blogpg1 from "../Components/Image/Blogpg-1.png";
import Blogpg2 from "../Components/Image/Blogpg-2.png";
import Blogpg3 from "../Components/Image/Blogpg-3.png";
import Blogpg4 from "../Components/Image/Blogpg-4.png";

const images = [Blogpg1, Blogpg2, Blogpg3, Blogpg4];

const Carousel = ({ 
  baseWidth = 1000, 
  autoplay = true, 
  autoplayDelay = 3000, 
  longPressDelay = 500, // Time in ms to trigger long press
  loop = true, 
  round = false,
  children // This will hold your TextType component
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const longPressTimer = useRef(null);
  const isLongPressing = useRef(false);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => {
        if (loop) {
          return (prev + 1) % images.length;
        } else {
          return prev + 1 < images.length ? prev + 1 : prev;
        }
      });
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isPaused, loop]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Long press handlers for mouse
  const handleMouseDown = () => {
    isLongPressing.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPressing.current = true;
      setIsPaused(true);
    }, longPressDelay);
  };

  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    if (isLongPressing.current) {
      setIsPaused(false);
      isLongPressing.current = false;
    }
  };

  const handleMouseLeave = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    if (isLongPressing.current) {
      setIsPaused(false);
      isLongPressing.current = false;
    }
  };

  // Long press handlers for touch (mobile)
  const handleTouchStart = () => {
    isLongPressing.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPressing.current = true;
      setIsPaused(true);
    }, longPressDelay);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    if (isLongPressing.current) {
      setIsPaused(false);
      isLongPressing.current = false;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative w-full h-100 overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
    >
      {/* Background Images */}
      <AnimatePresence custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          alt={`Slide ${index + 1}`}
          draggable={false} // Prevent image dragging
        />
      </AnimatePresence>
      

      
      {/* Centered Text Content */}
      <div className="absolute inset-0 flex items-start justify-center pt-10 z-10 pointer-events-none">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="p-8 text-2xl md:text-4xl font-bold">
            {children}
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              i === index 
                ? 'bg-blue-500 border-white shadow-lg scale-125' 
                : 'bg-gray-700 border-white/70 hover:bg-gray-600 hover:scale-110'
            }`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;