import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down';
}

export const Reveal = ({ children, width = '100%', delay = 0, direction = 'up' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const xOffset = direction === 'left' ? 75 : direction === 'right' ? -75 : 0;
  const yOffset = direction === 'up' ? 75 : direction === 'down' ? -75 : 0;

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: xOffset, y: yOffset },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
