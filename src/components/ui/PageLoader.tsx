"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO_SRC } from "@/components/ui/Logo";
import { easeOutExpo } from "@/lib/motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <div className="loader-ring h-20 w-20 rounded-full border-4 border-green/30 border-t-green" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={LOGO_SRC}
                alt="ELGC"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />
            </motion.div>
          </motion.div>
          <motion.p
            className="text-sm tracking-widest text-gray-text uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: [0.35, 1, 0.35], y: 0 }}
            transition={{
              opacity: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 0.5, ease: easeOutExpo },
            }}
          >
            Loading Excellence...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
