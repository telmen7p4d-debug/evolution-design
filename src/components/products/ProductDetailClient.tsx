"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/graphql/ecommerce/queries/product";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const t = useTranslations("Products");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const allImages = [
    product.attachment,
    ...(product.attachmentMore || []),
  ].filter(Boolean);

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card">
              {allImages[selectedImage]?.url ? (
                <Image
                  src={allImages[selectedImage].url}
                  alt={product.name || "Product"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground">No Image</span>
                </div>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 overflow-hidden rounded-sm bg-card transition-all ${
                      selectedImage === i
                        ? "ring-2 ring-foreground"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {img?.url && (
                      <Image
                        src={img.url}
                        alt={`${product.name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-muted-foreground tracking-wide uppercase">
                {product.category?.name}
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">
                {product.name}
              </h1>
              <p className="text-2xl font-medium mt-4">
                ${product.unitPrice?.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm">{t("quantity")}</span>
                <div className="flex items-center border border-border rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full h-14 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
              >
                {t("addToCart")}
              </motion.button>
            </div>

            <div className="border-t border-border pt-8 space-y-4">
              <h3 className="text-sm font-medium">{t("materials")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium Italian wool, Japanese cotton lining. Dry clean only. 
                Made in Portugal. Each garment is individually inspected before packaging.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">
              {t("relatedProducts")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, i) => (
                <ProductCard key={product._id} product={product} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
