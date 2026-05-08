"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { Product } from "@/graphql/ecommerce/queries/product";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product._id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-card">
          {product.attachment?.url ? (
            <Image
              src={product.attachment.url}
              alt={product.name || "Product"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-card">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-xs font-medium tracking-[0.15em] uppercase group-hover:opacity-70 transition-opacity">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground tracking-wide">
            ${product.unitPrice?.toFixed(2)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
