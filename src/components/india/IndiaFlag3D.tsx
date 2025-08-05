import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const INDIA_FLAG_IMAGE_PATH = '/images/Bandera india.png';

const IndiaFlag3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width);
      mouseY.set((e.clientY - top) / height);
    }
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      className="relative w-full h-[500px] flex justify-center items-center overflow-hidden" 
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="absolute z-20"
        style={{
          rotateX: useTransform(mouseY, [0, 1], [15, -15]),
          rotateY: useTransform(mouseX, [0, 1], [-15, 15]),
          scale: 0.75 
        }}
      >
        <img src={INDIA_FLAG_IMAGE_PATH} alt="India Flag" className="w-96 h-auto drop-shadow-2xl rounded-lg" />
      </motion.div>
    </div>
  );
};

export default IndiaFlag3D;
