"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h1 className="text-8xl font-semibold tracking-tighter">404</h1>
        <p className="text-lg text-muted-foreground">This page does not exist.</p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center px-8 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
