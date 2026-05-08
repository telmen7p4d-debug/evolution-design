import { notFound } from "next/navigation";
import { getServerApolloClient, getStaticApolloClient } from "@/lib/apollo/server-client";
import {
  POSC_PRODUCT_DETAIL,
  POSC_PRODUCTS,
  POSC_PRODUCT_SIMILARITIES,
} from "@/graphql/ecommerce/queries/product";
import {
  PoscProductDetailData,
  PoscProductDetailVariables,
  PoscProductsData,
  PoscProductSimilaritiesData,
  PoscProductSimilaritiesVariables,
} from "@/graphql/ecommerce/queries/product";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import { MOCK_PRODUCTS } from "@/lib/mock/products";

interface ProductPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const client = await getServerApolloClient();

  let product = null;
  let relatedProducts = [];

  try {
    const { data: productData } = await client.query<PoscProductDetailData>({
      query: POSC_PRODUCT_DETAIL,
      variables: { _id: id } as PoscProductDetailVariables,
    });
    product = productData?.poscProductDetail;

    // Fallback to mock data if API returns nothing
    if (!product) {
      product = MOCK_PRODUCTS.find((p) => p._id === id) || null;
    }

    if (!product) {
      notFound();
    }

    // Fetch related products from same category
    const { data: relatedData } = await client.query<PoscProductsData>({
      query: POSC_PRODUCTS,
      variables: {
        categoryId: product.category?._id,
        perPage: 4,
        isKiosk: true,
      },
    });

    // Filter out current product
    relatedProducts = (relatedData?.poscProducts || []).filter(
      (p) => p._id !== id
    );
    
    // Fallback to mock related products
    if (relatedProducts.length === 0) {
      relatedProducts = MOCK_PRODUCTS.filter(
        (p) => p.category?._id === product?.category?._id && p._id !== id
      ).slice(0, 3);
    }
  } catch {
    // Fallback to mock data on API error
    product = MOCK_PRODUCTS.find((p) => p._id === id) || null;
    if (!product) {
      notFound();
    }
    relatedProducts = MOCK_PRODUCTS.filter(
      (p) => p.category?._id === product?.category?._id && p._id !== id
    ).slice(0, 3);
  }

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

export async function generateStaticParams() {
  const client = getStaticApolloClient();

  try {
    const { data } = await client.query<PoscProductsData>({
      query: POSC_PRODUCTS,
      variables: { perPage: 100, isKiosk: true },
    });

    const apiProducts = data?.poscProducts || [];
    
    // Merge API products with mock products
    const allProducts = apiProducts.length > 0 ? apiProducts : MOCK_PRODUCTS;

    return allProducts.map((product) => ({
      id: product._id,
      locale: "en",
    }));
  } catch {
    // Return mock product IDs on error
    return MOCK_PRODUCTS.map((product) => ({
      id: product._id,
      locale: "en",
    }));
  }
}
