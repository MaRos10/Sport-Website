import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PageTransition = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, //Trigger animation every time it comes into view
    threshold: 0.1, // Percentage of the component that must be in view
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
