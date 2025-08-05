import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, ShieldCheck, BarChart, Smile } from 'lucide-react';

const PRODUCT_IMAGE_PATH = '/images/product_test.png';

const ProductHero3D: React.FC = () => {
  const { t } = useTranslation();
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

  const benefits = [
    // Left Column
    { icon: <Zap size={36} />, title: t('product_header.feature1'), x: '-220%', y: '-80%' },
    { icon: <BarChart size={36} />, title: t('product_header.feature2'), x: '-240%', y: '80%' },
    // Right Column
    { icon: <ShieldCheck size={36} />, title: t('product_header.feature3'), x: '220%', y: '-80%' },
    { icon: <Smile size={36} />, title: t('product_header.feature4'), x: '240%', y: '80%' },
  ];

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full h-[500px] flex justify-center items-center overflow-hidden" style={{ perspective: '1000px' }}>
      
      <motion.div
        className="absolute z-20"
        style={{
          rotateX: useTransform(mouseY, [0, 1], [15, -15]),
          rotateY: useTransform(mouseX, [0, 1], [-15, 15]),
          scale: 2.2
        }}
      >
        <img src={PRODUCT_IMAGE_PATH} alt="Product Test" className="w-64 h-auto drop-shadow-2xl" />
      </motion.div>

      {benefits.map((benefit, i) => (
        <motion.div
          key={i}
          className="absolute z-10 p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg flex items-center space-x-4"
          style={{
            x: benefit.x,
            y: benefit.y,
            rotateX: useTransform(mouseY, [0, 1], [-10, 10]),
            rotateY: useTransform(mouseX, [0, 1], [10, -10]),
            translateX: useTransform(mouseX, [0, 1], i < 2 ? [-50, 50] : [50, -50]),
            translateY: useTransform(mouseY, [0, 1], [-20, 20]),
          }}
        >
          <div className="text-primary">{benefit.icon}</div>
          <h3 className="font-semibold text-primary text-lg">{benefit.title}</h3>
        </motion.div>
      ))}

    </div>
  );
};

export default ProductHero3D;
