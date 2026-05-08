import { getServerApolloClient } from "@/lib/apollo/server-client";
import { POSC_PRODUCTS } from "@/graphql/ecommerce/queries/product";
import { PoscProductsData, Product } from "@/graphql/ecommerce/queries/product";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutSnippet from "@/components/home/AboutSnippet";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default async function Home() {
  const client = await getServerApolloClient();

  let products: Product[] = [];
  try {
    const { data } = await client.query<PoscProductsData>({
      query: POSC_PRODUCTS,
      variables: { perPage: 8, isKiosk: true },
    });
    products = data?.poscProducts || [];
  } catch {
    products = [];
  }

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts products={products} />
      <AboutSnippet />
      <Testimonials />
      <GalleryPreview />
      <ContactCTA />
    </div>
  );
}
