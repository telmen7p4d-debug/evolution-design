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
  } catch {
    notFound();
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

    return (data?.poscProducts || []).map((product) => ({
      id: product._id,
      locale: "en",
    }));
  } catch {
    return [];
  }
}
