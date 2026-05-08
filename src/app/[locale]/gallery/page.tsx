"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";

const galleryItems = [
  { src: null, alt: "Autumn/Winter 2026 Campaign", span: "col-span-1 row-span-2" },
  { src: null, alt: "Behind the Scenes", span: "col-span-1 row-span-1" },
  { src: null, alt: "Lookbook", span: "col-span-1 row-span-1" },
  { src: null, alt: "Atelier", span: "col-span-1 row-span-2" },
  { src: null, alt: "Details", span: "col-span-1 row-span-1" },
  { src: null, alt: "Runway", span: "col-span-1 row-span-1" },
  { src: null, alt: "Materials", span: "col-span-1 row-span-2" },
  { src: null, alt: "Studio", span: "col-span-1 row-span-1" },
  { src: null, alt: "Archive", span: "col-span-1 row-span-1" },
];

export default function GalleryPage() {
  const t = useTranslations("Gallery");

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{t("title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-sm bg-card ${item.span}`}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <span className="text-muted-foreground text-sm text-center">{item.alt}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
