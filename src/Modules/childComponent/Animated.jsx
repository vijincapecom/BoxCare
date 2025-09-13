"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },  
  visible: { opacity: 1, y: 0 },   
};

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
