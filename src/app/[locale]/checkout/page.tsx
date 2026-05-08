"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CheckoutPage() {
  const t = useTranslations("Checkout");
  const [step, setStep] = useState(1);

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Steps */}
            <div className="flex gap-4 mb-8">
              {["Shipping", "Payment"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step > i
                        ? "bg-foreground text-primary-foreground"
                        : "bg-input border border-border text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-medium">{t("shippingInfo")}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First Name"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    placeholder="Last Name"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <input
                  placeholder="Email"
                  className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  placeholder="Address"
                  className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    placeholder="City"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    placeholder="Postal Code"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    placeholder="Country"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setStep(2)}
                  className="w-full h-14 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
                >
                  Continue to Payment
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-medium">{t("paymentInfo")}</h2>
                <input
                  placeholder="Card Number"
                  className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Expiry Date (MM/YY)"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    placeholder="CVV"
                    className="h-12 px-4 bg-input border border-border text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full h-14 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
                >
                  {t("placeOrder")}
                </motion.button>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 bg-card rounded-sm space-y-4">
              <h2 className="text-lg font-medium">{t("orderSummary")}</h2>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$2,140.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between pt-4 border-t border-border">
                <span className="font-medium">Total</span>
                <span className="font-medium">$2,140.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
