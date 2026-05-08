"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("Contact");

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have questions about our collections, need styling advice, 
            or want to discuss a custom order, our team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
          >
            {t("send")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
