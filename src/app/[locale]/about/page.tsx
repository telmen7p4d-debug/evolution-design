"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Est. 2019
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9]">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-32">
          <StorySection
            title="The Beginning"
            content="evolution was born from a singular vision: to create clothing that transcends trends and seasons. Our founder, driven by a deep appreciation for architectural forms and material honesty, set out to build a brand that treats every garment as a piece of art."
            imagePosition="left"
          />

          <StorySection
            title="Our Philosophy"
            content="We believe in the power of restraint. Each collection is a meditation on form, proportion, and texture. We strip away the unnecessary to reveal the essential beauty of materials and construction. Our design language speaks in clean lines, unexpected silhouettes, and a monochromatic palette that lets the quality of our work speak for itself."
            imagePosition="right"
          />

          <StorySection
            title="Craftsmanship"
            content="Every piece is handmade by skilled artisans in our partner ateliers across Portugal and Italy. We use only the finest materials—heavyweight Italian wool, Japanese selvedge denim, organic cotton from the Nile Delta. Our quality control process involves three independent inspections before any garment reaches our clients."
            imagePosition="left"
          />

          <StorySection
            title="Sustainability"
            content="Luxury and responsibility are not mutually exclusive. We operate on a made-to-order model for our core collection, significantly reducing waste. Our packaging is 100% recycled and recyclable. We partner exclusively with suppliers who share our commitment to ethical labor practices and environmental stewardship."
            imagePosition="right"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-16"
        >
          {[
            { value: "6+", label: "Years of Excellence" },
            { value: "12", label: "Countries" },
            { value: "50+", label: "Artisan Partners" },
            { value: "100%", label: "Handcrafted" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function StorySection({
  title,
  content,
  imagePosition,
}: {
  title: string;
  content: string;
  imagePosition: "left" | "right";
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        imagePosition === "right" ? "lg:grid-flow-dense" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative aspect-[4/5] overflow-hidden rounded-sm bg-card ${
          imagePosition === "right" ? "lg:col-start-2" : ""
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{title} Image</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </motion.div>
    </div>
  );
}
