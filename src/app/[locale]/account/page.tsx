"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const tabs = ["orders", "profile", "wishlist", "settings"] as const;
type Tab = (typeof tabs)[number];

export default function AccountPage() {
  const t = useTranslations("Account");
  const [activeTab, setActiveTab] = useState<Tab>("orders");

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left h-12 px-4 text-sm font-medium rounded-sm transition-colors ${
                  activeTab === tab
                    ? "bg-foreground text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            {activeTab === "orders" && (
              <div className="space-y-4">
                <h2 className="text-xl font-medium mb-6">{t("orders")}</h2>
                {[1, 2].map((order) => (
                  <div key={order} className="p-6 bg-card rounded-sm space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Order #EV-{2026}00{order}</p>
                        <p className="text-sm text-muted-foreground">Placed on March {10 + order}, 2026</p>
                      </div>
                      <span className="text-sm px-3 py-1 bg-secondary rounded-full">Delivered</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">2 items — $1,640.00</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium mb-6">{t("profile")}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      defaultValue="Alex"
                      className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      defaultValue="Morgan"
                      className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    defaultValue="alex@example.com"
                    className="w-full h-12 px-4 bg-input border border-border text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="h-14 px-8 bg-foreground text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all hover:bg-neutral-200"
                >
                  Save Changes
                </motion.button>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div>
                <h2 className="text-xl font-medium mb-6">{t("wishlist")}</h2>
                <p className="text-muted-foreground">Your wishlist is empty.</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium mb-6">{t("settings")}</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card rounded-sm">
                    <span>Email Notifications</span>
                    <div className="w-12 h-6 bg-foreground rounded-full relative cursor-pointer">
                      <div className="w-5 h-5 bg-primary-foreground rounded-full absolute right-0.5 top-0.5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card rounded-sm">
                    <span>Marketing Communications</span>
                    <div className="w-12 h-6 bg-muted rounded-full relative cursor-pointer">
                      <div className="w-5 h-5 bg-muted-foreground rounded-full absolute left-0.5 top-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
