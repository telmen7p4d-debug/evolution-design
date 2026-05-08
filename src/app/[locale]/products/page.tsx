"use client";

import { useState, useCallback } from "react";
import { useQuery } from "@apollo/client/react";
import { motion } from "framer-motion";
import {
  POSC_PRODUCTS,
  POSC_PRODUCT_CATEGORIES,
  POSC_PRODUCTS_COUNT,
} from "@/graphql/ecommerce/queries/product";
import {
  PoscProductsData,
  PoscProductsVariables,
  PoscProductCategoriesData,
  PoscProductCategoriesVariables,
  PoscProductsCountData,
  PoscProductsCountVariables,
} from "@/graphql/ecommerce/queries/product";
import ProductCard from "@/components/products/ProductCard";
import Pagination from "@/components/common/Pagination";
import { PageLoader } from "@/components/common/Loader";
import EmptyState from "@/components/common/EmptyState";

type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc" | "newest";

export default function ProductsPage() {
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const { data: categoriesData, loading: categoriesLoading } = useQuery<PoscProductCategoriesData>(
    POSC_PRODUCT_CATEGORIES,
    { variables: { perPage: 50 } as PoscProductCategoriesVariables }
  );

  const { data: productsData, loading: productsLoading } = useQuery<PoscProductsData>(
    POSC_PRODUCTS,
    {
      variables: {
        perPage,
        page,
        categoryId,
        isKiosk: true,
      } as PoscProductsVariables,
    }
  );

  const { data: countData, loading: countLoading } = useQuery<PoscProductsCountData>(
    POSC_PRODUCTS_COUNT,
    {
      variables: {
        categoryId,
        isKiosk: true,
      } as PoscProductsCountVariables,
    }
  );

  const handleCursorChange = useCallback((cursor: string | null) => {
    setPage((prev) => (cursor ? prev + 1 : 1));
  }, []);

  const categories = categoriesData?.poscProductCategories || [];
  let products = productsData?.poscProducts || [];
  const totalCount = countData?.poscProductsTotalCount || 0;

  // Client-side sorting
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return (a.unitPrice || 0) - (b.unitPrice || 0);
      case "price-desc":
        return (b.unitPrice || 0) - (a.unitPrice || 0);
      case "name-asc":
        return (a.name || "").localeCompare(b.name || "");
      case "name-desc":
        return (b.name || "").localeCompare(a.name || "");
      case "newest":
      default:
        return 0;
    }
  });

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "NEWEST" },
    { value: "price-asc", label: "PRICE: LOW TO HIGH" },
    { value: "price-desc", label: "PRICE: HIGH TO LOW" },
    { value: "name-asc", label: "NAME: A-Z" },
    { value: "name-desc", label: "NAME: Z-A" },
  ];

  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Filter Bar - Editorial Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between py-6 border-b border-border mb-12"
        >
          {/* Category Filters */}
          <div className="flex items-center gap-6 overflow-x-auto">
            <button
              onClick={() => {
                setCategoryId(undefined);
                setPage(1);
              }}
              className={`text-sm tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
                !categoryId ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => {
                  setCategoryId(cat._id);
                  setPage(1);
                }}
                className={`text-sm tracking-[0.15em] whitespace-nowrap transition-colors duration-300 ${
                  categoryId === cat._id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name?.toUpperCase() || "UNKNOWN"}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
              <span>SORT BY: {sortOptions.find((s) => s.value === sortBy)?.label}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="transition-transform group-hover:rotate-180"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`block w-full text-left px-4 py-3 text-sm tracking-wide transition-colors ${
                    sortBy === option.value
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {productsLoading ? (
          <PageLoader />
        ) : sortedProducts.length === 0 ? (
          <EmptyState title="No products found" />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {sortedProducts.map((product, i) => (
                <ProductCard key={product._id} product={product} index={i} />
              ))}
            </div>

            <div className="mt-16">
              <Pagination
                pageInfo={{ totalCount }}
                limit={perPage}
                onCursorChange={handleCursorChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
