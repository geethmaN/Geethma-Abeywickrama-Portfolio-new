import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  y = 24,
  duration = 0.6,
  delay = 0,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
