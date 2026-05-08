"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Atelier Image</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              The Brand
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Crafted Without Compromise
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019, evolution emerged from a desire to challenge the conventions of luxury fashion. 
                We believe that true luxury lies in the details—the weight of the fabric, the precision of the cut, 
                the silence of impeccable construction.
              </p>
              <p>
                Each piece in our collection is designed in our London atelier and crafted by master artisans 
                who have dedicated decades to their craft. We source only the finest materials from 
                sustainable suppliers across Italy and Japan.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex h-12 items-center px-8 border border-border text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-secondary mt-4"
            >
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
