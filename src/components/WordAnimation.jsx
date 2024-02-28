import React from "react";
import { motion } from "framer-motion";

export default function WordAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-7xl font-bold"
    >
      Animation
    </motion.div>
  );
}
