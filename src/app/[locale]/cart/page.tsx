"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
}

export default function CartPage() {
  const t = useTranslations("Cart");
  const [items, setItems] = useState<CartItem[]>([
    { id: "1", name: "Oversized Wool Coat", price: 1250, quantity: 1, size: "M" },
    { id: "2", name: "Structured Shoulder Bag", price: 890, quantity: 1, size: "One Size" },
  ]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-12"
        >
          {t("title")}
        </motion.h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-lg text-muted-foreground mb-8">{t("empty")}</p>
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center px-8 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
            >
              {t("continueShopping")}
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-6 p-6 bg-card rounded-sm"
                  >
                    <div className="w-24 h-32 bg-neutral-800 rounded-sm flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">IMG</span>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                      >
                        {t("remove")}
                      </button>
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="p-6 bg-card rounded-sm space-y-4">
                <h2 className="text-lg font-medium">Order Summary</h2>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("subtotal")}</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("shipping")}</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t border-border">
                  <span className="font-medium">{t("total")}</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full h-12 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm text-center leading-[48px] transition-all hover:bg-neutral-200 mt-6"
                >
                  {t("checkout")}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
