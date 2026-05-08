"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The attention to detail is extraordinary. Every stitch, every seam speaks of uncompromising quality.",
    author: "Elena Voronova",
    title: "Creative Director, VOGUE",
  },
  {
    quote: "evolution represents the future of luxury fashion—minimal yet deeply expressive, contemporary yet timeless.",
    author: "Marcus Chen",
    title: "Fashion Editor, The Cut",
  },
  {
    quote: "I've never encountered garments that feel so substantial yet move so freely. This is craftsmanship at its peak.",
    author: "Sophia Laurent",
    title: "Style Consultant",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase text-muted-foreground text-center mb-16"
        >
          Recognition
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center space-y-6"
            >
              <blockquote className="text-lg leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
