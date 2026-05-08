"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const galleryImages = [
  { src: null, alt: "Campaign 1", span: "col-span-1 row-span-2" },
  { src: null, alt: "Campaign 2", span: "col-span-1 row-span-1" },
  { src: null, alt: "Campaign 3", span: "col-span-1 row-span-1" },
  { src: null, alt: "Campaign 4", span: "col-span-1 row-span-2" },
  { src: null, alt: "Campaign 5", span: "col-span-1 row-span-1" },
  { src: null, alt: "Campaign 6", span: "col-span-1 row-span-1" },
];

export default function GalleryPreview() {
  const t = useTranslations("Gallery");

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
          </div>
          <Link
            href="/gallery"
            className="text-sm tracking-wide border-b border-border pb-1 hover:border-foreground transition-colors"
          >
            View Gallery
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-sm bg-neutral-800 ${img.span}`}
            >
              {img.src ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{img.alt}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
